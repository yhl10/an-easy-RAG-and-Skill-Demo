import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.BAILIAN_API_KEY,
    baseURL: process.env.BAILIAN_URL
});

export const getEmbedding = async (inputText) => {
    try {
        const completion = await openai.embeddings.create({
            model: "text-embedding-v4",
            input: inputText
        });
        return completion.data[0].embedding;
    } catch (error) {
        console.error('Error:', error);
    }
}