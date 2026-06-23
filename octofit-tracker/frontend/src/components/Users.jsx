import ResourceTable from './ResourceTable'

function Users() {
  return (
    <ResourceTable
      resource="users"
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
