"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deferInteractionReply = void 0;
const discord_js_1 = require("discord.js");
const deferInteractionReply = (interaction) => {
    if (interaction instanceof discord_js_1.CommandInteraction) {
        interaction.deferReply({ ephemeral: true });
    }
    else
        return;
};
exports.deferInteractionReply = deferInteractionReply;
