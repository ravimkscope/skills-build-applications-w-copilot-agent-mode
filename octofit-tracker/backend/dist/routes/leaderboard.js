"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Leaderboard_1 = require("../models/Leaderboard");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const leaderboard = await Leaderboard_1.LeaderboardModel.find()
            .populate('user')
            .populate('team')
            .sort({ rank: 1 });
        res.json({ leaderboard });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
