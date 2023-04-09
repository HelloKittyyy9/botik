import express from 'express'
import { PORT, TOKEN } from './config.js'
import Telegraf from 'telegraf'

const app = express()
const bot = new Telegraf(TOKEN)

bot.start(ctx => {
    ctx.reply('Welcome, bro')
})
bot.command("admins", (ctx) =>
  ctx.reply(
    "Moю маму зовут Элина"
  )
);
bot.command("help", (ctx) =>
  ctx.reply(
    "Рассказывай быстрей, чем смогу тем помогу)"
  )
);


bot.on('voice', ctx => {
    ctx.reply('Какой чудный голос')
})

bot.on('sticker', ctx => {
    ctx.reply('Милый стикер')
})

bot.on('edited_message', ctx => {
    ctx.reply('Ты успешно изменил сообщение')
})
bot.on('photo', ctx => {
    ctx.reply('Ты самый красивый человек на свете')
})
bot.on('video', ctx => {
    ctx.reply('Что то интересное')
})
bot.command('time', ctx => {
    ctx.reply(String(new Date()))
})

bot.hears('Андрей', ctx => {
    ctx.reply('Ты просто лучший')
})
bot.hears('Элина', ctx => {
    ctx.reply('Здраствуй,мама')
})
bot.hears('Влад', ctx => {
    ctx.reply('Извини, но ты лох')
})
bot.hears('Саша', ctx => {
    ctx.reply('Ты хорош')
})
bot.hears('Никита', ctx => {
    ctx.reply('Самый крутой классный руководитель')
})
bot.on('text', ctx => {
    ctx.reply('Рад твоему сообщению. Я счастлив что ты решил написал мне')
})

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))