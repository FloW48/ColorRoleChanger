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

bot.on('message', message => {
	if(message.content.startsWith("color example") && message.author.id == '256054054260572161'){
		message.channel.send(random_hex_color_code())
	}
})

function random_hex_color_code(){
    //Alea RGB
    // Alea 122 - 255
    // Fiesta
    let color = [0,0,0]
    color[Math.floor(Math.random() * 3)] = Math.floor(Math.random() * 255) + 122;
    for(let i = 0; i < color.length; i++){
        if(color[i] == 0){
            color[i] = Math.floor(Math.random() * 256)
        }
    }
    let colorHex = "#";
    colorHex = color[0].toString(16);
    colorHex += color[1].toString(16);
    colorHex += color[2].toString(16);

    return colorHex
}