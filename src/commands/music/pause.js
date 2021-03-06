const { MessageEmbed } = require("discord.js")
module.exports = class Pause extends Interaction {
  constructor() {
    super({
      name: "pause",
      description: "Pause the music",
    });
  }

  async exec(int, data) {

    const { MessageActionRow, MessageButton } = require("discord.js");
const btn1 = new MessageButton()
      .setLabel("Support")
        .setEmoji(`954350666539753512`)
      .setStyle("LINK")
          .setURL(`https://discord.gg/whJeF4mDAX`);

    const btn2 = new MessageButton()
      .setLabel("Invite")
      .setStyle("LINK")
      .setEmoji(`954610269609394187`)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot%20applications.commands`);

let buttonList = [btn1, btn2];
const row = new MessageActionRow().addComponents(buttonList);

      
const novc = new MessageEmbed() .setDescription(`${this.client.emotes.get("supremenomusic")} **You should be in a voice channel!** \n ${this.client.emotes.get("supremeblank")}${this.client.emotes.get("supremedot")} Developer: [フェランズ#3249](https://aromaxdev.xyz/github)`)
  .setColor(`#FFFFFF`);

      const novcs = new MessageEmbed() .setDescription(`${this.client.emotes.get("supremenomusic")} **You should be in a my voice channel!** \n ${this.client.emotes.get("supremeblank")}${this.client.emotes.get("supremedot")} Developer: [フェランズ#3249](https://aromaxdev.xyz/github)`)
  .setColor(`#FFFFFF`);

      const nodj = new MessageEmbed() .setDescription(`${this.client.emotes.get("supremedj")} **You should be a DJ or Alone in Voice Channel!** \n ${this.client.emotes.get("supremeblank")}${this.client.emotes.get("supremedot")} Developer: [フェランズ#3249](https://aromaxdev.xyz/github)`)
  .setColor(`#FFFFFF`);

      const nomusic = new MessageEmbed() .setDescription(`${this.client.emotes.get("supremenomusic")} **Nothing is playing in this server!** \n ${this.client.emotes.get("supremeblank")}${this.client.emotes.get("supremedot")} Use: \`/play\` [song/url](https://aromaxdev.xyz/github) to play a music.`)
  .setColor(`#FFFFFF`);

const pause = new MessageEmbed() .setDescription(`${this.client.emotes.get("supremepause")} **Song is now paused!** \n ${this.client.emotes.get("supremeblank")}${this.client.emotes.get("supremedot")} Use: \`/resume\` to resume a music.`)
  .setColor(`#FFFFFF`);

      const already = new MessageEmbed() .setDescription(`${this.client.emotes.get("supremepause")} **Song is already paused!** \n ${this.client.emotes.get("supremeblank")}${this.client.emotes.get("supremedot")} Use: \`/resume\` to resume a music.`)
  .setColor(`#FFFFFF`);
      
    let channel = int.member.voice.channel;

    if (!channel)
      return int.reply({
        embeds: [novc],
        components: [row],
        ephemeral: false,
      });
    if (int.guild.me.voice.channel && channel !== int.guild.me.voice.channel)
      return int.reply({
        embeds: [novcs],
        ephemeral: false,
      });

    let isDJ = data.djRoles.some((r) => int.member._roles.includes(r));
    let isAllowed = data.voiceChannels.find((c) => c === channel.id);
    let members = channel.members.filter((m) => !m.user.bot);

    if (data.voiceChannels.length > 0 && !isAllowed) {
      return int.reply({
        content: `${this.client.emotes.get(
          "supremenomusic"
        )} | You must be in one of the allowed voice channels to use this command!`,
        ephemeral: true,
      });
    }

    if (
      members.size > 1 &&
      !isDJ &&
      !int.member.permissions.has("MANAGE_GUILD")
    ) {
      return int.reply({
        embeds: [nodj],
        components: [row],
        ephemeral: false,
      });
    }

    let hasQueue = this.client.player.hasQueue(int.guild.id);
    if (!hasQueue)
      return int.reply({
        embeds: [nomusic],
        components: [row],
        ephemeral: false,
      });

    let queue = this.client.player.getQueue(int.guild.id);

    if (queue.paused) {
     

      return int.reply({
        embeds: [already],
        ephemeral: false,
      });
    } else {
      queue.setPaused(true);
      return int.reply({
        embeds: [pause],
        ephemeral: false,
      });
    }
  }
};
