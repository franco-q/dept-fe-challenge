import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLaunch, getRocket } from '@/services/SpaceX'
import DetailHeader from '@/components/DetailHeader/DetailHeader'
import DetailNumbers from '@/components/DetailNumbers/DetailNumbers'
import DetailContent from '@/components/DetailContent/DetailContent'
import { useFavsContext } from '@/context/FavsContext'

const DetailPage = () => {
  const { isFav } = useFavsContext()
  const [launch, setLaunch] = useState()
  let { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLaunch(id)
      const rocket = await getRocket(data.rocket.rocket_id)

      data.date = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(data.launch_date_utc))

      setLaunch({ ...data, rocket })
    }

    fetchData()
  }, [])

  return launch ? (
    <div>
      <DetailHeader
        bg={launch.rocket.flickr_images[0]}
        altImg={launch.mission_name}
        favourite={isFav(launch.flight_number + launch.launch_date_unix)}
        date={launch.date}
        rocket={launch.rocket.rocket_name}
        caption={launch.rocket.description}
      />
      <DetailNumbers />
      <div className="container pt-3">
        <DetailContent
          text={launch.details}
          height={launch.rocket.height}
          diameter={launch.rocket.diameter}
          mass={launch.rocket.mass}
          payloadLeo={launch.rocket.payload_weights.find(pw => pw.id == 'leo')}
          payloadGto={launch.rocket.payload_weights.find(pw => pw.id == 'gto')}
          payloadMars={launch.rocket.payload_weights.find(
            pw => pw.id == 'mars'
          )}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default DetailPage
