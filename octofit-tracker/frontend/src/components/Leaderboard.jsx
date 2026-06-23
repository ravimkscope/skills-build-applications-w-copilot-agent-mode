import ResourceTable from './ResourceTable'

const leaderboardApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceTable
      resource="leaderboard"
      endpoint={leaderboardApiEndpoint}
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
