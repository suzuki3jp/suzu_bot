"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeEvents = void 0;
const CommandInteraction_1 = require("./discord/CommandInteraction");
const ready_1 = require("./discord/ready");
const token = process.env.TOKEN;
/**
 * クライントのイベントリスナーを登録し、ログインする
 */
const subscribeEvents = (base) => {
    if (!token)
        throw new Error('TOKEN of .env is not defined');
    // discord events
    base.discord.on('ready', () => (0, ready_1.ready)(base));
    base.discord.on('interactionCreate', (interaction) => {
        if (interaction.isCommand())
            (0, CommandInteraction_1.commandInteraction)(base, interaction);
    });
    base.discord.login(token);
    return base;
};
exports.subscribeEvents = subscribeEvents;
