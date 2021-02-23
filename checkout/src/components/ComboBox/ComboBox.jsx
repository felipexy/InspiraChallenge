import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';

export default function ComboBox() {

  const packages = [];
  const dispatch = useDispatch();

  const populatePackages = () => {
    for (var i = 1; i <= 50; i++){
      packages.push({title: `${i * 100}`});
    }
  }
  populatePackages();
  

  const handleChange = (e) => {
    let selected = e.target.textContent;

    dispatch({ type: 'CHANGE_PRICE', package: selected }); 
  }


  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={packages}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pontos" variant="outlined" />}
        onChange={(event) => handleChange(event)}
      />
    </>
  );
}
