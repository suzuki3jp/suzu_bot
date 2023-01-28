import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export class DataManager {
    public _paths: {
        commandLog: string;
        settings: string;
        systemLog: string;
    };

    constructor() {
        this._paths = {
            commandLog: resolve(__dirname, '../../assets/logs/command.csv'),
            settings: resolve(__dirname, '../settings.json'),
            systemLog: resolve(__dirname, '../../assets/logs/system.csv'),
        };
    }

    getSettings(): SettingsJson {
        return this._readFile(this._paths.settings);
    }

    setSettings(data: string | SettingsJson) {
        this._writeFile(this._paths.settings, data);
    }

    _readFile(path: string): any {
        return JSON.parse(readFileSync(path, 'utf-8'));
    }

    _writeFile(path: string, data: string | JsonTypes) {
        if (typeof data === 'string') {
            writeFileSync(path, data, 'utf-8');
        } else {
            const newData = JSON.stringify(data);
            writeFileSync(path, newData, 'utf-8');
        }
    }
}

interface SettingsJson {
    discord: {
        guildId: string;
    };
}

type JsonTypes = SettingsJson;
