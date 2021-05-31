import React from 'react';
import {useState, useEffect } from 'react';
import '../styles/card.css';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

const {Handle} = Slider;

const handle = props => {
  const {...restProps} = props
  return (
    <>
      <Handle
        {...restProps}
        style= {{backgroundColor: "hsl(174, 86%, 45%)", height: "2.5rem", width: '2.5rem', border:'none'}}
      />
    </>
  );
}


export default function Card() {
  const [value, setValue] = useState('10K')
  const [price, setPrice] = useState(8)
  const [sliderPos, setSliderPos] = useState(0)
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    ChangeHandler(sliderPos)
  })

  function ChangeValue(amount) {
    if(amount <= 25) {
      return (setValue('10K'), setPrice(8.00))
    }
    if(amount < 50) {
      return (setValue('50K'), setPrice(12.00))
    } 
    if(amount < 75) {
      return (setValue('100K'), setPrice(16.00))
    }
    if(amount < 100) {
      return (setValue('500K'), setPrice(24.00)) 
    }
    return (setValue('1M'), setPrice(36.00))
  }

  function ChangeValueDiscount(amount) {
    if(amount <= 25) {
      return (setValue('10K'), setPrice(8.00 * 0.75))
    }
    if(amount < 50) {
      return (setValue('50K'), setPrice(12.00 * 0.75))
    } 
    if(amount < 75) {
      return (setValue('100K'), setPrice(16.00 * 0.75))
    }
    if(amount < 100) {
      return (setValue('500K'), setPrice(24.00 * 0.75)) 
    }
    return (setValue('1M'), setPrice(36.00 * 0.75))
  }

  function ChangeHandler(amount) {
    checked === 0 ? ChangeValue(amount) : ChangeValueDiscount(amount)
  }

  function check() {
    checked === 0 ? setChecked(1) : setChecked(0)
  }

  return(
    <div className="card">
      <div className="pricing">
        <p className="accessInfo">{value} PAGEVIEWS</p>
        <h3 className="price">${String(price)}.00</h3>
        <div className="slider-container">
          <Slider
          min={0}
          max={100}
          onChange={(amount) => {return (setSliderPos(amount), ChangeHandler(amount))}}
          trackStyle={{ backgroundColor: 'hsl(174, 77%, 80%)', height: '.5rem'}}
          railStyle={{ backgroundColor: 'hsl(224, 65%, 95%)', height: '.5rem'}}
          handle={handle}
          />
        </div>
        <div className="discount">
          <p>Monthly Billing</p>
          <label className="toggle">
            <input type="checkbox"  className="discount-input" onClick={check}/>
            <span className="slider"></span>
          </label>
          <p>Yearly Billing</p>
        </div>
      </div>
      <div className="info">
        <ul className="checklist">
          <li>Unlimited websites</li>
          <li>100% date ownership</li>
          <li>Email reports</li>
        </ul>
        <button>Start my trial</button>
      </div>
    </div>
  );
}


