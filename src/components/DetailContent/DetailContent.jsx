import css from './DetailContent.module.scss'

const DetailContent = ({
  text,
  height,
  diameter,
  mass,
  payloadLeo,
  payloadGto,
  payloadMars
}) => {
  return (
    <div>
      <section className="text-center">
        <h3 className={css.title}>About Launched</h3>
        <p className={css.text}>{text}</p>
      </section>
      <h3 className={css.title}>Overview</h3>
      <ul className={css.overviewList}>
        {height && (
          <li>
            <span className={css.feature}>HEIGHT</span>
            <div className={css.values}>
              <span>{height.meters}m</span> <em>/ {height.feet}ft</em>
            </div>
          </li>
        )}
        {diameter && (
          <li>
            <span className={css.feature}>DIAMETER</span>
            <div className={css.values}>
              <span>{diameter.meters}m</span> <em>/ {diameter.feet}ft</em>
            </div>
          </li>
        )}
        {mass && (
          <li>
            <span className={css.feature}>MASS</span>
            <div className={css.values}>
              <span>{mass.kg}kg</span> <em>/ {mass.lb}lb</em>
            </div>
          </li>
        )}
        {payloadLeo && (
          <li>
            <span className={css.feature}>PAYLOAD TO LEO</span>
            <div className={css.values}>
              <span>{payloadLeo.kg}kg</span> <em>/ {payloadLeo.lb}lb</em>
            </div>
          </li>
        )}
        {payloadGto && (
          <li>
            <span className={css.feature}>PAYLOAD TO GTO</span>
            <div className={css.values}>
              <span>{payloadGto.kg}kg</span> <em>/ {payloadGto.lb}lb</em>
            </div>
          </li>
        )}
        {payloadMars && (
          <li>
            <span className={css.feature}>PAYLOAD TO MARS</span>
            <div className={css.values}>
              <span>{payloadMars.kg}kg</span> <em>/ {payloadMars.lb}lb</em>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default DetailContent
