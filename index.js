const Discord = require('discord.js');
const bot = new Discord.Client();
const secret = require("./secret.json");

started = false;
hour = 4

bot.on('ready', async function(){
    bot.user.setActivity("Every day, I change color ;)").catch(console.error);
    let server = await bot.guilds.fetch('626684559345451010')
    let roleFloW = await server.roles.fetch('774379949015564348')
    let roleClem = await server.roles.fetch('803757985889386536')
    let roleLoic = await server.roles.fetch('785463204842700810')
    let roleQuen = await server.roles.fetch('803354715198193734')
    let roleMaxi = await server.roles.fetch('803757984072204348')
    let roleRoma = await server.roles.fetch('760461642835427348')
    let roleNoah = await server.roles.fetch('803757972643774534')
    let roleAlex = await server.roles.fetch('804281331060178954')
    checkIfTime([roleFloW,roleClem,roleLoic,roleQuen,roleMaxi,roleRoma,roleNoah, roleAlex])
})

async function checkIfTime(arrayRoles){
    hourNow = new Date().getUTCHours();
    if(hour == hourNow){
        timer(arrayRoles)
    }
    else{
        setTimeout(function(){
            checkIfTime(arrayRoles)
        }, 1000*60)
    }
}

bot.login(secret.token)
    .catch(console.error);

async function timer(arrayRoles){
    for (role of arrayRoles){
        let randomColor = random_hex_color_code();
        await role.setColor(randomColor)
    }
    setTimeout(function(){
        timer(arrayRoles)
    }, 1000*3600*24
    )
}

function random_hex_color_code(){
    var letters = "0123456789ABCDEF"; 
    var color = '#'; 
    for (var i = 0; i < 6; i++) 
       color += letters[(Math.floor(Math.random() * 16))]; 
    return color;
}