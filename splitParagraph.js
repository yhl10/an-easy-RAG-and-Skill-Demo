import fs from "fs";

const text = fs.readFileSync('./yhl_docs/article.txt', { encoding: 'utf8', flag: 'r' });

export const paragraphs = text.split('END').filter(paragraph => !!paragraph.length);