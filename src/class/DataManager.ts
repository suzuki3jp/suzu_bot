import { resolve } from 'path';

export class DataManager {
    public _paths: {
        commandLog: string;
        systemLog: string;
    };

    constructor() {
        this._paths = {
            commandLog: resolve(__dirname, '../../assets/logs/command.csv'),
            systemLog: resolve(__dirname, '../../assets/logs/system.csv'),
        };
    }
}
