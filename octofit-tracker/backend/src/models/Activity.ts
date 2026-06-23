import { Schema, model, type InferSchemaType } from 'mongoose';

const activitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    activityType: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    distanceMiles: { type: Number, min: 0 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    loggedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export type Activity = InferSchemaType<typeof activitySchema>;
export const ActivityModel = model<Activity>('Activity', activitySchema);
