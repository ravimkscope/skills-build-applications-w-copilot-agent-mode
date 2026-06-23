import { Schema, model, type InferSchemaType } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true, min: 1 },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    points: { type: Number, required: true, min: 0 },
    activeMinutes: { type: Number, required: true, min: 0 },
    badge: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export type LeaderboardEntry = InferSchemaType<typeof leaderboardSchema>;
export const LeaderboardModel = model<LeaderboardEntry>('Leaderboard', leaderboardSchema);
