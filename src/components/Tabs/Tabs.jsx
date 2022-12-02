import cn from 'classnames'
import { useState } from 'react'
import css from './Tabs.module.scss'

const Tabs = ({ links, onClickLink }) => {
  const [active, setActive] = useState(links[0])

  const onClick = link => e => {
    e.preventDefault()
    setActive(link)
    onClickLink(link)
  }

  return (
    <nav className={css.root}>
      {links.map((link, i) => (
        <a
          href="#"
          className={cn(css.tab, active === link && css.active)}
          onClick={onClick(link)}
          key={i}
        >
          {link}
        </a>
      ))}
    </nav>
  )
}

export default Tabs
