function renderPinList() {
  document.querySelector('#page').innerHTML = `
    <section class='pin-list'>
      ${renderPins()}
    </section>
  `
}

function renderPins() {
  return state.pins.map(pin => `
    <section class='pin' data-id='${pin.id}'>
      <h2>${pin.name}</h2>
      <img src='${pin.img}'>
      <p>"${pin.review}"</p>
      <p class="address">${pin.address}<span class="delete-button" onClick="deletePin(event)">delete</span></p>
    </section>
  `).join('')
}

function deletePin(event) {
  const deleteBtn = event.target
  const pinDOM = deleteBtn.closest('.pin')
  const pinId = pinDOM.dataset.id

  fetch(`/api/pins/${pinId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.pins = state.pins.filter(t => t.id != pinId)
      renderPinList()
    })
}