"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_js_1 = __importDefault(require("./templates/bootstrap5/label/form.js"));
const classes_js_1 = __importDefault(require("./templates/bootstrap5/input/classes.js"));
const classes_js_2 = __importDefault(require("./templates/bootstrap5/label/classes.js"));
const classes_js_3 = __importDefault(require("./templates/bootstrap5/component/classes.js"));
const standard_template_1 = require("@formio/standard-template");
const classes = {
    component: classes_js_3.default,
    label: classes_js_2.default,
    input: classes_js_1.default
};
const templates = {
    label: {
        form: form_js_1.default
    },
};
const framework = (0, standard_template_1.getFrameworkTemplates)('bootstrapnew', classes, templates);
exports.default = framework;
