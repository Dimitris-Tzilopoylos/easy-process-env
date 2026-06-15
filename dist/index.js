"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => EasyEnvironment
});
module.exports = __toCommonJS(index_exports);
var import_dotenv = __toESM(require("dotenv"));
var EasyEnvironment = class {
  constructor(options) {
    this.options = options;
    const { error, parsed } = import_dotenv.default.config(this.options);
    this.error = error;
    this.parsed = parsed || {};
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
