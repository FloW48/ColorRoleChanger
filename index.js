const Discord = require('discord.js');
const bot = new Discord.Client();
const secret = require("./secret.json");

bot.on('ready', async function(){
    bot.user.setActivity("Every day, I change color ;)").catch(console.error);
    let server = await bot.guilds.fetch('626684559345451010')
    let role = await server.roles.fetch('774379949015564348')
    timer(role);
})

bot.login(secret.token)
    .catch(console.error);

async function timer(role){
    console.log("change color")
    let randomColor = random_hex_color_code();
    await role.setColor(randomColor)
    setTimeout(function(){
        timer(role, role2)
    }, 1000*3600*24
    )
}

function random_hex_color_code(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}