import React, { useState } from 'react';
import styles from '../styles.module.css';

function Form(){
    const [postData, setPostData] = useState({
        title: "",
        price: "",
        description: "", 
        //profile to create later
        time: "",
        theme: "",
        numPieces: "",
        condition: "",
        setNum: "",
        pictures: []
  });
}