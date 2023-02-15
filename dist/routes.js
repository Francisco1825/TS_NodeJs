"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const express_1 = require("express");
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(req, res) {
    CreateCourseService_1.default.execute("NodeJs", 10, "Dani");
    return express_1.response.send();
}
exports.createCourse = createCourse;
