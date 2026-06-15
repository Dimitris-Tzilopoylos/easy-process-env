import dotenv, { DotenvConfigOptions, DotenvParseOutput } from "dotenv";

export default class EasyEnvironment {
  options?: DotenvConfigOptions;
  error?: Error | undefined;
  parsed: DotenvParseOutput;

  constructor(options?: DotenvConfigOptions) {
    this.options = options;
    const { error, parsed } = dotenv.config(this.options);
    this.error = error;
    this.parsed = parsed || {};
  }

  env(key: string, defaultValue?: any) {
    const value = process.env[key];
    if (typeof value !== "undefined") {
      return value;
    }
    return typeof defaultValue !== "undefined" ? defaultValue : value;
  }
  envBool(key: string, defaultValue = false) {
    const value = this.env(key, `${defaultValue}`);

    return value?.toLowerCase() === "1" || value?.toLowerCase() === "true";
  }

  envInt(key: string, defaultValue?: number) {
    const value = this.env(key, defaultValue);
    if (isNaN(value)) {
      return defaultValue;
    }
    return parseInt(value);
  }

  envFloat(key: string, defaultValue?: number) {
    const value = this.env(key, defaultValue);
    if (isNaN(value)) {
      return defaultValue;
    }
    return parseFloat(value);
  }
}
