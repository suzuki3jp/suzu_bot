import { Base } from '../class/Base';
import { ready } from './discord/ready';

/**
 * クラインとのイベントリスナーを登録する
 */
export const subscribeEvents = (base: Base): Base => {
    base.discord.on('ready', () => ready(base));
    return base;
};
