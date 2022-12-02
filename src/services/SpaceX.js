import { get } from '@/utils/api'

export const getLaunches = async () => {
  return await get('https://api.spacexdata.com/v3/launches')
}

export const getRockets = async () => {
  return await get('https://api.spacexdata.com/v3/rockets')
}

export const getLaunch = async flight_number => {
  return await get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
}

export const getRocket = async rocket_id => {
  return await get(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
}
