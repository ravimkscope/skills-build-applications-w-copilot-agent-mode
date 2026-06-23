import ResourceTable from './ResourceTable'

function Workouts() {
  return (
    <ResourceTable
      resource="workouts"
      title="Workouts"
      description="Suggested workouts matched to common training goals."
      columns={[
        { header: 'Workout', render: (workout) => workout.title },
        { header: 'Difficulty', render: (workout) => workout.difficulty },
        { header: 'Duration', render: (workout) => `${workout.durationMinutes ?? 0} min` },
        { header: 'Goal', render: (workout) => workout.recommendedForGoal },
      ]}
    />
  )
}

export default Workouts
