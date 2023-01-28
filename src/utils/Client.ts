// nodeモジュールをインポート
import { Client, Intents } from 'discord.js';

/**
 * ALL Intentsのクライントを作成します
 * 未login
 */
export const createClient = (): Client => {
    return new Client({
        intents: Object.values(Intents),
        partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'GUILD_SCHEDULED_EVENT'],
    });
};
