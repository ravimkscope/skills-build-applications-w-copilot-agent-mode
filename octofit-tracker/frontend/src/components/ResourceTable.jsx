import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function ResourceTable({ resource, title, description, endpoint, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadItems() {
      try {
        setStatus('loading')
        const records = await fetchCollection(resource, endpoint)

        if (isMounted) {
          setItems(records)
          setStatus('ready')
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError instanceof Error ? loadError.message : 'Unable to load data')
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      isMounted = false
    }
  }, [endpoint, resource])

  return (
    <section className="data-view" aria-labelledby={`${resource}-heading`}>
      <div className="view-header">
        <div>
          <h1 id={`${resource}-heading`}>{title}</h1>
          <p>{description}</p>
        </div>
        <span className="endpoint-label">{endpoint}</span>
      </div>

      {status === 'loading' && <div className="alert alert-info">Loading {title.toLowerCase()}...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}

      {status === 'ready' && (
        <div className="table-responsive data-table-wrap">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th scope="col" key={column.header}>{column.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id ?? item.id ?? JSON.stringify(item)}>
                  {columns.map((column) => (
                    <td key={column.header}>{column.render(item)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {items.length === 0 && <div className="empty-state">No records returned.</div>}
        </div>
      )}
    </section>
  )
}

export default ResourceTable
