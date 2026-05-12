import fs from "fs";
import pkg from 'faiss-node';
import { getEmbedding } from './models/bailianEmbeddingModel.js';
import { execute } from './models/deepseekModel.js';
import { paragraphs } from './splitParagraph.js';

const { IndexFlatL2 } = pkg;

// 假设千问向量维度是 1024（请按实际改）
const DIMENSION = 1024; 

// 初始化 FAISS 索引（使用欧氏距离 L2）
const index = new IndexFlatL2(DIMENSION);

// 向量化每一段落文本并存入向量数据库
const vectorStore = [];
for (const paragraph of paragraphs) {
    const vector = await getEmbedding(paragraph);
    index.add(vector); 
    vectorStore.push({ vector, paragraph });
}

// 用户提问（提示词） - 在命令行中输入的
const question = fs.readFileSync('./user_prompt/user_prompt.md', 'utf8');

// 用户提示词也需要向量化
const queryVector = await getEmbedding(question);

// 开始从数据库中召回与问题最相关的K个向量
const topK = 4;
const retrievers = index.search(queryVector, topK);
const { labels, distances } = retrievers;

// 根据召回的向量找到原始段落文本
const result = [];
for (let i = 0; i < labels.length; i++) {
  const id = labels[i];
  const distance = distances[i];
  const textIndex = labels[i];
  const textContent = vectorStore.find((_, index) => textIndex === index).paragraph
  result.push({
    distance,
    textContent,
  })
}

// 与大模型对话
const context = result.map((r, i) => `${i+1}. ${r.textContent}`).join("\n");
const promptTemplate = `
请根据下面提供的【上下文】来回答用户的【问题】。
如果你无法从上下文中得到确切的答案，请回答“我不知道”，不要编造答案。
【上下文】:
${context}

【问题】:
${question}

【回答】:
`

// fs.writeFile('final_result.md', promptTemplate, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }
//     console.log('File written successfully');
// });

execute(promptTemplate);