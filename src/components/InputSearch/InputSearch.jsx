import { useRef, useImperativeHandle, forwardRef } from 'react'
import css from './InputSearch.module.scss'

const InputSearch = ({ onSubmit }, ref) => {
  const formRef = useRef()
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    clearForm: () => {
      formRef.current.reset()
      onSubmit('')
    }
  }))

  const sendValue = e => {
    e.preventDefault()
    onSubmit(inputRef.current.value)
  }

  const clearForm = e => {
    e.preventDefault()
    formRef.current.reset()
    onSubmit('')
  }

  return (
    <div className={css.root} onClick={() => inputRef.current.focus()}>
      <svg
        className={css.searchSvg}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z"
          fill="white"
          fillOpacity="0.47"
        />
      </svg>
      <form onSubmit={sendValue} ref={formRef} className={css.form}>
        <input type="text" className={css.input} ref={inputRef} />
      </form>
      <button className={css.clearBtn} onClick={clearForm}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.875 0.88125L7.99375 0L4.5 3.49375L1.00625 0L0.125 0.88125L3.61875 4.375L0.125 7.86875L1.00625 8.75L4.5 5.25625L7.99375 8.75L8.875 7.86875L5.38125 4.375L8.875 0.88125Z"
            fill="white"
            fillOpacity="0.77"
          />
        </svg>
      </button>
    </div>
  )
}

export default forwardRef(InputSearch)
