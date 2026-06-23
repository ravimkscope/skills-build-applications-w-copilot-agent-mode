"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Activity_1 = require("../models/Activity");
const Leaderboard_1 = require("../models/Leaderboard");
const Team_1 = require("../models/Team");
const User_1 = require("../models/User");
const Workout_1 = require("../models/Workout");
const mongoUri = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
async function seed() {
    console.log('Seed the octofit_db database with test data');
    await mongoose_1.default.connect(mongoUri);
    await Promise.all([
        Activity_1.ActivityModel.deleteMany({}),
        Leaderboard_1.LeaderboardModel.deleteMany({}),
        User_1.UserModel.deleteMany({}),
        Team_1.TeamModel.deleteMany({}),
        Workout_1.WorkoutModel.deleteMany({}),
    ]);
    const [trailBlazers, coreCrushers, sprintSquad] = await Team_1.TeamModel.create([
        {
            name: 'Trail Blazers',
            city: 'Seattle',
            motto: 'Every mile counts',
            weeklyGoalMinutes: 900,
        },
        {
            name: 'Core Crushers',
            city: 'Austin',
            motto: 'Stronger every set',
            weeklyGoalMinutes: 720,
        },
        {
            name: 'Sprint Squad',
            city: 'Boston',
            motto: 'Fast feet, full hearts',
            weeklyGoalMinutes: 840,
        },
    ]);
    const [maya, jordan, priya, theo] = await User_1.UserModel.create([
        {
            username: 'maya_runner',
            displayName: 'Maya Chen',
            email: 'maya.chen@example.com',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            team: trailBlazers._id,
            fitnessGoal: 'Run a half marathon under two hours',
            joinedAt: new Date('2026-01-12T10:00:00Z'),
        },
        {
            username: 'jordan_lifts',
            displayName: 'Jordan Brooks',
            email: 'jordan.brooks@example.com',
            avatarUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
            team: coreCrushers._id,
            fitnessGoal: 'Build total-body strength',
            joinedAt: new Date('2026-02-03T14:30:00Z'),
        },
        {
            username: 'priya_pace',
            displayName: 'Priya Shah',
            email: 'priya.shah@example.com',
            avatarUrl: 'https://avatars.githubusercontent.com/u/1024025?v=4',
            team: sprintSquad._id,
            fitnessGoal: 'Improve 5K pace and recovery',
            joinedAt: new Date('2026-03-18T09:15:00Z'),
        },
        {
            username: 'theo_moves',
            displayName: 'Theo Martinez',
            email: 'theo.martinez@example.com',
            avatarUrl: 'https://avatars.githubusercontent.com/u/69631?v=4',
            team: trailBlazers._id,
            fitnessGoal: 'Stay consistent with daily movement',
            joinedAt: new Date('2026-04-05T16:45:00Z'),
        },
    ]);
    await Promise.all([
        Team_1.TeamModel.findByIdAndUpdate(trailBlazers._id, { captain: maya._id }),
        Team_1.TeamModel.findByIdAndUpdate(coreCrushers._id, { captain: jordan._id }),
        Team_1.TeamModel.findByIdAndUpdate(sprintSquad._id, { captain: priya._id }),
    ]);
    await Activity_1.ActivityModel.create([
        {
            user: maya._id,
            team: trailBlazers._id,
            activityType: 'Outdoor run',
            durationMinutes: 52,
            distanceMiles: 5.8,
            caloriesBurned: 610,
            loggedAt: new Date('2026-06-20T12:15:00Z'),
        },
        {
            user: jordan._id,
            team: coreCrushers._id,
            activityType: 'Strength training',
            durationMinutes: 45,
            caloriesBurned: 430,
            loggedAt: new Date('2026-06-21T18:30:00Z'),
        },
        {
            user: priya._id,
            team: sprintSquad._id,
            activityType: 'Interval sprints',
            durationMinutes: 34,
            distanceMiles: 3.1,
            caloriesBurned: 395,
            loggedAt: new Date('2026-06-22T07:45:00Z'),
        },
        {
            user: theo._id,
            team: trailBlazers._id,
            activityType: 'Mobility flow',
            durationMinutes: 28,
            caloriesBurned: 160,
            loggedAt: new Date('2026-06-22T20:10:00Z'),
        },
    ]);
    await Leaderboard_1.LeaderboardModel.create([
        {
            rank: 1,
            user: maya._id,
            team: trailBlazers._id,
            points: 1840,
            activeMinutes: 312,
            badge: 'Endurance Ace',
        },
        {
            rank: 2,
            user: priya._id,
            team: sprintSquad._id,
            points: 1725,
            activeMinutes: 286,
            badge: 'Speed Builder',
        },
        {
            rank: 3,
            user: jordan._id,
            team: coreCrushers._id,
            points: 1580,
            activeMinutes: 254,
            badge: 'Power Player',
        },
        {
            rank: 4,
            user: theo._id,
            team: trailBlazers._id,
            points: 1210,
            activeMinutes: 198,
            badge: 'Consistency Streak',
        },
    ]);
    await Workout_1.WorkoutModel.create([
        {
            title: 'Morning Mobility Reset',
            description: 'A gentle flow for hips, shoulders, and spine before the workday.',
            difficulty: 'Beginner',
            durationMinutes: 20,
            targetMuscleGroups: ['hips', 'shoulders', 'core'],
            recommendedForGoal: 'Daily movement consistency',
        },
        {
            title: 'Tempo Run Builder',
            description: 'Warm up, hold a comfortably hard tempo block, then cool down.',
            difficulty: 'Intermediate',
            durationMinutes: 42,
            targetMuscleGroups: ['legs', 'glutes', 'cardio'],
            recommendedForGoal: 'Improve race pace',
        },
        {
            title: 'Full-Body Strength Circuit',
            description: 'Compound lifts and conditioning intervals for strength and stamina.',
            difficulty: 'Intermediate',
            durationMinutes: 50,
            targetMuscleGroups: ['chest', 'back', 'legs', 'core'],
            recommendedForGoal: 'Build total-body strength',
        },
        {
            title: 'Advanced Hill Repeats',
            description: 'Short uphill efforts with controlled recovery to build speed and power.',
            difficulty: 'Advanced',
            durationMinutes: 36,
            targetMuscleGroups: ['calves', 'quads', 'glutes', 'cardio'],
            recommendedForGoal: 'Increase running power',
        },
    ]);
    console.log('Seed data inserted for users, teams, activities, leaderboard, and workouts.');
}
seed()
    .catch((error) => {
    console.error('Failed to seed octofit_db', error);
    process.exitCode = 1;
})
    .finally(async () => {
    await mongoose_1.default.disconnect();
});
