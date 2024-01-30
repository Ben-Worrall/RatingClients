import React from 'react';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, deleteDoc, onSnapshot, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
const db = getFirestore()


const GetResult = () => {
    var UserData = []
 //get factors
 let factors = JSON.parse(localStorage.getItem('factors'))
 //sort factors into right order
 factors = factors.sort((a,b) => a?.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))

 //for each factor, go through and find the docuemtn with right code, then acess the sub collections of that server
    factors.forEach(async (SubColId) => {
        
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
                    //(subDoc.data().Username)
                    //(subDoc.data().Rating)
                    console.log("factor: " + SubColId + " || " + "Username: " + subDoc.data().Username + " || " + "Rating: " + subDoc.data().Rating)
                  }
              })
              

          }
      })



    });
    console.log(UserData)
 

}


export default GetResult