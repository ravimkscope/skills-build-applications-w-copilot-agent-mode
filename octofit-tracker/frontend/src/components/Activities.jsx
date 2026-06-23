import ResourceTable from './ResourceTable'

function Activities() {
  return (
    <ResourceTable
      resource="activities"
      title="Activities"
      description="Recent logged workouts and movement sessions."
      columns={[
        { header: 'Activity', render: (activity) => activity.activityType },
        { header: 'Athlete', render: (activity) => activity.user?.displayName ?? 'Unknown' },
        { header: 'Team', render: (activity) => activity.team?.name ?? 'Unassigned' },
        { header: 'Duration', render: (activity) => `${activity.durationMinutes ?? 0} min` },
        { header: 'Calories', render: (activity) => activity.caloriesBurned ?? 0 },
      ]}
    />
  )
}

export default Activities
