---
name: category-things
description: 按照每种商品的价格进行分类。
---

## 适用场景
超过（>=）20元的东西分为高价产品，否则为低价产品

## 示例输入
json
[
  {
    production: 'apple',
    price: 20
  },
  {
    production: 'banana',
    price: 30
  },
  {
    production: 'paper',
    price: 8
  },
  {
    production: 'pen',
    price: 41
  },
]

## 示例输出
json
{
  lowPriceProduction: ['apple', 'banana', 'pen'],
  highPriceProduction:['paper']
}

## 注意事项
将生成的json文件放在yhl_skills_test这个folder下，
json文件的名字是category-things.result.json
如果category-things.result.json已经存在，则新生成的json文件名为
category-things.result1.json，以此类推