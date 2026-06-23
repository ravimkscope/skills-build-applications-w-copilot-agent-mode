import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { apiBaseUrl } from './api'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

const navItems = [
  { path: '/users', label: 'Users' },
  { path: '/teams', label: 'Teams' },
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/workouts', label: 'Workouts' },
]

function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME

  return (
    <div className="app-shell">
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container-fluid px-4">
          <NavLink className="navbar-brand fw-semibold" to="/users">
            OctoFit Tracker
          </NavLink>
          <div className="navbar-nav flex-row flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                key={item.path}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="container-fluid app-main">
        <div className="api-status">
          <span>API</span>
          <strong>{apiBaseUrl}</strong>
          {!codespaceName && <small>Using localhost because VITE_CODESPACE_NAME is unset.</small>}
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
