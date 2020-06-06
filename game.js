var funds = 10
var price = 0
var texts = 0
checkedOut = false

function start(){
    document.getElementById("screen").style.backgroundImage = "url('publix.jpg')"
    document.getElementById("option1").innerHTML = "Enter"
    document.getElementById("option1").setAttribute("onclick", "enterPublix()")
    document.getElementById("title").style.display = "none"
    document.getElementById("text").innerHTML = "Welcome to Publix!"
    document.getElementById("message").style.display = "block"
}

function enterPublix() {
    document.getElementById("screen").style.backgroundImage = "url('isle.jpg')"
    document.getElementById("option1").innerHTML = "Add to Cart"
    document.getElementById("option1").setAttribute("onclick", "addItem()")
    document.getElementById("text-box").style.display = "block"
    document.getElementById("text").innerHTML = "Type in the name of your item and click 'add to cart' or press enter"
    document.addEventListener('keypress', function(e){
        if(e.key === "Enter"){
            if(checkedOut) {
                textDad()
            }
            else {
                addItem()
            }
        }
    })
}

function addItem(){
    if(!checkedOut){
        const value = document.getElementById("text-box").value
        if(value !== ""){
            console.log('added')
            price += Math.floor(Math.random()*10)
            document.getElementById("grocery-list").style.display = "block"
            document.getElementById("option2").style.display = "block"
            var listItem = document.createElement("li")
            var text = document.createTextNode(value)
            listItem.appendChild(text) 
            document.getElementById("grocery-list").appendChild(listItem)
            document.getElementById("text-box").value = ""
        }
    }
}

function checkout(){
    checkedOut = true
    document.getElementById("screen").style.backgroundImage = "url('checkout.jpg')"
    document.getElementById("grocery-list").style.display = "none"
    document.getElementById("text-box").style.display = "none"
    document.getElementById("option1").style.display = "none"
    document.getElementById("option2").innerHTML = "Pay"
    document.getElementById("option2").setAttribute("onclick","pay()")
    document.getElementById("text").innerHTML = `Amount: $${price}`
}

function pay(){
    if(price > funds){
        document.getElementById("text").innerHTML = "Card Declined!"
        document.getElementById("text-box").style.display = "block"
        document.getElementById("text-box").setAttribute("placeholder","Text Message")
        document.getElementById("option1").innerHTML = "Text Dad"
        document.getElementById("option1").setAttribute("onclick","textDad()")
        document.getElementById("option1").style.display = "block"
    }
    else{
        document.getElementById("text").innerHTML = "Thank you for shopping with publix!"
        document.getElementById("text-box").style.display ="none"
        document.getElementById("option1").style.display = "none"
        document.getElementById("option2").innerHTML = "Play Again"
        document.getElementById("option2").setAttribute("onclick","playAgain()")
    }
}

function textDad(){
    const value = document.getElementById("text-box").value
    if(value !== ""){
        texts++
        document.getElementById("text-box").value = ""
        if(texts > 5){
            funds = price
            document.getElementById("text").innerHTML = "Try now"
        }
    }
}

function playAgain(){
    window.location.reload(true)
    start()
}