const state = {
  pins: [],
  loggedInUserName: null
}

fetch('/api/pins')
  .then(res => res.json())
  .then(pins => {
    state.pins = pins
    renderPinList()
  })

fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => {
    if (typeof userName === 'string') {
      state.loggedInUserName = userName
    }
  })