import { Logger } from '@suzuki3jp/utils';
import { Client } from 'discord.js';

export class Base {
    public discord: Client;
    public loggers: {
        system: Logger;
        command: Logger;
    };

    constructor(discordClient: Client, systemLogger: Logger, commandLogger: Logger) {
        this.discord = discordClient;
        this.loggers = {
            system: systemLogger,
            command: commandLogger,
        };
    }
}
