"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandInteraction = void 0;
const utils_1 = require("@suzuki3jp/utils");
const https_1 = require("https");
const Discord_1 = require("../../utils/Discord");
const commandInteraction = async (base, interaction) => {
    if (interaction.command?.name === 'rank') {
        // rank コマンド
        (0, Discord_1.deferInteractionReply)(interaction);
        const name = interaction.options.getString('name');
        if (!name && !name?.includes('#'))
            return interaction.followUp({
                content: 'nameオプションは入力必須です。suzuking#szkのような形でVALORANTのIDを入力してください。',
                ephemeral: true,
            });
        const [id, tag] = name.split('#');
        const res = await new utils_1.RequestClient().get({
            url: `https://suzuki-dev.com/api/rank/${id}/${tag}`,
            config: { httpsAgent: new https_1.Agent({ rejectUnauthorized: false }) },
        });
        // 404
        if (res.status === 404)
            return interaction.followUp({
                content: 'IDのユーザーが見つかりません。',
                ephemeral: true,
            });
        // 404以外のエラー
        if (res.status !== 200 || typeof res.data !== 'string')
            return interaction.followUp({
                content: '何らかの原因で取得に失敗しました。時間をおいて再度試してください。',
                ephemeral: true,
            });
        // 成功
        const [left, right] = res.data.split('|');
        const [tier, place] = left.split(' ');
        const [point, ...ignore] = right.split('pt');
        interaction.followUp({
            embeds: [
                {
                    title: `${id}の現在のランク`,
                    description: `${tier} ${place} | ${point}pt`,
                    color: RankColorMap[tier] ?? 'DEFAULT',
                },
            ],
        });
        base.loggers.command.info('/', interaction.command.name, ' was used by ', interaction.user.tag);
        return;
    }
};
exports.commandInteraction = commandInteraction;
const RankColorMap = {
    アイアン: 0x747474,
    ブロンズ: 0xb17300,
    シルバー: 0xb3b3b3,
    ゴールド: 0xffd000,
    プラチナ: 0x00aeff,
    ダイアモンド: 0xc635ff,
    アセンダント: 0x00b64c,
    イモータル: 0xff0080,
    レディアント: 0xffe9ba,
};
