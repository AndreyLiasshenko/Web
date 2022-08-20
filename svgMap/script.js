let body = document.querySelector('body')
let map = document.querySelectorAll('path') // svg зоображення
let info = document.createElement('div')
let textInfo = document.createElement('h1')
info.setAttribute('class' , 'info')
textInfo.setAttribute('class', 'textInfo')
info.appendChild(textInfo)

let listener = function(e) {
    // Змінює кооодинати блоку info відносно курсору
    info.style.left = e.pageX -50 + "px";
    info.style.top = e.pageY -820 + "px";
};

// Для кожного елементу додає слухачі подій (EventListener)
map.forEach(el => {

    // При наведенні на елемент змінює товщину борта
    el.addEventListener('mouseenter', () => {
        textInfo.innerText = el.ariaLabel
        el.style.cssText = 'fill: #A4A4A4FF; stroke-width: 2px;'
        body.appendChild(info)
    })

    // При виведині миші відновлює товщину
    el.addEventListener('mouseleave', () => {
        el.style.cssText = '';
        body.removeChild(info)
    })

    // Активує функцію listener при наведенні на блок
    el.addEventListener('mousemove', listener);
})