import React from 'react';
import './Steps.css';

export default function Steps() {
  return (
    <div className='steps'>
        <div className='step'>
            <p className='step-num'>1</p>
            <div className='step-description'>
                <p>STEP 1</p>
                <p>YOUR INFO</p>
            </div>
        </div>
        <div className='step active'>
            <p className='step-num'>2</p>
            <div className='step-description'>
                <p>STEP 2</p>
                <p>SELECT PLAN</p>
            </div>
        </div>
        <div className='step'>
            <p className='step-num'>3</p>
            <div className='step-description'>
                <p>STEP 3</p>
                <p>ADD-ONS</p>
            </div>
        </div>
        <div className='step'>
            <p className='step-num'>4</p>
            <div className='step-description'>
                <p>STEP 4</p>
                <p>SUMMARY</p>
            </div>
        </div>
    </div>
  )
}
