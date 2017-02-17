$('#name_submit').click(function (e) {
  e.preventDefault()
  login()
})

function setStatus () {
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

function login () {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/login',
    data: {
      name: $('#name').val()
    },
    success: function (resp) {
      $('#name').val()
      console.log(resp._id)
      if (resp._id) {
        console.log('OK')
        localStorage.setItem('UserId', resp._id)
        localStorage.setItem('Username', resp.name)
        window.location.href = 'http://localhost:8080/main.html'
      }else {
        window.location.href = 'http://localhost:8080/index.html'
      }
    },
    error: function () {
      console.log('POST Request Login Error')
    }
  })
}
