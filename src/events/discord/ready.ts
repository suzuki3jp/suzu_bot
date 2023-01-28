import { Base } from '../../class/Base';

export const ready = (base: Base) => {
    base.loggers.system.system('discord client is ready!');
};
