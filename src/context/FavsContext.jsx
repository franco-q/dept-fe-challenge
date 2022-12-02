import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

const FILTERS = {
  favourites: items => items.filter(item => localStorage.getItem(item._id))
}

export const FavsContext = createContext({})

const ls = JSON.parse(localStorage.getItem('favorite-launches'))
const initialFavs = ls && Array.isArray(ls) ? ls : []

export const FavsContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(initialFavs)

  useEffect(() => {
    localStorage.setItem('favorite-launches', JSON.stringify(favourites))
  }, [favourites])

  const toggleFav = useCallback(
    launchId => {
      if (!favourites.includes(launchId)) {
        setFavourites([...favourites, launchId])
      } else {
        setFavourites(arr => arr.filter(id => id !== launchId))
      }
    },
    [favourites]
  )

  const removeFav = useCallback(launchId => {
    setFavourites(arr => arr.filter(id => id !== launchId))
  }, [])

  const addFav = useCallback(launchId => {
    setFavourites(arr => [...arr, launchId])
  }, [])

  const isFav = id => {
    return favourites.includes(id)
  }

  const value = {
    isFav,
    favourites,
    toggleFav,
    removeFav,
    addFav
  }

  return <FavsContext.Provider value={value}>{children}</FavsContext.Provider>
}

export const useFavsContext = () => useContext(FavsContext)
