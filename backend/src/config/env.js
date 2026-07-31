import "dotenv/config"

export const env = {
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV || "development",

    clientUrls: (process.env.CLIENT_URL || "http://localhost:5173")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean),

    databaseUrl: process.env.DATABASE_URL || "",

    jwtSecret: process.env.JWT_SECRET || "hbfbwfgehjgefegfvhjefskgbjekefghefeggvjaefhg",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "30d",

    groq: {
        apiKey: process.env.GROQ_API_KEY || "",
        model: process.env.GROQ_MODEL || "openai/gpt-oss-20b",
    },
};

export const isProd = env.nodeEnv === "production";