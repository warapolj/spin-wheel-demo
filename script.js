const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const closeValue = urlParams.get('close')
const urlValue = urlParams.get('url')

if (closeValue === '1' || urlValue) {
  document.body.style.display = 'none'
}

document.getElementById('spin-button').addEventListener('click', function () {
  const wheel = document.getElementById('wheel')

  const degreePerPrize = 45
  const randomPrize = Math.floor(Math.random() * 8) // 0-7
  const randomDegree = randomPrize * degreePerPrize

  const minDegree = 5 * 360 // 360 degree = 1 round
  const totalDegree = minDegree + randomDegree
  console.log('totalDegree', totalDegree)
  wheel.style.transform = `rotate(${totalDegree}deg)`
  wheel.style.transition = 'transform 3s'

  setTimeout(function () {
    const prizes = ['50฿', '20฿', '300฿', '500฿', '90฿', '20฿', '100฿', 'รถเข็น']
    alert('You win prize ' + prizes[randomPrize])
    wheel.style.transform = `rotate(0deg)`
    wheel.style.transition = ''
  }, 3500)
})
