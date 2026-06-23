import ResourceTable from './ResourceTable'

function Leaderboard() {
  return (
    <ResourceTable
      resource="leaderboard"
      title="Leaderboard"
      description="Ranked standings based on points and active minutes."
      columns={[
        { header: 'Rank', render: (entry) => entry.rank },
        { header: 'Athlete', render: (entry) => entry.user?.displayName ?? 'Unknown' },
        { header: 'Team', render: (entry) => entry.team?.name ?? 'Unassigned' },
        { header: 'Points', render: (entry) => entry.points ?? 0 },
        { header: 'Badge', render: (entry) => entry.badge },
      ]}
    />
  )
}

export default Leaderboard
