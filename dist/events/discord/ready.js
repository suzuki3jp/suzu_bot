"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ready = void 0;
const SlasCommands_1 = require("../../SlasCommands");
const ready = (base) => {
    base.discord.application?.commands.set(SlasCommands_1.SlashCommands);
    base.loggers.system.system('discord client is ready!');
};
exports.ready = ready;
