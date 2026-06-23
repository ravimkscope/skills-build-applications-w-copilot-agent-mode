import { Schema, model, type InferSchemaType } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    durationMinutes: { type: Number, required: true, min: 0 },
    targetMuscleGroups: [{ type: String, required: true, trim: true }],
    recommendedForGoal: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export type Workout = InferSchemaType<typeof workoutSchema>;
export const WorkoutModel = model<Workout>('Workout', workoutSchema);
