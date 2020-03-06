//our inputs
const t = document.getElementById("title")
const tColor = document.getElementById("title-color")
const m = document.getElementById("message")
const mColor = document.getElementById("message-color")
const tSize = document.getElementById("title-size")
const mSize = document.getElementById("message-size")


// our displays
const h1 = document.getElementById("title-display")
const p = document.getElementById("message-display")


//our event listeners
t.addEventListener("change", function(){
    h1.innerHTML = t.value
    console.log(h1.value)
})

tColor.addEventListener("change", function(){
    h1.style.color = tColor.value
    console.log(tColor.value)
})

m.addEventListener("change", function(){
    p.innerHTML = m.value
    console.log(p.value)
})

mColor.addEventListener("change", function(){
    p.style.color = mColor.value
    console.log(mColor.value)
})

tSize.addEventListener("change", function(){
    h1.style.fontSize = `${tSize.value}px`
})

mSize.addEventListener("change", function(){
    p.style.fontSize = `${mSize.value}px`
})