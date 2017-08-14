function playPause() {
  $.ajax('/playpause/', {
    method: 'GET',
    success: null
  })
  console.log("playPause")
}

function fullscreen() {
  $.ajax('/fullscreen/', {
    method: 'GET'
  })
  console.log("fullscreen")
}

function back() {
  $.ajax('/back/', {
    method: 'GET'
  })
  console.log("back")
}

function forward() {
  $.ajax('/forward/', {
    method: 'GET'
  })
  console.log("forward")
}

function audiodown() {
  $.ajax('/audiodown/', {
    method: 'GET'
  })
  console.log("audiodown")
}

function mute() {
  $.ajax('/mute/', {
    method: 'GET'
  })
  console.log("mute")
}

function audioup() {
  $.ajax('/audioup/', {
    method: 'GET'
  })
  console.log("audioup")
}
