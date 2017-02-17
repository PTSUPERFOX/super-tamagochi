$('#name').keyup(function (e) {
  e.preventDefault()
  if (e.keyCode == 13) {
    setStatus()
  }
})

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

function login (e) {
  e.preventDefault()
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/login',
    data: {
      name: $('input[name=name]').val()
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
      console.log('POST Request Login Error')
    }
  })
}

function logout () {
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/api/users/logout',
    data: {
      id: localStorage.getItem('UserId')
    },
    success: function () {
      // localStorage.remove()
      window.location.href = 'http://localhost:8080/index.html'
    },
    error: function () {
      console.log('POST Request Logout Error')
    }
  })
}
