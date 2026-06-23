import ResourceTable from './ResourceTable'

const teamsApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourceTable
      resource="teams"
      endpoint={teamsApiEndpoint}
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
