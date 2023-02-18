const endDate = '18 February 2025 02:19 PM'
document.getElementById('end-date').innerText = endDate
const inputs = document.querySelectorAll('.inputs')

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = Math.floor((end - now) / 1000)

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / (3600 * 24))
    inputs[1].value = Math.floor((diff / 3600) % 24)
    inputs[2].value = Math.floor((diff / 60) % 60)
    inputs[3].value = Math.floor((diff) % 60)
}

setInterval(() => {
    clock()
}, 1000)

