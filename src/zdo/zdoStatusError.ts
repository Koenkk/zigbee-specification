import {Status} from './definition/status.js';

export class ZdoStatusError extends Error {
    public code: Status;

    constructor(code: Status) {
        super(`Status '${Status[code]}'`);
        this.code = code;
    }
}
