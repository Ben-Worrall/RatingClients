import React from "react";








 function addFactor(){
    
    //clear (edit factor) text 
 function ClearText(e){
    
    console.log(e)
}

//exit/close current factor 

 function CloseFactor(e){
    console.log(e)

}







    console.log('test')
    //remove current "addFactor"
    document.getElementById('AddFactorDiv').remove()

    //create "editable question" (factor)
    let factor = document.createElement('div')
    factor.classList.add('factor')

    //within the factor
 
        //for host to edit question
    let factorText = document.createElement('input')
    factorText.classList.add('factorText')
    factorText.setAttribute('onmousedown', ClearText(factorText))
    factorText.placeholder = "Edit Factor"
    factorText.contentEditable = "true"
    factorText.spellcheck = "false"
    //factorText.style.border = "0vh solid black"
    //factorText.style.borderRight = "0.25vh solid black"
    //factorText.style.overflowX = "scroll"
    let factorRating = document.createElement('div')
    factorRating.classList.add('factorRating')
          
        //for  question mark (user will eventually be able edit and rate)
    let div1 = document.createElement('div')
    div1.classList.add('ratingFor')
    div1.innerText = "?"
    div1.contentEditable = "false"
    factorRating.appendChild(div1)

        //just a slash
    let div2 = document.createElement('div')
    div2.classList.add('slash')
    div2.innerText = "/"
    factorRating.appendChild(div2)
        // what the rating is out of (10) can make host edit it later maybe
    let div3 = document.createElement('div')
    div3.classList.add('ratingOutOf')
    div3.innerText = "10"
    div3.spellcheck = "false"
    div3.contentEditable = "false"
    factorRating.appendChild(div3)


    //create exit button
    let exitBNT = document.createElement('button')
    exitBNT.classList.add('DelFactor')
    exitBNT.innerText = "X"
    exitBNT.setAttribute('onmousedown', "CloseFactor(this)")
    let BntHolder = document.createElement('div')
    BntHolder.classList.add('DelFactorHolder')
    BntHolder.appendChild(exitBNT)



    //everything ot each other then append that to the rating board
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








export default addFactor


