import ResourceTable from './ResourceTable'

function Teams() {
  return (
    <ResourceTable
      resource="teams"
      title="Teams"
      description="Groups competing toward weekly movement goals."
      columns={[
        { header: 'Team', render: (team) => team.name },
        { header: 'City', render: (team) => team.city },
        { header: 'Captain', render: (team) => team.captain?.displayName ?? 'Open' },
        { header: 'Weekly Goal', render: (team) => `${team.weeklyGoalMinutes ?? 0} min` },
      ]}
    />
  )
}

export default Teams
