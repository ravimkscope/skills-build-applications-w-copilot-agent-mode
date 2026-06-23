import { Schema, model, type InferSchemaType } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    avatarUrl: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
    fitnessGoal: { type: String, required: true },
    joinedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export type User = InferSchemaType<typeof userSchema>;
export const UserModel = model<User>('User', userSchema);
