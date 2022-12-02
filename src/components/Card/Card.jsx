import { memo } from 'react'
import { Link } from 'react-router-dom'
import css from './Card.module.scss'

const Card = ({
  id,
  srcImg,
  altImg,
  title,
  description,
  date,
  onClickFav,
  favourite,
  flightNumber
}) => {
  const _onClickFav = e => {
    e.preventDefault()
    e.stopPropagation()
    onClickFav(id)
  }

  return (
    <Link className={css.root} to={`/launch/${flightNumber}`}>
      <figure className={css.figure}>
        <img src={srcImg} alt={altImg} />
      </figure>
      <div className={css.content}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.description}>{description}</p>
        <div className={css.footer}>
          <span className={css.date}>{date}</span>
          <button className={css.favBtn} onClick={_onClickFav}>
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.26325 8.9678C6.41108 8.88833 6.58892 8.88833 6.73675 8.9678L9.50564 10.4563C9.89039 10.6631 10.3368 10.3118 10.2261 9.88923L9.53489 7.25028C9.48403 7.05612 9.55422 6.85036 9.71313 6.72774L11.9681 4.9878C12.3309 4.70784 12.1573 4.1279 11.7003 4.09337L8.6157 3.86027C8.43685 3.84676 8.27895 3.73849 8.20188 3.57654L6.95149 0.948815C6.77057 0.568602 6.22943 0.568602 6.04851 0.948815L4.79812 3.57654C4.72105 3.73849 4.56315 3.84676 4.3843 3.86027L1.29968 4.09337C0.842688 4.1279 0.669071 4.70784 1.03191 4.9878L3.28687 6.72774C3.44578 6.85036 3.51597 7.05612 3.46511 7.25028L2.77393 9.88922C2.66325 10.3118 3.10961 10.6631 3.49436 10.4563L6.26325 8.9678Z"
                fill={favourite ? 'white' : ''}
                fillOpacity={'0.87'}
                stroke={favourite ? '' : 'white'}
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  )
}

export default memo(Card)
