import { render, fireEvent } from '@testing-library/react'
import Tabs from './Tabs'

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => {
    return <a href={to}>{children}</a>
  }
}))

describe('Tabs', () => {
  test('should render', () => {
    const props = { links: ['All', 'Favourites'] }

    const { asFragment } = render(<Tabs {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should execute cb when a link is clicked', () => {
    const onClickLink = jest.fn()
    const props = { links: ['All', 'Favourites'] }
    const { container, getByText } = render(
      <Tabs {...props} onClickLink={onClickLink} />
    )

    fireEvent.click(getByText(props.links[0]))

    expect(onClickLink).toHaveBeenCalledWith(props.links[0])
  })
})
