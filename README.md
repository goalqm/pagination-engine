# Pagination Engine

> Download now using NPM! `npm install paginator-engine.djs`

## Usage

```js
const Paginator = require('paginator-engine.djs')

const embed1 = new MessageEmbed().setDescription('Embed 1').setColor('GREY');
const embed2 = new MessageEmbed().setDescription('Embed 2').setColor('ORANGE');
const embed3 = new MessageEmbed().setDescription('Embed 3').setColor('BLURPLE');
const embed4 = new MessageEmbed().setDescription('Embed 4').setColor('DARK_GOLD');
const embed5 = new MessageEmbed().setDescription('Embed 5').setColor('DARK_GREEN');
const embed6 = new MessageEmbed().setDescription('Embed 6').setColor('DARK_PURPLE');
const embed7 = new MessageEmbed().setDescription('Embed 7').setColor('DARK_RED');
const embed8 = new MessageEmbed().setDescription('Embed 8').setColor('DARK_TEAL');
const embed9 = new MessageEmbed().setDescription('Embed 9').setColor('DARK_AQUA');
const embed10 = new MessageEmbed().setDescription('Embed 10').setColor('DARK_BLUE');

const pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10];
const buttons = ['◀️', '▶️'];
const timeout = 47000;

const paginator = new Paginator(pages, buttons, timeout);

return paginator.send(message);
```

## Output

![alt text](https://raw.githubusercontent.com/goalqm/pagination-engine/main/Paginator/botexample.png)

## Todo

> Add more button components `start, end etc`
> Add reaction pagination using type parameters
> Add Typescript support
> Update for discord.js v14
