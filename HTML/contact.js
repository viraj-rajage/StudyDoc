const scriptURL = 'https://script.google.com/macros/s/AKfycbzM_m6tSDQpStY6k7OTL6JG2MPbSq8Bm3Wg8P4Twkwcf56uZh6731s6gFylTTw3c_kO/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})