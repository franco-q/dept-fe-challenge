import css from './List.module.scss'
import { useFavsContext } from '@/context/FavsContext'
import CardContainer from '@/components/CardContainer/CardContainer'

const List = ({ items }) => {
  const { favourites } = useFavsContext()
  return (
    <div>
      <span className={css.label}>Total ({items.length})</span>
      <div className="row gy-3">
        {items.map(item => (
          <div key={item._id} className="col-md-4">
            <CardContainer
              id={item._id}
              srcImg={item.links.mission_patch_small}
              altImg={item.mission_name}
              title={item.mission_name}
              description={item.details}
              date={item.date}
              flightNumber={item.flight_number}
              favourite={favourites.includes(item._id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
