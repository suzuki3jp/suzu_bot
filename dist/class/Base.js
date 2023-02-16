"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    discord;
    loggers;
    constructor(discordClient, systemLogger, commandLogger) {
        this.discord = discordClient;
        this.loggers = {
            system: systemLogger,
            command: commandLogger,
        };
    }
}
exports.Base = Base;
