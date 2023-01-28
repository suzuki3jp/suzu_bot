import { CommandInteraction } from 'discord.js';

export const extendInteractionTime = (interaction: CommandInteraction) => {
    if (interaction instanceof CommandInteraction) {
        interaction.deferReply({ ephemeral: true });
    } else return;
};
