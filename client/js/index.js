function setStatus (e) {
  e.preventDefault()
  let nameVal = $('input[name=name]').val()
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/register',
    data: {
      name: nameVal,
      hunger: 100,
      thirst: 100,
      fatigue: 100,
      awesomeness: 0
    },
    success: function (resp) {
      $('input[name=name]').val('')
      if (resp._id) {
        localStorage.setItem('UserId', resp._id)
        localStorage.setItem('Username', resp.name)
        window.location.href = 'http://localhost:8080/main.html'
      }else {
        window.location.href = 'http://localhost:8080/index.html'
      }
    },
    error: function () {
      console.log('POST Request setStatus Error')
    }
  })
}
