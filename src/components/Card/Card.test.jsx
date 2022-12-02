import { render, fireEvent } from '@testing-library/react'
import Card from './Card'

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => {
    return <a href={to}>{children}</a>
  }
}))

describe('Card', () => {
  test('should render', () => {
    const props = {
      id: 1143239401,
      srcImg: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
      altImg: 'FalconSat',
      title: 'FalconSat',
      description: 'Engine failure at 33 seconds and loss of vehicle',
      date: 'March 24, 2006',
      flightNumber: 1,
      favourite: false
    }

    const { asFragment } = render(<Card {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should execute cb when fav btn is clicked', () => {
    const onClickFav = jest.fn()
    const props = {
      id: 1143239401,
      srcImg: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
      altImg: 'FalconSat',
      title: 'FalconSat',
      description: 'Engine failure at 33 seconds and loss of vehicle',
      date: 'March 24, 2006',
      flightNumber: 1,
      favourite: false
    }
    const { container } = render(<Card {...props} onClickFav={onClickFav} />)

    fireEvent.click(container.querySelector('button'))

    expect(onClickFav).toHaveBeenCalledWith(props.id)
  })
})
