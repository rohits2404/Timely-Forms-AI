import { createUser, findUserByEmail, findUserById, updateUserPassword, updateUserProfile } from "../repositories/user.repo.js";
import { ApiError } from "../utils/ApiError.js"
import bcrypt from "bcryptjs"
import { signToken } from "../utils/token.js";

const AVATAR_COLORS = [
    "#0c8b7c",
    "#2563eb",
    "#7c3aed",
    "#db2777",
    "#ea580c",
    "#059669",
];

function pickAvatarColor(seed) {
    const sum = [...seed].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

export function toPublicUser(user) {
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        avatarColor: user.avatarColor,
        createdAt: user.createdAt,
    };
}

export async function registerUser({ name, email, password }) {
    if (name.trim().length < 2)
        throw ApiError.badRequest("Name Must Be At Least 2 Characters");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        throw ApiError.badRequest("Please Provide a Valid Email");

    if (password.length < 6)
        throw ApiError.badRequest("Password Must Be At Least 6 Characters");

    const existing = await findUserByEmail(email);

    if (existing)
        throw ApiError.conflict("An Account With This Email Already Exists");

    const hash = await bcrypt.hash(password, 10);

    const user = await createUser({
        name: name.trim(),
        email,
        password: hash,
        avatarColor: pickAvatarColor(email),
    });

    const token = signToken({ id: user._id });

    return {
        user: toPublicUser(user),
        token,
    };
}

export async function loginUser({ email, password }) {
    const user = await findUserByEmail(email, {
        withPassword: true,
    });

    if (!user)
        throw ApiError.unauthorized("Invalid Email Or Password");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
        throw ApiError.unauthorized("Invalid Email Or Password");

    const token = signToken({ id: user._id });

    return {
        user: toPublicUser(user),
        token,
    };
}

export async function updateProfile(userId, { name, avatarColor }) {
    const user = await updateUserProfile(userId, {
        name: name?.trim() || null,
        avatarColor,
    });

    if (!user)
        throw ApiError.notFound("User Not Found");

    return toPublicUser(user);
}

export async function changePassword(
    userId,
    { currentPassword, newPassword }
) {
    if (!currentPassword || !newPassword)
        throw ApiError.badRequest(
            "Current and New Password Are Required"
        );

    if (newPassword.length < 6)
        throw ApiError.badRequest(
            "New Password Must Be At Least 6 Characters"
    );

    const user = await findUserById(userId, {
        withPassword: true,
    });

    if (!user)
        throw ApiError.notFound("User Not Found");

    const isMatch = await bcrypt.compare(
        currentPassword,
        user.password
    );

    if (!isMatch)
        throw ApiError.unauthorized(
            "Current Password Is Incorrect"
        );

    await updateUserPassword(
        userId,
        await bcrypt.hash(newPassword, 10)
    );
}