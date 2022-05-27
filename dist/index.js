"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLController_1 = require("./controller/URLController");
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
const urlController = new URLController_1.URLController();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
api.use(express_1.default.json());
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.listen(PORT, () => console.log('Express listening'));
//# sourceMappingURL=index.js.map