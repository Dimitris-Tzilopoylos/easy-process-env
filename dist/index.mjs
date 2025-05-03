// src/index.ts
import dotenv from "dotenv";
var EasyEnvironment = class {
  constructor(options) {
    this.options = options;
    const { error } = dotenv.config(this.options);
    if (error) {
      throw error;
    }
  }
  env(key, defaultValue) {
    const value = process.env[key];
    if (typeof value !== "undefined") {
      return value;
    }
    return typeof defaultValue !== "undefined" ? defaultValue : value;
  }
  envBool(key, defaultValue = false) {
    const value = this.env(key, `${defaultValue}`);
    return (value == null ? void 0 : value.toLowerCase()) === "1" || (value == null ? void 0 : value.toLowerCase()) === "true";
  }
  envInt(key, defaultValue) {
    const value = this.env(key, defaultValue);
    if (isNaN(value)) {
      return defaultValue;
    }
    return parseInt(value);
  }
  envFloat(key, defaultValue) {
    const value = this.env(key, defaultValue);
    if (isNaN(value)) {
      return defaultValue;
    }
    return parseFloat(value);
  }
};
export {
  EasyEnvironment as default
};
