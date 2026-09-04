"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersRouter = void 0;
const express_1 = require("express");
const membersController_1 = require("../controllers/membersController");
exports.membersRouter = (0, express_1.Router)();
exports.membersRouter.get('/', membersController_1.getMembers);
exports.membersRouter.get('/:id', membersController_1.getMemberById);
