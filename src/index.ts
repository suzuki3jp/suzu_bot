// nodeモジュールをインポート
import { Logger } from '@suzuki3jp/utils';
import dotenv from 'dotenv';
dotenv.config();

// モジュールをインポート
import { Base } from './class/Base';
import { DataManager } from './class/DataManager';
import { subscribeEvents } from './events/index';
import { createClient } from './utils/Client';

const DM = new DataManager();

const client = createClient();
const systemLogger = new Logger({
    isSaveLogToCsv: true,
    logFilePath: DM._paths.systemLog,
});
const commandLogger = new Logger({
    isSaveLogToCsv: true,
    logFilePath: DM._paths.commandLog,
});

const base = new Base(client, systemLogger, commandLogger);
subscribeEvents(base);
