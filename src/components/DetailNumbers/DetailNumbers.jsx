import css from './DetailNumbers.module.scss'

const DetailNumbers = ({ launches, landings, rockets }) => {
  return (
    <section className={css.root}>
      <div className={css.item}>
        <span className={css.num}>{launches}</span>
        <span>
          Total
          <br />
          launches
        </span>
      </div>
      <div className={css.item}>
        <span className={css.num}>{landings}</span>
        <span>
          Total
          <br />
          landings
        </span>
      </div>
      <div className={css.item}>
        <span className={css.num}>{rockets}</span>
        <span>
          reflown
          <br />
          rockets
        </span>
      </div>
    </section>
  )
}

export default DetailNumbers
