const Discord = require('discord.js');
const bot = new Discord.Client();
const secret = require("./secret.json");
const schedule = require('node-schedule')

started = false;
hour = 7

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
    const job = schedule.scheduleJob('0 0 7 * * *', function(){
        timer([roleFloW,roleClem,roleLoic,roleQuen,roleMaxi,roleRoma,roleNoah, roleAlex])
    });
})

bot.on('rateLimit', async function(infos) {
    console.log(infos)
    let server = await bot.guilds.fetch('626684559345451010')
    let channel = await server.channels.cache.get('626697686166536202')
    channel.send("<@256054054260572161>\n"+infos)

});


async function timer(arrayRoles){
    for (role of arrayRoles){
        let randomColor = random_hex_color_code();
        await role.setColor(randomColor)
        console.log("color changed")
    }
}

bot.login(secret.token)
    .catch(console.error);


bot.on('message', message => {
	if(message.content == "color example" && message.author.id == '256054054260572161'){
		message.channel.send(random_hex_color_code())
	}
    else if(message.content.startsWith("color")){
        if(message.content.startsWith("color random")){
            let member = message.member
            switch (member.id) {
                case '256054054260572161':
                    changeColorOfMember(member, '774379949015564348', random_hex_color_code())
                    break;
                case '380030823803518977':
                    changeColorOfMember(member, '803757985889386536', random_hex_color_code())
                    break;
                case '310450863845933057':
                    changeColorOfMember(member, '785463204842700810', random_hex_color_code())
                    break;
                case '291310470391005185':
                    changeColorOfMember(member, '803354715198193734', random_hex_color_code())
                    break;
                case '328310845509599233':
                    changeColorOfMember(member, '803757984072204348', random_hex_color_code())
                    break;
                case '358194448812736512':
                    changeColorOfMember(member, '760461642835427348', random_hex_color_code())
                    break;  
                case '270173272950308866':
                    changeColorOfMember(member, '803757972643774534', random_hex_color_code())
                    break;
                case '244532691960070145':
                    changeColorOfMember(member, '804281331060178954', random_hex_color_code())
                    break;      
                default:
                    message.channel.send("id introuvable")
                    break;
            }
        }
        else if(message.content.startsWith("color #")){
            let args = message.content.split(" ")
            let color = args[1]
            if(color.length != 7){
                message.channel.send("Format incorrect (#a1b2d3 est le bon format par exemple)")
            }
            else if(Number(color.substring(1, color.length).toString(10)) < 0 || Number(color.substring(1, color.length).toString(10)) > 255255255){
                message.channel.send("Nombre entré incorrect, min = #000000 max = #ffffff")
            }
            else{
                let member = message.member
                switch (member.id) {
                    case '256054054260572161':
                        changeColorOfMember(member, '774379949015564348', args[1])
                        break;
                    case '380030823803518977':
                        changeColorOfMember(member, '803757985889386536', args[1])
                        break;
                    case '310450863845933057':
                        changeColorOfMember(member, '785463204842700810', args[1])
                        break;
                    case '291310470391005185':
                        changeColorOfMember(member, '803354715198193734', args[1])
                        break;
                    case '328310845509599233':
                        changeColorOfMember(member, '803757984072204348', args[1])
                        break;
                    case '358194448812736512':
                        changeColorOfMember(member, '760461642835427348', args[1])
                        break;  
                    case '270173272950308866':
                        changeColorOfMember(member, '803757972643774534', args[1])
                        break;
                    case '244532691960070145':
                        changeColorOfMember(member, '804281331060178954', args[1])
                        break;      
                    default:
                        message.channel.send("id introuvable")
                        break;
                }
            }
        }
    }
})

function changeColorOfMember(member, idRole, color){
    let role = member.roles.cache.get(idRole)
    role.setColor(color)
}

function random_hex_color_code(){
    let color = [0,0,0]
    color[Math.floor(Math.random() * 3)] = Math.floor(Math.random() * 122) + 122;
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