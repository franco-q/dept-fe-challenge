import { memo, useCallback } from 'react'
import Card from '@/components/Card/Card'
import { useFavsContext } from '@/context/FavsContext'

const CardContainer = ({ favourite, ...props }) => {
  const { removeFav, addFav } = useFavsContext()

  const toggleFav = useCallback(() => {
    favourite ? removeFav(props.id) : addFav(props.id)
  }, [favourite])

  return <Card {...props} favourite={favourite} onClickFav={toggleFav} />
}

export default memo(CardContainer)
