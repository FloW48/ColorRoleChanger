const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async function(){
    bot.user.setActivity("Every 5 seconds, I change color ;)").catch(console.error);
    let server = await bot.guilds.fetch('210094361428492289')
    let role = await server.roles.fetch('773650289601019924')
    let server2 = await bot.guilds.fetch('626684559345451010')
    let role2 = await server2.roles.fetch('774379949015564348')
    setTimeout(function(){
        timer(role, role2);
    }, 10000)
})

bot.login('Nzc0MzU5NjAxODA5MTk1MDgw.X6Wokw.bZjIlCX2Lma5ERkqHiKrsLuJuN4')
    .catch(console.error);

async function timer(role, role2){
    let randomColor = random_hex_color_code();
    await role.setColor(randomColor)
    await role2.setColor(randomColor)
    setTimeout(function(){
        timer(role, role2)
    }, 10000
    )
}

function random_hex_color_code(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}