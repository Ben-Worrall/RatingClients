

import React from 'react';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, deleteDoc, onSnapshot, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
const db = getFirestore()


const SubmitAnswer = () => {  
   //console.log('test')
   //go through the factors and for each factor do the following (0)
   //get the factor name (1)
   //get the factor rating (2)
   //get users name (3)
   //get the code of the server (4)
   //connect those 3 and put them in a new doc and send to the factor collection that corresponds to the factor name in the server u are connected to
   
   
    let AllFactors = document.querySelectorAll('.factor')
    function SendToDB(){
    AllFactors.forEach(async (factor)=>{

        
        // (1)   factor.children[0].innerText
        // (2)   factor.children[1].children[0].value
        // (3)   localStorage.getItem('UserName')
        // (4)   localStorage.getItem('code')
        //got what we need now
         var FactorVal = factor.children[1].children[0].value
         if(FactorVal == null){
            FactorVal = 0
         }

        // 1st step is to access the doc that matches the code(4)
        const colRef = collection(db, "Servers");
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach(async doc => {
            if(doc.data().code == localStorage.getItem('code')){
                //gotten doc (     doc.id      )
                // 2nd step is to access sub collection with id of (1)
                var CurFactorCol = collection(db,'Servers/' + doc.id + '/'+ factor.children[0].innerText);
                // 3rd step is to add a new doc to that collection we accessed, with the data from (2) and (3)
                await addDoc(CurFactorCol, {
                    [localStorage.getItem('UserName')]: FactorVal
                   });

            }
        })
    

    })
    }  

     function DirectToSuccessPAge(){
        document.getElementById('ToSuccess').click()
    }
    SendToDB()
    DirectToSuccessPAge()
    
    
    //successfully loaded all results to server, then take user to home screen


}

export default SubmitAnswer