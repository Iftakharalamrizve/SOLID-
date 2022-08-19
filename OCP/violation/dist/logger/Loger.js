"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileLogger_1 = __importDefault(require("./FileLogger"));
const ConsoleLogger_1 = __importDefault(require("./ConsoleLogger"));
class Logger {
    static info(message) {
        this.fileLoger.logInFile(message);
        this.consoleLogger.logInConsole(message);
    }
}
exports.default = Logger;
Logger.fileLoger = new FileLogger_1.default;
Logger.consoleLogger = new ConsoleLogger_1.default;
