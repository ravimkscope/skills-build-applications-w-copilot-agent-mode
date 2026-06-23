"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = require("../models/Activity");
const router = (0, express_1.Router)();
router.get('/', async (_req, res, next) => {
    try {
        const activities = await Activity_1.ActivityModel.find()
            .populate('user')
            .populate('team')
            .sort({ loggedAt: -1 });
        res.json({ activities });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
