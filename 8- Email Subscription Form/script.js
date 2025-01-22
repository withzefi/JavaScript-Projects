const scriptURL = 'https://script.google.com/macros/s/AKfycbwl_2Whh3iFmPpOad7Ms34T4ctnV6tDCQJ9TtHp-NrMy0ubi366FOhSGhhV2vKDUkk6/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Thank You For Subscribing!';
        setTimeout(() => {
            msg.innerHTML = ''; 
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
