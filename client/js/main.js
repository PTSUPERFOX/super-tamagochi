$(document).ready(function () {
  getStatus()
})

function trainingAjax () {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/train`,
    success: function (data) {
      getStatus()
    }
  })
}
function eatAjax () {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/eat`,
    success: function (data) {
      getStatus()
    }
  })
}
function drinkAjax () {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/drink`,
    success: function (data) {
      getStatus()
    }
  })
}
function sleepAjax () {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/sleep`,
    success: function (data) {
      getStatus()
    }
  })
}
function getStatus () {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/getstatus/${userid}`,
    success: function (data) {
      $('#fatigue_status').val(data.fatigue)
      $('#hunger_status').val(data.hunger)
      $('#thirst_status').val(data.thirst)
      $('#awesomeness_status').val(data.awesomeness)
    }
  })
}
