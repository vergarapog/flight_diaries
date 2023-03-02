"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entries_1 = __importDefault(require("../../data/entries"));
const getEntries = () => {
    return entries_1.default;
};
const getNonSensitiveEntries = () => {
    return entries_1.default.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility,
        };
    });
};
const findById = (id) => {
    const entry = entries_1.default.find((d) => d.id === id);
    return entry;
};
const addDiary = (entry) => {
    const newDiaryEntry = Object.assign({ id: Math.max(...entries_1.default.map((d) => d.id)) + 1 }, entry);
    entries_1.default.push(newDiaryEntry);
    return newDiaryEntry;
};
exports.default = {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
    findById,
};
