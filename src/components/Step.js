import React from "react";
import {useState} from 'react';

const Step = (props) => {
  return (
    <>
      <div className ={props.step.class} >{props.step.position}
      </div>
    </>
  )

}

export default Step
