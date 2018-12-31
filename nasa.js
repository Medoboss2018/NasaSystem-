const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : NOT MEDO`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : NOT MEDO ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help `,"http://twitch.tv/medo149")
client.user.setStatus("dnd")
});


client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content.startsWith (prefix + 'info')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:**نوع السرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ اعضاء السرفر__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ الأونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__رومات الكتابه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ الرومات الصوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ اونر السيرفر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ اى دى السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تريخ انشاء السرفر__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});

client.on('message', message => {
     if (message.content === "-help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$clear** ' ,' **مسح الشات** ')
.addField('     **$bc**  ' ,' **نشر رساله للأعضاء** ')
.addField('     **$info**  ' ,' **معلومات السرفر** ')
.addField('     **$id**  ' ,' **حتى تعرف الاى دى حقق** ')
.addField('     **$bot**  ' ,' **معلومات البوت** ')
.addField('     **$mute**  ' ,' **لإعطاء شخص ميوت** ')
.addField('     **$unmute**  ' ,' **لفك من شخص ميوت** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('``الاسم👑``' , `[ ${client.user.tag} ]` , true)
        .addField('``الايدي🆔``' , `[ ${client.user.id} ]` , true)
        .addField('``سرعة البوت📨``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``السيرفرات🌐``', [client.guilds.size], true)
            .addField('``المستخدمين👥``' ,`[ ${client.users.size} ]` , true)
        .addField('``الرومات💭``' , `[ ${client.channels.size} ]` , true)
                  .addField('``البرفكس✴️``' , `[ $ ]` , true)
               
    })
}
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '-bot') {
              message.channel.send('**  By:@! Not Medo#8888 **');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});


client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});

   client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "-mute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
      
      if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
    
     if (message.guild.member(user).roles.has(muteRole.id)) {
   return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
   } else {
       message.guild.member(user).addRole(muteRole).then(() => {
   return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
   });
     }
   
   };
   
   });
   
      client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "-unmute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles**').catch(console.error);
   
     if (message.guild.member(user).removeRole(muteRole.id)) {
   return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
   } else {
       message.guild.member(user).removeRole(muteRole).then(() => {
   return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
   });
     }
   
   };
   
   });
   
   
   
   var prefix = "-"
   client.on('message', message => {
     if (message.author.x5bz) return;
     if (!message.content.startsWith(prefix)) return;
   
     let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
   
     let args = message.content.split(" ").slice(1);
   
     if (command == "kick") {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
            
     if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS `Permission**");

     if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");

     let user = message.mentions.users.first();
     let reason = message.content.split(" ").slice(2).join(" ");
     
   
     if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");
     if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
     if(!reason) return message.reply ("**اكتب سبب الطرد**");
     if (!message.guild.member(user)
     .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
   
     message.guild.member(user).kick();
   
     const kickembed = new Discord.RichEmbed()
     .setAuthor(`KICKED!`, user.displayAvatarURL)
     .setColor("RANDOM")
     .setTimestamp()
     .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
     .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
     .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     message.channel.send({
       embed : kickembed
     })
   }
   });
    
   
   
	 client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك الصلاحيه حتى تمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تم مسح الشات",

      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 

client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("CONNECT"))  return;
                            let embed4 = new Discord.RichEmbed()
             .setDescription("**:white_check_mark: | جاري ارسال البرودكاست**")
           .addField("مرسل البرودكاست" , message.author)
          .addField("نص البرودكاست" ,args.join("  "))
                            .addField("عدد الاعضاء المرسل لهم :busts_in_silhouette:" ,` **[${message.guild.memberCount}]**`,true)
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            
                          }
});
 



client.on("ready", async  => {
setInterval(function(){

client.channels.find('id', '529080385120895017').setName("W");

client.channels.find('id', '529080385120895017').setName("We");

client.channels.find('id', '529080385120895017').setName("Wel");

client.channels.find('id', '529080385120895017').setName("Welc");

client.channels.find('id', '529080385120895017').setName("Welco");

client.channels.find('id', '529080385120895017').setName("Welcom");

client.channels.find('id', '529080385120895017').setName("Welcome");

client.channels.find('id', '529080385120895017').setName("Welcome T");

client.channels.find('id', '529080385120895017').setName("Welcome To");

client.channels.find('id', '529080385120895017').setName("Welcome To N");

client.channels.find('id', '529080385120895017').setName("Welcome To Na");

client.channels.find('id', '529080385120895017').setName("Welcome To Nas");

client.channels.find('id', '529080385120895017').setName("Welcome To Nasa");


  }, 5000);


});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اهلا بك في مجتمعك الجديد' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`By ! Medo`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

client.login(process.env.BOT_TOKEN);
