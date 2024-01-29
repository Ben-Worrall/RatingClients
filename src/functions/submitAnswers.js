
import { useNavigate } from 'react-router-dom';

import React from 'react';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, deleteDoc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react';
import { useRef } from 'react';
const db = getFirestore()


const SubmitAnswer = () =>{  
   //console.log('test')
   
}

export default SubmitAnswer