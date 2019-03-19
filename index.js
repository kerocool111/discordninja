const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTQ1MDIwNzEyNTAzNzM4Mzgw.D26jtg.3gappgQYQTKZoJ-05rmM9N7-GH8';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO"){
        msg.reply('Hey There!');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "شوكر"){
        msg.reply('الهبيد!');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "نينجا"){
        msg.reply('الصدر الحنين');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "مسحور"){
        msg.reply('الليدر ♥️');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "عايد"){
        msg.reply('اخويا الفاجر 😂');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "حد يلعب"){
        msg.reply('متردو يا جدعاااااان 😂');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "اه"){
        msg.reply('17');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "رياض"){
        msg.reply('شرواد العرب!');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "عرتضى"){
        msg.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgu4CQgJ68l4DowIwv7KR8_3a9OQ8UCD4Siz1TwsylDbJjVxXO');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "احمد موسي"){
        msg.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_FVAwJwNsAq-FiJI7TPMgceOMJAQTR9BBGoAKMe2-_vy8bMuq');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "البنات"){
        msg.reply('مكانهم المطبخ 😜');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "فايبر"){
        msg.reply('مشروع فلنكايه فاشله 😂');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "Viper"){
        msg.reply('عايز انام 😴');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "الطيار"){
        msg.reply('مش هيقوم من ع الكرسي');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "العقاب"){
        msg.reply('شبح المجال 👻');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "عقاب"){
        msg.reply('ابو ماكس 🐶');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "ناريمان "){
        msg.reply('بونبونايه الكلان 🍬');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "سديم"){
        msg.reply('الام المزّه 💅');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "AH"){
        msg.reply('17');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "رضا"){
        msg.reply('اقوى ايميليتور في التشانل 🔥');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "عبودي"){
        msg.reply('نينجا العرب');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "خليل"){
        msg.reply('اعترض');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "باليز"){
        msg.reply('لا');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "بالييز"){
        msg.reply('لا');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "باليييز"){
        msg.reply('لا');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "بالييييز"){
        msg.reply('ك');
    }
})

.setMaxListeners(90);

bot.login(token);
