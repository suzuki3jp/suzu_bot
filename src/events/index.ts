import { Base } from '../class/Base';
import { commandInteraction } from './discord/CommandInteraction';
import { ready } from './discord/ready';

const token = process.env.TOKEN;

/**
 * クライントのイベントリスナーを登録し、ログインする
 */
export const subscribeEvents = (base: Base): Base => {
    if (!token) throw new Error('TOKEN of .env is not defined');

    // discord events
    base.discord.on('ready', () => ready(base));
    base.discord.on('interactionCreate', (interaction) => {
        if (interaction.isCommand()) commandInteraction(base, interaction);
    });

    base.discord.login(token);
    return base;
};
