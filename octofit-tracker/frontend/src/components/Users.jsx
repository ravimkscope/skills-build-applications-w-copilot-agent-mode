import ResourceTable from './ResourceTable'

const usersApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourceTable
      resource="users"
      endpoint={usersApiEndpoint}
      title="Users"
      description="Athletes and profile goals across OctoFit."
      columns={[
        { header: 'Name', render: (user) => user.displayName ?? user.username },
        { header: 'Username', render: (user) => user.username },
        { header: 'Team', render: (user) => user.team?.name ?? 'Unassigned' },
        { header: 'Fitness Goal', render: (user) => user.fitnessGoal },
      ]}
    />
  )
}

export default Users
