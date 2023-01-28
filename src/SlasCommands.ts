import { ApplicationCommandDataResolvable } from 'discord.js';

export const SlashCommands: ApplicationCommandDataResolvable[] = [
    {
        name: 'rank',
        description: 'VALORANT RR',
        options: [
            {
                type: 'STRING',
                name: 'name',
                description: 'valorant name(suzuking#szk)',
            },
        ],
    },
];
