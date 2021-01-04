const Discord = require('discord.js');
const bot = new Discord.Client();
const bot2 = new Discord.Client();

bot.on('ready', async function(){
    bot.user.setActivity("Every 5 seconds, I change color ;)").catch(console.error);
    let server1 = await bot.guilds.fetch('626684559345451010')
    let role = await server1.roles.fetch('774379949015564348')
    setTimeout(function(){
        timer(role);
    }, 1000)
})

bot.login('token1')
    .catch(console.error);

bot2.on('ready', async function(){
    bot2.user.setActivity("Every 5 seconds, I change color ;)").catch(console.error);
    let server2 = await bot2.guilds.fetch('210094361428492289')
    let role = await server2.roles.fetch('774621567317049355')
    setTimeout(function(){
        timer(role);
    }, 1000)
})

bot2.login('token2')

async function timer(role){
    let randomColor = random_hex_color_code();
    await role.setColor(randomColor)
    setTimeout(function(){
        timer(role)
    }, 10000
    )
}

function random_hex_color_code(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}
