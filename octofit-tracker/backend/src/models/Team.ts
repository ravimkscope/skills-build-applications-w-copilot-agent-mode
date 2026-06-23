import { Schema, model, type InferSchemaType } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    city: { type: String, required: true, trim: true },
    motto: { type: String, required: true, trim: true },
    captain: { type: Schema.Types.ObjectId, ref: 'User' },
    weeklyGoalMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export type Team = InferSchemaType<typeof teamSchema>;
export const TeamModel = model<Team>('Team', teamSchema);
