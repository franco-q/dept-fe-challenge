import { useEffect, useState } from 'react'
import { reduceLaunches } from '@/utils/reduceLaunches'
import { getLaunches, getRockets } from '@/services/SpaceX'

export const useLaunches = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const launches = await getLaunches()
      const rockets = await getRockets()

      setItems(reduceLaunches(launches, rockets))
      setLoading(false)
    }

    fetchData()
  }, [])

  const searchByMissionName = str => {
    setSearch(str)
  }

  const filteredByMissionName = _items => {
    return search
      ? _items.filter(item =>
          item.mission_name.toLowerCase().includes(search.toLowerCase())
        )
      : _items
  }

  return { loading, items: filteredByMissionName(items), searchByMissionName }
}
