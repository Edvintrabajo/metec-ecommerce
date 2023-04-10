import React from 'react'
import { useContext } from "react";
import { Context } from '../context/Context';

function FiltredProducts() {
    const { saveData, setSaveData } = useContext(Context);
    console.log(saveData);
  return (
    <>
        <h1>Products Filtred</h1>
    </>
  )
}

export default FiltredProducts