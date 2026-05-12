import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: process.env.DEEPSEEK_URL
});

export const execute = async (promptTemplate) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: promptTemplate }],
    model: "deepseek-v4-pro",
    thinking: {"type": "enabled"},
    reasoning_effort: "high",
    stream: false,
  });
  console.log("✨ AI 回答：")
  console.log(completion.choices[0].message.content);
}
