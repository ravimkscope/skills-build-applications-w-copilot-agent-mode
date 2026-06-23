"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    avatarUrl: { type: String, required: true },
    team: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Team' },
    fitnessGoal: { type: String, required: true },
    joinedAt: { type: Date, required: true },
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
