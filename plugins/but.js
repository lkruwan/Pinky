/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX බටන් බලන්නත ආවෙ 😂 මේකත් උස්සපන් චීත්තයක් නෙ උබ තමා අපෙ එව්වා උස්සන්නෙ
*/

const Amazone = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('amazone');
var clh = {
    cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv',
    pay: ''
}
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Amazone.addCommand({
    pattern: 'mtgg', fromMe: true, desc: 'mukuth na'
}, (async (message, match) => {
        // send a list message!
        const rows = [{
            title: 'dasdasdadsada', description: "asdf", rowId: "rowid1"
           },
           {
                title: 'gfgfdgfdgfd', description: "asdfg", rowId: "rowid45"
            },     
            {
                title: 'dfsfsddfsfsfs', description: "asdfge", rowId: "rowid3"
            },
            {
                title: 'fdsghjfjy', description: "asdadsaada", rowId: "rowid4"
            },
            {
                title: 'fmawtrtbvtaw', description: "sadadwadawd", rowId: "rowid5"
            },
            {
                title: 'hfggsxsgagfzfgz', description: "adadadasa", rowId: "rowid6"
            },
            {
                title: 'fdcvjf', description: "faffsdfsd", rowId: "👩‍🦰ANIME-LIST"
            },
            {
                title: 'iugcjhvj', description: "fsdfsfssdfsfdsfsfs", rowId: "rowid8"
            },
            {
                title: 'fgzchnb bn', description: "fsfsfsdfssd", rowId: "rowid9"
            },
            {
                title: 'jcbmjzyj', description: "dfsfsfsfsfs", rowId: "rowid10"
            },
            {
                title: 'zzjugjfzg', description: "fsfsdfsf", rowId: "rowid9"
            },
            {
                title: 'ggggggggggdgggggggggggggggg', description: "sdfsdfsfs", rowId: "rowid2"
            }]

        const sections = [{
            title: "Command Panel", rows: rows
        }]

        const button = {
            buttonText: 'obapan ithin obapan',
            description: "mokuth na ai balanne",
            sections: sections,
            listType: 1
        }

        await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));

if (Config.WORKTYPE == 'public') {

    Amazone.addCommand({
        pattern: 'mtgg', fromMe: true, dontAddCommandList: true
    }, (async (message, match) => {
            // send a list message!
            const rows = [{
                title: 'dasdasdadsada', description: "asdf", rowId: "rowid1"
           },
           {
                title: 'gfgfdgfdgfd', description: "⚙ සිංහල අකුරු Support TTP විධාන ලැයිස්තුව..\n\n\n*╭─「 AMAZONE SUPER TTP 」*\n│ \n│🧚‍♂Amazone Alexa Super TTP pack)\n│ සිංහල Font Support 😍\n╰────\n╭─「 COMMANDS」\n│ \n│ • 1ttp <your Text >\n│ • 2ttp <your Text >\n│ • 3ttp <your Text >\n╰────\n「 ©️Amazone-teenuhx」", rowId: "rowid45"
            },     
            {
                title: 'dfsfsddfsfsfs', description: "asdfge", rowId: "rowid3"
            },
            {
                title: 'aaaaaaaaaaaaaaa', description: "⚙එය මාධ්‍ය මෙවලම් 25+ ඇතුලත් විධාන ලැයිස්තුව.\n\n\n*◁===👩‍🦰AMAZONE ALEXA MEDIA PANEL===▷*\n\n💻Usage: *.mp4enhance*\nℹ️Desc: \n🇱🇰 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: \n🇱🇰 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: \n🇱🇰 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: \n🇱🇰 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: \n🇱🇰 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: \n🇱🇰 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: \n🇱🇰 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: \n🇱🇰 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: \n🇱🇰 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: \n🇱🇰 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: \n🇱🇰 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: \n🇱🇰 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: \n🇱🇰 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: \n🇱🇰 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: \n🇱🇰 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: \n🇱🇰 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:  \n🇱🇰 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc:  \n🇱🇰 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc:  \n🇱🇰 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc:  \n🇱🇰 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc:  \n🇱🇰 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc:  \n🇱🇰 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc:  \n🇱🇰 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc:\n🇱🇰 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc:  \n🇱🇰 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:  \n🇱🇰 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:  \n🇱🇰 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:  \n🇱🇰 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:  \n🇱🇰 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  \n🇱🇰 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc:  \n🇱🇰 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc:  \n🇱🇰 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc:  \n🇱🇰 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc:  \n🇱🇰 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc:  \n🇱🇰 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc:  \n🇱🇰 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc:  \n🇱🇰 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc:  \n🇱🇰 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc:  \n🇱🇰 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc:  \n🇱🇰 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc:  \n🇱🇰 Applies a art effect to the photo.", rowId: "rowid4"
            },
            {
                title: 'aaaaaaaaaaaa', description: "⚙එය මාධ්‍ය බාගත කිරීම් ඇතුලත් විධාන ලැයිස්තුව.\n\n\n◁===👩‍🦰Amazone Alexa Download List===▷\n\n*⏱විධානය*  : .song\n*🔄විස්තරය* : එය ගීත බාගත කරයි.\n\n*⏱විධානය*  : .dcsong\n*🔄විස්තරය* : ගීත document ලෙස download කරයි.\n\n*⏱විධානය*  : .video\n*🔄විස්තරය* : Youtube video බාගත කරයි.\n\n*⏱විධානය*  : .yt\n*🔄විස්තරය* : Youtube හි search කරයි.\n\n*⏱විධානය*  : .mp4\n*🔄විස්තරය* : එය Direct ඔබ ලබා දෙන වීඩියෝ බාගත කරයි.\n\n*⏱විධානය*  : .wallpaper \n*🔄විස්තරය* : අහඹු ලෙස Wallpaper ලබා දෙයි.\n\n*⏱විධානය*  : .img\n*🔄විස්තරය* : ඡායාරූප බාගත කරයි.\n\n*⏱විධානය*  : .vinsta\n*🔄විස්තරය* : Instergram Video බාගත කරයි.\n\n*⏱විධානය*  : .pinsta\n*🔄විස්තරය* : Instergram Post බාගත කරයි.\n\n*⏱විධානය*  : .twt\n*🔄විස්තරය* : Twitter Video බාගත කරයි.", rowId: "rowid5"
            },
            {
                title: 'hfggsxsgagfzfgz', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.\n\n\n*◁=====👩‍🦰Queen Alexa Admin Panel====▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```\n\n*🌀විධානය* : .rename\n*💠විස්තරය* : සමූහයෙ නම වෙනස් කරයි.\n\n*🌀විධානය* : .safemode on -off\n*💠විස්තරය* : අර queen මේ queen ඔයාගෙ ගෲප් එක ස්පෑම් ගහන්න හැදුවොත් Auto Remove.", rowId: "rowid6"
            },
            {
                title: 'ssssssssssss', description: "faffsdfsd", rowId: "👩‍🦰ANIME-LIST"
            },
            {
                title: 'ssssssssssssssssssssssssss', description: "sadadsadas", rowId: "rowid8"
            },
            {
                title: 'ssssssssssssssssssdfasssssssss', description: "dadaada", rowId: "rowid9"
            },
            {
                title: 'tttttttttttttttttttttttttt', description: "dasdasdaad", rowId: "rowid10"
            },
            {
                title: 'gggggggggggggggggggggggggg', description: "sdadasdasdas", rowId: "rowid9"
            },
            {
                title: 'hfggggggggggggggg', description: "dasdasdada", rowId: "rowid2"
            }]
            const sections = [{
                title: "Command Panel", rows: rows
            }]

            const button = {
                buttonText: 'oobapam pakaya',
                description: "gdffgfdfgfd",
                sections: sections,
                listType: 1
            }

            await message.client.sendMessage(message.jid, button, MessageType.listMessage)

        }));
}
