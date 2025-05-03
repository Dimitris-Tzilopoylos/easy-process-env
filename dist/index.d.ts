import { DotenvConfigOptions } from 'dotenv';

declare class EasyEnvironment {
    options?: DotenvConfigOptions;
    constructor(options?: DotenvConfigOptions);
    env(key: string, defaultValue?: any): any;
    envBool(key: string, defaultValue?: boolean): boolean;
    envInt(key: string, defaultValue?: number): number | undefined;
    envFloat(key: string, defaultValue?: number): number | undefined;
}

export { EasyEnvironment as default };
