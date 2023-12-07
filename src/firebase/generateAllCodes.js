import React from "react";
import { txtDB } from "../firebase/firebaseConfig";
import { ref } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";


const storeCode = async () => {

    const valRef = collection(txtDB, 'AvailableCodes')
    for(let i = 1000 ; i < 10000; i++){
       addDoc(valRef, {GameCode: i})
        
    }
    
    //await addDoc(valRef, {txtVal: "test", textVal2: "test2", textVal3: "test3", textVal4: "test4"})
    alert('test')
}
export default storeCode