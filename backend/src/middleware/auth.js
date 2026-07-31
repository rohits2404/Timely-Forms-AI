import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { verifyToken } from "../utils/token.js";
import { findUserById } from "../repositories/user.repo.js";

export const protect = asyncHandler(async (req, _res, next) => {
  
    const header = req.headers.authorization || "";
  
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;

    if (!token) {
        throw ApiError.unauthorized("Authentication Required");
    }

    let decoded;

    try {
        decoded = verifyToken(token);
    } catch {
        throw ApiError.unauthorized("Invalid Or Expired Token");
    }

    const user = await findUserById(decoded.id);

    if (!user) {
        throw ApiError.unauthorized("User No Longer Exists");
    }

    req.user = user;
    next();
});