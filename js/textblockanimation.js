let block = document.querySelector('.blockForText')
block.addEventListener('mouseover', function () {
    block.style.boxShadow = '6px 7px 15px 1px rgba(255, 252, 252, 0.25)'
})
block.addEventListener('mouseout', function () {
    block.style.boxShadow = '3px 4px 15px 1px rgba(255, 252, 252, 0.25)'
})