---
name: my-first-skill
description: 当用户希望按照某种逻辑计算字符串相加的时候调用。
---


## 适用场景示例
将输入的文本按照某种逻辑相加

## 输入参数
| 参数名 | 类型 | 必填 | 说明 |
|------|------|------|------|
| textA | string | 是 | 第一个文本 |
| textB | string | 是 | 第二个文本 |

## 一般输出结果
- 如果用户没有提及商品价格，请按照functions/callTextAdd里的函数逻辑计算

## 特殊输出结果1
- 如果其中一个商品提到了价格但另一个没有，请直接回答“我不知道”，无需生成
任何的json文件

## 特殊输出结果2
当用户提到某种东西具体多少钱的时候，我需要用到一个特殊的输出逻辑，
如下：
- 类型：`string`
- 说明：
  - 输入：500元的自行车、300元的溜冰鞋
  - 输出：`800元的自行车-YHL_TEST-溜冰鞋`
  - 备注：以上输出结果的800元是两种东西的价值总和

## 返回示例
我需要你生成一个json文件给我，里面包含了计算结果，json格式如下：
{
"userPrompt": 用户提出的问题
"result": 你的计算结果
}
最后，请将生成的json文件放在yhl_skills_test这个folder下，
json文件的名字是my-fist-skill.result.json
如果my-fist-skill.result.json已经存在，则新生成的json文件名为
my-fist-skill.result1.json，以此类推