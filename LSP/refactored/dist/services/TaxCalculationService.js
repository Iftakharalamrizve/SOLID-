"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loger_1 = __importDefault(require("../logger/Loger"));
class TaxCalculationService {
    calculateTax(totalitemAmount, tax) {
        if (totalitemAmount <= 100) {
            tax = tax * .80;
            Loger_1.default.info("Item price is more than 100. 80 Percent of the actual tax applicable");
        }
        else if (totalitemAmount >= 100 && totalitemAmount <= 150) {
            Loger_1.default.info("Item price is more than 100 but less than 150. 90 Percent of the actual tax applicable");
            tax = tax * .90;
        }
        return tax;
    }
}
exports.default = TaxCalculationService;
