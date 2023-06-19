function renderAddPin() {
  document.querySelector('#page').innerHTML = `
    <section class='create-pin'>
      <form onSubmit="createPin(event)">
        <h2 class="menu-title">Write a review</h2>
        <fieldset>
          <label for="">Location Name</label>
          <input type="text" name="name">
        </fieldset>
        <fieldset>
          <label for="">Review</label>
          <input type="text" name="clue" maxlength="100">
        </fieldset>
        <fieldset>
          <label for="">Address</label>
          <input type="text" name="address">
        </fieldset>
        <fieldset>
          <label for="">Image</label>
          <input type="text" name="img">
        </fieldset>
        <button>Post Review</button>
      </form>
    </section>
  `
}

function createPin(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/pins', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(pin => {
      state.pins.push(pin)
      renderPinList()
    })
}