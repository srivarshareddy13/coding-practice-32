// Write your code here
const constants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationsDetails = props => {
  const {activeEvents} = props

  const renderNoActiveEvent = () => (
    <div>
      <p>Click on an event, tp view its registration details</p>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />

      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much tp your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button>Register Here</button>
    </div>
  )

  const renderActiveEventsDetails = () => {
    switch (activeEvents) {
      case constants.yetToRegister:
        return renderYetToRegister()
      case constants.registered:
        return renderRegistered()
      case constants.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEvent()
    }
  }

  return <div>{renderActiveEventsDetails()}</div>
}

export default ActiveEventRegistrationsDetails
