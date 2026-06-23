import ResourceTable from './ResourceTable'

const workoutsApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourceTable
      resource="workouts"
      endpoint={workoutsApiEndpoint}
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
