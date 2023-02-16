"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// nodeモジュールをインポート
const utils_1 = require("@suzuki3jp/utils");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// モジュールをインポート
const Base_1 = require("./class/Base");
const DataManager_1 = require("./class/DataManager");
const index_1 = require("./events/index");
const Client_1 = require("./utils/Client");
const DM = new DataManager_1.DataManager();
const client = (0, Client_1.createClient)();
const systemLogger = new utils_1.Logger({
    isSaveLogToCsv: true,
    logFilePath: DM._paths.systemLog,
});
const commandLogger = new utils_1.Logger({
    isSaveLogToCsv: true,
    logFilePath: DM._paths.commandLog,
});
const base = new Base_1.Base(client, systemLogger, commandLogger);
(0, index_1.subscribeEvents)(base);
