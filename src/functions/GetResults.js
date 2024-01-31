import React from 'react';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, deleteDoc, onSnapshot, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
const db = getFirestore()



const GetResult = () => {
  
  
 //get factors
 let factors = JSON.parse(localStorage.getItem('factors'))
 //sort factors into right order
 factors = factors.sort((a,b) => a?.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))


  //for each factor
  factors.forEach(async (SubColId) => {

  //create the display for the factors and their ratings

  //add each factor to the page and remove the button
    document.getElementById('ShowResultBNT').style.display = "none"
    //add factor results for each factor
    let factor = document.createElement('div')
    factor.classList.add('factor')
             
  //the question that the host
  let factorText = document.createElement('div')
  factorText.classList.add('factorText')
  factorText.innerText = SubColId
  factorText.spellcheck = "false"
  
  //for the the rating
  let factorRating = document.createElement('div')
  factorRating.classList.add('factorRating')
  
  
  //tallied up all the ratings for each factor
  let div1 = document.createElement('div')
  div1.classList.add('ratingFor')
  //div1.innerText 
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



     //now that it has been established
     //access teh sub collections to get the data
     

     // 1st step is to access the doc that matches the code
     const colRef = collection(db, "Servers");
     const docsSnap = await getDocs(colRef);
     //search through and find the doc with the code
     docsSnap.forEach(async doc => {
        
      //find and establish the doc of the server u made
      if(doc.data().code == localStorage.getItem('code')){
        var UserRatings = 0
        var UserRatingsLength = 0
        var UserNames = 0


         // 2nd step is to access sub collection with id of the doc that matches the code
         var CurFactorCol = collection(db,'Servers/' + doc.id + '/'+ SubColId);
         //search through the docs of the collection but pass through the host document
         let SubDocs = await getDocs(CurFactorCol)
         //look through the documents
          SubDocs.forEach(async subDoc => {
            //skip over the host doc
            if(!subDoc.data().Host){
              UserRatings = UserRatings + Number(subDoc.data().Rating)
              UserRatingsLength = UserRatingsLength+1
            }

          })

          //then add the ratings average to the div factors at the top and appened them together
          div1.innerText = Math.round((UserRatings/UserRatingsLength) * 10) / 10
          factor.appendChild(factorText)
          factor.appendChild(factorRating)
          document.getElementById('ShowResultDisplay').style.display = "block"
          document.getElementById('ShowResultDisplay').style.justifyContent = ""
          document.getElementById('ShowResultDisplay').style.alignItems = ""
          document.getElementById('ShowResultDisplay').appendChild(factor)


      }

    })

 

  })


     
    

    
    
    
 

}


export default GetResult










/* 


 // 1st step is to access the doc that matches the code
      const colRef = collection(db, "Servers");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach(async doc => {
          if(doc.data().code == localStorage.getItem('code')){
              
              // 2nd step is to access sub collection with id of 
              var CurFactorCol = collection(db,'Servers/' + doc.id + '/'+ SubColId);
              //search through the docs of the collection but pass through the host document
              let SubDocs = await getDocs(CurFactorCol)
              //look through the documents
               SubDocs.forEach(async subDoc => {
                  if(!subDoc.data().Host){
                    //(subDoc.data().Username)   each users username
                    //(subDoc.data().Rating)     each users rating
                    //console.log("factor: " + SubColId + " || " + "Username: " + subDoc.data().Username + " || " + "Rating: " + subDoc.data().Rating)

                    
                    //send through all the data to " UserData "
                    UserNames.push(subDoc.data().Username)
                    UserRatings.push(subDoc.data().Rating)
                    console.log(UserNames)
                    console.log(UserRatings)
                    
                  }
              })
              

          }








//add each factor to the page and remove the button
  document.getElementById('ShowResultBNT').style.display = "none"
  //add factor results for each factor
  let factor = document.createElement('div')
  factor.classList.add('factor')
           
//the question that the host
let factorText = document.createElement('div')
factorText.classList.add('factorText')
factorText.innerText = SubColId
factorText.spellcheck = "false"

//for the the rating
let factorRating = document.createElement('div')
factorRating.classList.add('factorRating')


//tallied up all the ratings for each factor
let div1 = document.createElement('div')
div1.classList.add('ratingFor')
div1.innerText = 9
factorRating.appendChild(div1)
console.log(UserRatings)




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





//everything ot each other then append that to the rating board
//append factor to the rating board
factor.appendChild(factorText)
factor.appendChild(factorRating)
document.getElementById('ShowResultDisplay').style.display = "block"
document.getElementById('ShowResultDisplay').style.justifyContent = ""
document.getElementById('ShowResultDisplay').style.alignItems = ""
document.getElementById('ShowResultDisplay').appendChild(factor)














*/
