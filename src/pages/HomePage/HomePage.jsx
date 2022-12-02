import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header/Header'
import InputSearch from '@/components/InputSearch/InputSearch'
import List from '@/components/List/List'
import { useFavsContext } from '@/context/FavsContext'
import { useLaunches } from '@/hooks/useLaunches'

const HomePage = () => {
  const inputSearchRef = useRef()
  const [filter, setFilter] = useState('')

  const { favourites } = useFavsContext()
  const { loading, items, searchByMissionName } = useLaunches()

  const changeFilter = v => {
    setFilter(v.toLowerCase())
    inputSearchRef.current.clearForm()
  }

  const filteredItems = items => {
    return filter === 'favourites'
      ? items.filter(item => favourites.includes(item._id))
      : items
  }

  return (
    <div>
      <Header filterBy={changeFilter} />
      <div className="container pt-3">
        <div className="mb-3">
          <InputSearch onSubmit={searchByMissionName} ref={inputSearchRef} />
        </div>
        {loading ? <span>loading</span> : <List items={filteredItems(items)} />}
      </div>
    </div>
  )
}

export default HomePage
