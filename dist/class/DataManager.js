"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataManager = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class DataManager {
    _paths;
    constructor() {
        this._paths = {
            commandLog: (0, path_1.resolve)(__dirname, '../../assets/logs/command.csv'),
            settings: (0, path_1.resolve)(__dirname, '../settings.json'),
            systemLog: (0, path_1.resolve)(__dirname, '../../assets/logs/system.csv'),
        };
    }
    getSettings() {
        return this._readFile(this._paths.settings);
    }
    setSettings(data) {
        this._writeFile(this._paths.settings, data);
    }
    _readFile(path) {
        return JSON.parse((0, fs_1.readFileSync)(path, 'utf-8'));
    }
    _writeFile(path, data) {
        if (typeof data === 'string') {
            (0, fs_1.writeFileSync)(path, data, 'utf-8');
        }
        else {
            const newData = JSON.stringify(data);
            (0, fs_1.writeFileSync)(path, newData, 'utf-8');
        }
    }
}
exports.DataManager = DataManager;
