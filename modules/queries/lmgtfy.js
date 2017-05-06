/*
 * Copyright (C) 2017 Sankarsan Kampa
 *                    https://sankarsankampa.com/contact
 *
 * This file is a part of Bastion Discord BOT.
 *                        https://github.com/snkrsnkampa/Bastion
 *
 * This code is licensed under the SNKRSN Shared License. It is free to
 * download, copy, compile, use, study and refer under the terms of the
 * SNKRSN Shared License. You can modify the code only for personal or
 * internal use only. However, you can not redistribute the code without
 * explicitly getting permission fot it.
 *
 * Bastion BOT is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY. See the SNKRSN Shared License for
 * more details.
 *
 * You should have received a copy of the SNKRSN Shared License along
 * with this program. If not, see <https://github.com/snkrsnkampa/Bastion/LICENSE>.
 */

exports.run = (Bastion, message, args) => {
  message.channel.send({embed: {
    color: Bastion.colors.blue,
    title: 'Let me Google that for you:',
    description: `https://lmgtfy.com/?q=${encodeURIComponent(args.join(' '))}`,
    footer: {
      text: 'Powered by lmgtfy'
    }
  }}).catch(e => {
    Bastion.log.error(e.stack);
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'lmgtfy',
  description: 'A tool to teach other people how to use Google\'s internet search.',
  botPermission: '',
  userPermission: '',
  usage: 'lmgtfy <text>',
  example: ['lmgtfy How to shutdown a computer?']
};
