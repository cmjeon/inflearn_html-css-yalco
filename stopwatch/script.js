const screen = document.getElementById('screen')
const toggleButton = document.getElementById('button')
let timeInterval
let stopWatchOn = false
let seconds = 0

toggleButton.addEventListener('click', () => {
  stopWatchOn = !stopWatchOn
  toggleButton.innerHTML = stopWatchOn ? '■' : '▶'
  toggleButton.style.backgroundColor
    = stopWatchOn ? 'tomato' : 'steelblue'
  if (!stopWatchOn) {
    clearInterval(timeInterval)
    seconds = 0
    screen.innerHTML = '00:00:00'
  } else {
    timeInterval = setInterval(() => {
      seconds++
      const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0')
      const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0')
      const cs = String(seconds % 100).padStart(2, '0')
      screen.innerHTML = `${mm}:${ss}:${cs}`
    }, 10);
  }
})