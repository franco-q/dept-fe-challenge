export const reduceLaunches = (launches, rockets) => {
  return launches.map(launch => ({
    ...launch,
    _id: launch.flight_number + launch.launch_date_unix,
    date: new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(launch.launch_date_utc)),
    rocket: rockets.find(
      ({ rocket_id }) => rocket_id === launch.rocket.rocket_id
    )
  }))
}
