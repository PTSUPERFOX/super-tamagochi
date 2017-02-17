// functio time
function showTime () {
  document.getElementById('demo').innerHTML = `${Date()}`
}

// start the game | decrease energy over time
function startGame () {
  console.clear()
  console.log('time : ' + Date())
  console.log('hunger status : ' + hunger_status)
  console.log('thirst status : ' + thirst_status)
  console.log('fatgue status : ' + fatgue_status)
  console.log('awsomeness status : ' + awsomeness_status)
}

// function to use for make your character get maintain
function eat () {
  var eat_a = (hunger_status + 5 >= 100) ? hunger_status = 100 : hunger_status = hunger_status + 5
  var eat_b = (thirst_status + 1 >= 100) ? thirst_status = 100 : thirst_status = thirst_status + 1
  return eat_a, eat_b
}

function sleep () {
  fatgue_status = 100
  hunger_status = hunger_status - 10
  thirst_status = thirst_status - 10
}

function drink () {
  thirst_status = 100
}

function train () {
  hunger_status = hunger_status - 2
  fatgue_status = fatgue_status - 2
  thirst_status = thirst_status - 1
}

// function that run over time to decrease status
function thirst (input) {
  let decrease = input || 1
  thirst_status = thirst_status - decrease
}

function hunger (input) {
  let decrease = input || 1
  hunger_status = hunger_status - decrease
}

function fatgue (input) {
  let decrease = input || 1
  fatgue_status = fatgue_status - decrease
}

setInterval(showTime, 1000)
setInterval(startGame, 1000)
setInterval(thirst, 5000)
setInterval(hunger, 5000)
setInterval(fatgue, 5000)
