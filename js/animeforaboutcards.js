let cards = document.querySelectorAll('.cards')
cards.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.style.textShadow = '8px 10px 10px rgba(0, 194, 255)'
    })
})
cards.forEach(function (item) {
    item.addEventListener('mouseout', function () {
        item.style.textShadow = '1px 2px 20px rgba(0, 194, 255, 0.7)'
    })
})