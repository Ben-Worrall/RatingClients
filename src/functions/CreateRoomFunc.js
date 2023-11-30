import React from "react";


 function addFactor(){
    
    console.log('test')
    //remove factor button
    document.getElementById('AddFactorDiv').remove()

    //create factor
    let factor = document.createElement('div')
    factor.classList.add('factor')

    let factorText = document.createElement('div')
    factorText.classList.add('factorText')
    factorText.setAttribute('onmousedown', "ClearText(this)")
    factorText.innerText = "Edit Factor"
    factorText.contentEditable = "true"
    factorText.spellcheck = "false"



    let factorRating = document.createElement('div')
    factorRating.classList.add('factorRating')

    let div1 = document.createElement('div')
    div1.classList.add('ratingFor')
    div1.innerText = "?"
    div1.contentEditable = "false"
    factorRating.appendChild(div1)

    let div2 = document.createElement('div')
    div2.classList.add('slash')
    div2.innerText = "/"
    factorRating.appendChild(div2)

    let div3 = document.createElement('div')
    div3.classList.add('ratingOutOf')
    div3.setAttribute('onmousedown', "ClearText(this)")
    div3.innerText = "Edit"
    div3.spellcheck = "false"
    div3.contentEditable = "true"
    factorRating.appendChild(div3)


    //create exit button
    let exitBNT = document.createElement('button')
    exitBNT.classList.add('DelFactor')
    exitBNT.innerText = "X"
    exitBNT.setAttribute('onmousedown', "CloseFactor(this)")
    let BntHolder = document.createElement('div')
    BntHolder.classList.add('DelFactorHolder')
    BntHolder.appendChild(exitBNT)



    //append factor to the rating board
    factor.appendChild(factorText)
    factor.appendChild(factorRating)
    factor.appendChild(BntHolder)
    document.getElementById('RatingBoard').appendChild(factor)
    


    //create new (add factor) div
    let AddFactorDiv = document.createElement('div')
    AddFactorDiv.id = "AddFactorDiv"


    //create new (add factor) button
    let AddFactorBNT = document.createElement('div')
    AddFactorBNT.onmousedown = addFactor
    AddFactorBNT.innerText = "Add Factor"
    AddFactorBNT.id = "AddFactorBNT"

   //append the (add factor) button to the (add factor) div
    AddFactorDiv.appendChild(AddFactorBNT) 

    //then append (add factor) div to the rating board
    document.getElementById('RatingBoard').appendChild(AddFactorDiv)

}


//clear (edit factor) text 
function ClearText(e){
    e.innerText = ""
    e.focus()
}

//exit/close current factor 

function CloseFactor(e){
    console.log(e.parentNode.parentNode)
    e.parentNode.parentNode.remove()

}

export default {addFactor, ClearText, CloseFactor}


