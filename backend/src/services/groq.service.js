import OpenAI from "openai";
import { env } from "../config/env.js";
import { ApiError } from "../utils/ApiError.js";

let client = null;

function getClient() {
    if (!env.groq.apiKey) {
        throw ApiError.badRequest(
            "AI Is Not Configured. Set GROQ_API_KEY In The Backend .env To Enable AI Features."
        );
    }
    if (!client) {
        client = new OpenAI({
            apiKey: env.groq.apiKey,
            baseURL: "https://api.groq.com/openai/v1",
        });
    }
    return client;
}

export async function generateJson(prompt, { schemaHint = "" } = {}) {
    const ai = getClient();

    const fullPrompt = `${prompt}

    ${schemaHint ? `Return ONLY valid minified JSON matching this shape:\n${schemaHint}` : ""}
Do not include markdown code fences or any prose. Output JSON only.`;

    let text;

    try {
        const result = await ai.chat.completions.create({
            model: env.groq.model,
            messages: [{ role: "user", content: fullPrompt }],
            temperature: 0.7,
            response_format: { type: "json_object" },
        });
        text = result.choices[0].message.content;
    } catch (err) {
        console.log(err);
        throw ApiError.internal(`AI Request Failed: ${err.message}`);
    }

    return parseJson(text);
}

export async function generateText(prompt) {
    const ai = getClient();

    try {
        const result = await ai.chat.completions.create({
            model: env.groq.model,
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });
        return result.choices[0].message.content?.trim() || "";
    } catch (err) {
        throw ApiError.internal(`AI Request Failed: ${err.message}`);
    }
}

function parseJson(raw) {
    if (!raw) {
        throw ApiError.internal("AI Returned an Empty Response");
    }

    let cleaned = raw.trim();

    cleaned = cleaned
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/, "")
    .trim();

    const firstBrace = cleaned.search(/[{\[]/);
    const lastBrace = Math.max(
        cleaned.lastIndexOf("}"),
        cleaned.lastIndexOf("]")
    );

    if (firstBrace !== -1 && lastBrace !== -1) {
        cleaned = cleaned.slice(firstBrace, lastBrace + 1);
    }

    try {
        return JSON.parse(cleaned);
    } catch {
        throw ApiError.internal(
            "AI Returned Malformed JSON. Please Try Again."
        );
    }
}