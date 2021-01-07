// was trying to change Title with JS and got is successfully


// let title = "Title is Changed"

// let title_element = document.querySelector('title')
// let span = document.querySelector('span')

// console.log(title_element)
// console.log(span)

// span.addEventListener('click', ()=>{
//     title_element.innerText = title
// })


console.log(document.querySelector('body'))
let body = document.querySelector('body')

body.addEventListener('keydown', (event)=>{
    key = event.key
    keyCode = event.keyCode
    if(key == " "){
        document.getElementById('key').innerText = "Space"
        document.getElementById('keyCode').innerText = keyCode
    }
    else{
        document.getElementById('key').innerText = key
        document.getElementById('keyCode').innerText = keyCode

    }
    console.log(key)
})
