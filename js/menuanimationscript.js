let Menu = document.querySelectorAll('.itemDecor')

Menu.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.style.fontSize = '26px'
        item.style.textShadow = '3px 3px 10px 2px #f3f3f3cb';
    })
})
Menu.forEach(function (item) {
    item.addEventListener('mouseout', function () {
        item.style.fontSize = '25px'
        item.style.textShadow = '2px 2px 10px #e9e9e9cb'
    })
})