"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Team', required: true },
    activityType: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    distanceMiles: { type: Number, min: 0 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    loggedAt: { type: Date, required: true },
}, { timestamps: true });
exports.ActivityModel = (0, mongoose_1.model)('Activity', activitySchema);
