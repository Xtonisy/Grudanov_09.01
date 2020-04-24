  
const numeric = document.querySelectorAll(".numeral"),
screen = document.querySelector(".screen"),
operators = document.querySelectorAll(".operator"),
result = document.querySelector(".eval"),
clear = document.querySelector(".clear");
let res = "";
let auto_clear = false;

numeric.forEach(elem => {
    elem.addEventListener("click", ()=>{
        if(auto_clear)
            clear_screen()
        if(elem.textContent != "."){
            if(screen.textContent == "0")
                screen.textContent = ""
            screen.textContent = screen.textContent+elem.textContent
        }
        else if(screen.textContent.indexOf(".")==-1)
            screen.textContent = screen.textContent+elem.textContent
    })
})

operators.forEach(elem => {
    elem.addEventListener("click", ()=>{
        if(auto_clear)
            clear_screen()
            res += screen.textContent
            res += elem.textContent
        screen.textContent = "0"
    })
})

clear.addEventListener("click", ()=>{
    screen.textContent = "0"
    res = ""
    auto_clear = false
})
result.addEventListener("click", ()=>{
    res += screen.textContent
    screen.textContent = res + "=" + eval(res)
    auto_clear = true
})


clear_screen()