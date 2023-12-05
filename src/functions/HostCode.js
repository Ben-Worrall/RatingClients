import React from "react";
import { txtDB } from "../firebase/firebaseConfig";
import { collection, Firestore, getDocs, getFirestore, Query, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore'

const db = getFirestore()


const getRandomCode = async () => {
    const ARcodes = []
    const querySnapshot = await getDocs(collection(db, "AvailableCodes"));
     querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      ARcodes.push(doc.data());
    });
    const finalCode = await ARcodes[1]
    console.log(finalCode)
    
  





}
export default getRandomCode



