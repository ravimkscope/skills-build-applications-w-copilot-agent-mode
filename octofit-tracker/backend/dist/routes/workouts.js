"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = require("../models/Workout");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const workouts = await Workout_1.WorkoutModel.find().sort({ difficulty: 1, title: 1 });
        res.json({ workouts });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
