import readline from "readline";
import fs from "fs";
import { spawn } from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = `
This is an easy RAG Demo without any rerank.
Used QWen embedding model and Deepseek-v4-pro.
You can ask questions base on the article, for example:
# 最终战斗中大雄使用的道具是什么？
# 哈迪斯的大招叫什么？
# 大雄一行人在哪里得到的胜利皇冠？
...
please input your prompt:
`;

const promptPath = './user_prompt/user_prompt.md';

rl.question(userInput, text => {
  fs.writeFileSync(promptPath, text, 'utf8');
  console.log(`✅ user prompt已写入 ${promptPath}，...等待AI加载并思考回答...`);

  rl.close();

  spawn('node', ['process.js'], { stdio: 'inherit' });
});