function shuffle(table){
    let rand = table
    let i = table.length, k, temp
    while (--i > 0) {
        k = Math.floor(Math.random() * (i + 1))
        return temp = rand[k]
    }
    
}

let comp = ['paper','rock','scissor'];


let chose = document.querySelector('#chose')

let rock = document.createElement("div")
rock.classList.add("rock")
rock.classList.add("tool")
chose.appendChild(rock)
rock.innerHTML = "<i class=\"fa-solid fa-mountain\"></i>"

let paper = document.createElement("div")
paper.classList.add("paper")
paper.classList.add("tool")
chose.appendChild(paper)
paper.innerHTML = "<i class=\"fa-solid fa-paper-plane\"></i>"

let scissor = document.createElement("div")
scissor.classList.add("scissor")
scissor.classList.add("tool")
chose.appendChild(scissor)
scissor.innerHTML = "<i class=\"fa-solid fa-scissors\"></i>"

let pcReply = document.querySelector('#reply')
let reply = document.createElement("div")
reply.classList.add("reply")
pcReply.appendChild(reply)

let tool = document.querySelector('.tool')
reply.innerHTML = "<p>Salut</p>"




let score = document.querySelector('#score')

let boxJ = document.createElement("div")
boxJ.classList.add("boxJ")
score.appendChild(boxJ)
boxJ.innerText = ""

let boxC = document.createElement("div")
boxC.classList.add("boxC")
score.appendChild(boxC)

let jScore = 1 
let compScore = 1


rock.addEventListener("click", function(){

    let rand = shuffle(comp)
    


    if (rand == "paper") {
        reply.innerHTML = "<i class=\"fa-solid fa-paper-plane\"></i>"
        boxC.innerText = "Score Ordinateur : "+ compScore++


    }
    else if (rand == "scissor") {
        reply.innerHTML = "<i class=\"fa-solid fa-scissors\"></i>"
        boxJ.innerText = "Score Joueur :"+ jScore++
    }else{
        reply.innerHTML = "<i class=\"fa-solid fa-mountain\"></i>"

    }

})


paper.addEventListener("click", function(){
    let rand = shuffle(comp)
    


    if (rand == "scissor") {
        reply.innerHTML = "<i class=\"fa-solid fa-scissors\"></i>"
        boxC.innerText = "Score Ordinateur : "+ compScore++
        console.log("perdu mon reuf")
    }


    else if (rand == "rock") {
        reply.innerHTML = "<i class=\"fa-solid fa-mountain\"></i>"
        console.log("gg mon reuf")
        boxJ.innerText = "Score Joueur : "+ jScore++
    }
    
    else{
        reply.innerHTML = "<i class=\"fa-solid fa-paper-plane\"></i>"
        console.log("draw")
    }

})


scissor.addEventListener("click", function(){
    let rand = shuffle(comp)
    
    

    if (rand == "rock") {
        reply.innerHTML = "<i class=\"fa-solid fa-mountain\"></i>"
        boxC.innerText = "Score Ordinateur : "+ compScore++
    }


    else if (rand == "paper") {
        reply.innerHTML = "<i class=\"fa-solid fa-paper-plane\"></i>"

        boxJ.innerText = "Score Joueur : "+ jScore++
    }
    
    
    else{
        reply.innerHTML = "<i class=\"fa-solid fa-scissors\"></i>"
    }
})
console.log(jScore)
console.log(compScore)




