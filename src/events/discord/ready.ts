import { Base } from '../../class/Base';
import { SlashCommands } from '../../SlasCommands';

export const ready = (base: Base) => {
    base.discord.application?.commands.set(SlashCommands);
    base.loggers.system.system('discord client is ready!');
};
