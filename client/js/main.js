$(document).ready(function(){

})

function trainingAjax() {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/train`,
    success: function(data){
      console.log(data);
    }
  })
}
function eatAjax() {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/eat`,
    success: function(data){
      console.log(data);
    }
  })
}
function drinkAjax() {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/drink`,
    success: function(data){
      console.log(data);
    }
  })
}
function sleepAjax() {
  let userid = localStorage.getItem('UserId')
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/users/${userid}/sleep`,
    success: function(data){
      console.log(data);
    }
  })
}
