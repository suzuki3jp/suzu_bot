// nodeモジュールをインポート
import { Logger } from '@suzuki3jp/utils';
import dotenv from 'dotenv';
dotenv.config();

// モジュールをインポート
import { DataManager } from './class/DataManager';
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
