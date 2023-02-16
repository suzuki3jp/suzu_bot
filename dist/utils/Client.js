"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
// nodeモジュールをインポート
const discord_js_1 = require("discord.js");
/**
 * ALL Intentsのクライントを作成します
 * 未login
 */
const createClient = () => {
    return new discord_js_1.Client({
        intents: Object.values(discord_js_1.Intents.FLAGS),
        partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'GUILD_SCHEDULED_EVENT'],
    });
};
exports.createClient = createClient;
