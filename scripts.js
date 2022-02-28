const base = document.querySelector("#base")
const mains = document.querySelectorAll(".mains")
const scoreJ = document.querySelector('#joueurScore')
const scoreC = document.querySelector('#ordiScore')
const scoreD = document.querySelector('#drawScore')
const showOrdi = document.querySelector('#ordi')
const reset = document.querySelector('#reset')


function shuffle(table){
    let rand = table
    let i = table.length, k
    while (--i > 0) {
        k = Math.floor(Math.random() * (i + 1))
        return temp = rand[k]
    }
}

let scoreJoueur = 0
let scoreOrdi = 0
let scoreDraw = 0

scoreJ.innerHTML = "<p>Score joueur :</p>"
scoreC.innerHTML = "<p>Score ordi :</p>"
scoreD.innerHTML = "<p>Egalité  :</p>"
base.innerHTML = "<p>Joueur </p> <p> VS </p> <p>  Ordi </p><p>Résultat</p>"

function comparer(j, o){
    
    const options = {
    "Pierre": {"Pierre" : "Egalité", "Feuille" : "Perdu", "Ciseaux" : "Victoire"},
    
    "Feuille" : {"Pierre" : "Victoire", "Feuille" : "Egalité", "Ciseaux" : "Perdu"},
    
    "Ciseaux" : {"Pierre" : "Perdu", "Feuille" : "Victoire", "Ciseaux" : "Egalité"}
    
    }
    
    switch (options[j][o]) {
        case "Victoire":
            result = " Victoire Joueur " 
            base.innerHTML = "<p>Score joueur : " + joueur + ' </p> <p>VS</p> <p> ' + " Ordi : " + ordi + " </p><p class=\" green\"> " + result + "</p>"
            scoreJoueur++
            scoreJ.innerHTML = "<p>Joueur score :" + scoreJoueur + "</p>"
        break;
        
        case "Perdu":
            result = "Defaite Joueur"
            base.innerHTML = "<p>Joueur : " + joueur + ' </p> <p>VS</p> <p> ' + " Ordi  : " + ordi + " </p><p class=\" red\"> " + result + "</p>"
            scoreOrdi++
            scoreC.innerHTML = "<p>Score ordi :" + scoreOrdi + "</p>"
            break;
        case "Egalité" :
            result = " Egalité " 
            base.innerHTML = "<p>Joueur : " + joueur + ' </p> <p>VS</p> <p> ' + " Ordi : " + ordi + " </p><p> " + result + "</p>"
            scoreDraw++
            scoreD.innerHTML = "<p>Egalité  :" + scoreDraw + "</p>"
    }
}
        
optionsOrdi = ['Pierre', 'Feuille', 'Ciseaux']

        


mains.forEach(function(main){
            
    main.addEventListener("click", function(){
        


            
        joueur = main.dataset.choice
        ordi = shuffle(optionsOrdi)
        console.log(ordi)
        comparer(joueur, ordi)
        
        
    })
})

reset.addEventListener("click", function(){
    location.reload()
})