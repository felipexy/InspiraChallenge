import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

const CustomSlider = withStyles({
  root: {
    color: '#4076FA',
    height: 8,
  },
})(Slider);

const marks = [
  {
    value: 1000,
    label: '1000',
  },
  {
    value: 2000,
    label: '2000 - 5% OFF',
  },
  {
    value: 3000,
    label: '3000 - 10% OFF',
  },
  {
    value: 4000,
    label: '4000 - 15% OFF',
  },
  {
    value: 5000,
    label: '5000 - 20% OFF',
  }
];

export default function SliderPrices() {

  const packages = [];
  const dispatch = useDispatch();
  const classes = useStyles();
  const populatePackages = () => {
    for (var i = 1; i <= 50; i++) {
      packages.push({ title: `${i * 100}` });
    }
  }
  populatePackages();

  const handleChange = (e) => {
    let selected = e.target.innerText;
    if(selected.length <= 5){
      dispatch({ type: 'CHANGE_PRICE', package: selected });
    } else {
      let input = selected.split('\n');
      dispatch({ type: 'CHANGE_PRICE', package: input[input.length-1] });
    }
  }

  return (
    <div className={classes.root}>
      <CustomSlider
        orientation="vertical"
        defaultValue={2000}
        aria-labelledby="vertical-slider"
        onChange={(event) => handleChange(event)}
        valueLabelDisplay="on"
        min={100}
        max={5000}
        step={100}
        marks={marks}
      />
    </div>
  );
}
