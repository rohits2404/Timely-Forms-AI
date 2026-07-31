import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { changePassword, loginUser, registerUser, toPublicUser, updateProfile } from "../services/auth.service.js";
import { sendSuccess } from "../utils/apiResponse.js";
import { deleteUser } from "../repositories/user.repo.js";

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw ApiError.badRequest("Name, Email And Password Are Required");
    }
    const { user, token } = await registerUser({
        name,
        email,
        password,
    });
    sendSuccess(res, {
        statusCode: 201,
        message: "Account Created Successfully",
        data: { user, token },
    });
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw ApiError.badRequest("Email And Password Are Required");
    }
    const { user, token } = await loginUser({
        email,
        password,
    });
    sendSuccess(res, {
        message: "Logged In Successfully",
        data: { user, token },
    });
});

export const getMe = asyncHandler(async (req, res) => {
    sendSuccess(res, {
        data: { user: toPublicUser(req.user) },
    });
});

export const patchProfile = asyncHandler(async (req, res) => {
    const user = await updateProfile(req.user._id, req.body);
    sendSuccess(res, {
        message: "Profile Updated",
        data: { user },
    });
});

export const patchPassword = asyncHandler(async (req, res) => {
    await changePassword(req.user._id, req.body);
    sendSuccess(res, {
        message: "Password Changed",
    });
});

export const deleteAccount = asyncHandler(async (req, res) => {
    await deleteUser(req.user._id);
    sendSuccess(res, {
        message: "Account Deleted",
    });
});