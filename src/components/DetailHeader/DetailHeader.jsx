import css from './DetailHeader.module.scss'
import { Link } from 'react-router-dom'

const DetailHeader = ({ bg, altImg, favourite, date, rocket, caption }) => {
  return (
    <>
      <header className={css.root}>
        <figure className={css.figure}>
          <img src={bg} alt={altImg} />
        </figure>
        <Link to={'/'} className={css.backLink}>
          <svg
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.875 13.375L1.375 7.1875L6.875 1"
              stroke="white"
              strokeOpacity="0.87"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <button className={css.favBtn}>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.74274 13.817C8.90109 13.722 9.09891 13.722 9.25726 13.817L13.5477 16.3914C13.9267 16.6188 14.3927 16.2787 14.2918 15.8484L13.1553 11.0052C13.1127 10.8238 13.1746 10.6337 13.3158 10.5121L17.0978 7.25491C17.4335 6.96575 17.2551 6.41506 16.8135 6.37782L11.8289 5.9574C11.6444 5.94184 11.4836 5.82558 11.411 5.65525L9.45995 1.07886C9.28719 0.673645 8.71281 0.673646 8.54005 1.07886L6.58903 5.65525C6.51641 5.82558 6.35561 5.94184 6.1711 5.9574L1.18648 6.37782C0.744939 6.41506 0.566461 6.96575 0.902216 7.25491L4.68424 10.5121C4.82544 10.6337 4.8873 10.8238 4.84473 11.0052L3.70822 15.8484C3.60725 16.2787 4.07327 16.6188 4.45226 16.3914L8.74274 13.817Z"
              fill={favourite ? 'white' : ''}
              fillOpacity={'0.87'}
              stroke={favourite ? '' : 'white'}
            />
          </svg>
        </button>
        <div className={css.info}>
          <div className="container">
            <span className={css.date}>{date}</span>
            <h1 className={css.rocket}>{rocket}</h1>
            <p className={css.caption}>{caption}</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default DetailHeader
