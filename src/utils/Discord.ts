import { CommandInteraction } from 'discord.js';

export const deferInteractionReply = (interaction: CommandInteraction) => {
    if (interaction instanceof CommandInteraction) {
        interaction.deferReply({ ephemeral: true });
    } else return;
};
