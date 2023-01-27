const button = document.getElementById("button")
const page = document.querySelector("html")
const secondButton = document.querySelector(".buttonTwo")
const textarea = document.getElementById("textarea")
const thirdButton = document.getElementById("thirdButton")
const fourthButton = document.getElementById("fourthButton")
const fifthButton = document.getElementById("fifthButton")
const sixthButton = document.getElementById("sixthButton")
const greenDiv = document.getElementById("green-div")
const input = document.getElementById("input")
const skipButton = document.querySelector(".skipBtn")
const submitButton = document.getElementById("submitBtn")
const h1 = document.getElementById("h1")
const background = document.querySelector(".background")
const backgroundButton = document.getElementById("backgroundBtn")
const codeButton = document.getElementById("showCode")
const code = document.getElementById("code")
const moveOnButton = document.getElementById("moveOnButton")
button.addEventListener("mouseenter", buttonOne)
button.addEventListener("mouseleave", buttonTwo)
button.addEventListener("click", buttonThree)

secondButton.style.display = "none"
moveOnButton.style.display = "none"
codeButton.style.display = "none"
background.style.display = "none"
submitButton.style.display = "none"
input.style.display = "none"
greenDiv.style.display = "none"
sixthButton.style.display = "none"
fifthButton.style.display = "none"
fourthButton.style.display = "none"
h1.style.display = "none"
thirdButton.style.display = "none"
textarea.style.display = "none"
skipButton.textContent = "Skip"
backgroundButton.textContent = "Click for a sweet background"
skipButton.addEventListener("mouseenter", function(){
    skipButton.textContent = "Lazy..."
})
skipButton.addEventListener("mouseleave", function(){
    skipButton.textContent = "Skip"
})
skipButton.addEventListener("click", leave)
backgroundButton.addEventListener("click", function(){
    hasChangedBackground = true
    background.style.display = "block"
    backgroundButton.textContent = "Better, right?"
    setTimeout(function(){backgroundButton.textContent = "See ya!"},2000)
    setTimeout(function(){backgroundButton.style.display = "none"}, 3000)
})


let hasClicked = 0
let hasChangedBackground

button.textContent = "Click Me"


function buttonOne() {
    if(hasClicked === 0)
    button.textContent = "Dont be shy, click"
}

function buttonTwo() {
    if(hasClicked === 0)
    button.textContent = "Come on, why'd you leave?"
    
}

function buttonThree() {
    backgroundButton.style.display = "none"
    skipButton.style.display = "none"
    hasClicked = 1
    button.textContent = "OUCH! Not that hard"
    hasClicked = 2
    setTimeout(function(){button.textContent = "I need to catch my breath"}, 2000)
    setTimeout(function(){button.textContent = "I'm going to die"}, 4000)
    setTimeout(function(){button.style.display = "none"},5000)
    button.disabled = true
    setTimeout(function() {
    secondButton.textContent = "Hey, sorry about him"
    secondButton.style.display = "block"
    secondButtonOne()
    }, 6000)


}

function clickedOne() {
    button.textContent = "thanks"
}

function secondButtonOne() {
    setTimeout(function() {
        secondButton.textContent = "He's kind of a drama queen"
    }, 1000)
    setTimeout(function() {
        secondButton.textContent = "Click me to see something cool though, I'll make a textarea for you to play around in!"
        secondButton.addEventListener("click", textFunc)
    }, 3000)
}

function textFunc() {
    secondButton.style.display = "none"
    textarea.style.display = "block"
    thirdButton.style.display = "block"
    thirdButton.textContent = "just click me to do something else"
    thirdButton.addEventListener("click", leave)
}

function leave() {
    textarea.style.display = "none"
    button.style.display = "none"
    secondButton.style.display = "none"
    thirdButton.style.display = "none"
    skipButton.style.display = "none"
    thirdButton.style.display = "none"
    fourthButton.style.display = "block"
    fifthButton.style.display = "block"
    sixthButton.style.display = "block"
    fourthButton.textContent = "Click me to make a header"
    fifthButton.textContent = "Click me to make a big green div"
    sixthButton.textContent = "Click me to create an input field"
    if(!hasChangedBackground) {
    backgroundButton.style.display = "block"
    backgroundButton.textContent = "Change the background!!!!"
    }
    fourthButton.addEventListener("click", makeHeader)
    fifthButton.addEventListener("click", makeDiv)
    sixthButton.addEventListener("click", makeInput)
}

function makeHeader() {
    h1.style.display = "block"
    fourthButton.style.display = "none"
}

function makeDiv() {
    greenDiv.style.display = "block"
    fifthButton.style.display = "none"
}

function makeInput() {
    input.style.display = "block"
    sixthButton.style.display = "none"
    submitButton.style.display = "block"
    submitButton.addEventListener("click", function() {
        if(input.value == "get me out")
        next()
    })

}

function next() {
    input.style.display = "none"
    submitButton.style.display = "none"
    greenDiv.style.display = "none"
    h1.style.display = "none"
    fourthButton.style.display = "none"
    fifthButton.style.display = "none"
    sixthButton.style.display = "none"
    backgroundButton.style.display = "none"
    codeButton.style.display = "block"
    codeButton.textContent = "Click to show code"
    codeButton.addEventListener("click", showCode)
}

function showCode() {
    codeButton.style.display = 'none'
    code.innerHTML = `<p>const button = document.getElementById("button")
    const page = document.querySelector("body")
    const secondButton = document.querySelector(".buttonTwo")
    const textarea = document.getElementById("textarea")
    const thirdButton = document.getElementById("thirdButton")
    const fourthButton = document.getElementById("fourthButton")
    const fifthButton = document.getElementById("fifthButton")
    const sixthButton = document.getElementById("sixthButton")
    const greenDiv = document.getElementById("green-div")
    const input = document.getElementById("input")
    const skipButton = document.querySelector(".skipBtn")
    const submitButton = document.getElementById("submitBtn")
    const h1 = document.getElementById("h1")
    const background = document.querySelector(".background")
    const backgroundButton = document.getElementById("backgroundBtn")
    const codeButton = document.getElementById("showCode")
    const code = document.getElementById("code")
    button.addEventListener("mouseenter", buttonOne)
    button.addEventListener("mouseleave", buttonTwo)
    button.addEventListener("click", buttonThree)
    
    secondButton.style.display = "none"
    codeButton.style.display = "none"
    background.style.display = "none"
    submitButton.style.display = "none"
    input.style.display = "none"
    greenDiv.style.display = "none"
    sixthButton.style.display = "none"
    fifthButton.style.display = "none"
    fourthButton.style.display = "none"
    h1.style.display = "none"
    thirdButton.style.display = "none"
    textarea.style.display = "none"
    skipButton.textContent = "Skip"
    backgroundButton.textContent = "Click for a sweet background"
    skipButton.addEventListener("mouseenter", function(){
        skipButton.textContent = "Lazy..."
    })
    skipButton.addEventListener("mouseleave", function(){
        skipButton.textContent = "Skip"
    })
    skipButton.addEventListener("click", leave)
    backgroundButton.addEventListener("click", function(){
        hasChangedBackground = true
        background.style.display = "block"
        backgroundButton.textContent = "Better, right?"
        setTimeout(function(){backgroundButton.textContent = "See ya!"},2000)
        setTimeout(function(){backgroundButton.style.display = "none"}, 3000)
    })
    
    let hasClicked = 0
    let hasChangedBackground
    
    button.textContent = "Click Me"
    
    
    function buttonOne() {
        if(hasClicked === 0)
        button.textContent = "Dont be shy, click"
    }
    
    function buttonTwo() {
        if(hasClicked === 0)
        button.textContent = "Come on, why'd you leave?"
        
    }
    
    function buttonThree() {
        backgroundButton.style.display = "none"
        skipButton.style.display = "none"
        hasClicked = 1
        button.textContent = "OUCH! Not that hard"
        hasClicked = 2
        setTimeout(function(){button.textContent = "I need to catch my breath"}, 2000)
        setTimeout(function(){button.textContent = "I'm going to die"}, 4000)
        setTimeout(function(){button.style.display = "none"},5000)
        button.disabled = true
        setTimeout(function() {
        secondButton.textContent = "Hey, sorry about him"
        secondButton.style.display = "block"
        secondButtonOne()
        }, 6000)
    
    
    }
    
    function clickedOne() {
        button.textContent = "thanks"
    }
    
    function secondButtonOne() {
        setTimeout(function() {
            secondButton.textContent = "He's kind of a drama queen"
        }, 1000)
        setTimeout(function() {
            secondButton.textContent = "Click me to see something cool though, I'll make a textarea for you to play around in!"
            secondButton.addEventListener("click", textFunc)
        }, 3000)
    }
    
    function textFunc() {
        secondButton.style.display = "none"
        textarea.style.display = "block"
        thirdButton.style.display = "block"
        thirdButton.textContent = "just click me to do something else"
        thirdButton.addEventListener("click", leave)
    }
    
    function leave() {
        textarea.style.display = "none"
        button.style.display = "none"
        secondButton.style.display = "none"
        thirdButton.style.display = "none"
        skipButton.style.display = "none"
        thirdButton.style.display = "none"
        fourthButton.style.display = "block"
        fifthButton.style.display = "block"
        sixthButton.style.display = "block"
        fourthButton.textContent = "Click me to make a header"
        fifthButton.textContent = "Click me to make a big green div"
        sixthButton.textContent = "Click me to create an input field"
        if(!hasChangedBackground) {
        backgroundButton.style.display = "block"
        backgroundButton.textContent = "Change the background!!!!"
        }
        fourthButton.addEventListener("click", makeHeader)
        fifthButton.addEventListener("click", makeDiv)
        sixthButton.addEventListener("click", makeInput)
    }
    
    function makeHeader() {
        h1.style.display = "block"
        fourthButton.style.display = "none"
    }
    
    function makeDiv() {
        greenDiv.style.display = "block"
        fifthButton.style.display = "none"
    }
    
    function makeInput() {
        input.style.display = "block"
        sixthButton.style.display = "none"
        submitButton.style.display = "block"
        submitButton.addEventListener("click", function() {
            if(input.value == "get me out")
            next()
        })
    
    }
    
    function next() {
        input.style.display = "none"
        submitButton.style.display = "none"
        greenDiv.style.display = "none"
        h1.style.display = "none"
        fourthButton.style.display = "none"
        fifthButton.style.display = "none"
        sixthButton.style.display = "none"
        backgroundButton.style.display = "none"
        codeButton.style.display = "block"
        codeButton.textContent = "Click to show code"
        codeButton.addEventListener("click", showCode)
    }
    
    function showCode() {
        codeButton.style.display = 'none'
        code.innerHTML = 
    }
    
    
    
    
    </p>`
    page.style.overflow = "scroll"
    setTimeout(function(){code.style.display = "none"; moveOnButton.style.display = "block"; moveOnButton.textContent = "Let's Move On"},5000)
    moveOnButton.addEventListener("click", moveOn)
}
function moveOn() {
    alert("yep that's all I've got so far")
}



