"use client";

import { TypeAnimation } from 'react-type-animation';

const TypeWriter = ({words}: {words:string[]}) => {
  let sequence: (string | number)[] = [];
  words.map((text) => {
    sequence.push(text);
    sequence.push(1000);
  })
  return (
    <TypeAnimation 
      className='text-[#935e38]'
      sequence={sequence} 
      wrapper='span'
      repeat={Infinity}
      speed={{type: 'keyStrokeDelayInMs', value: 100}}
    />
  )
}

export default TypeWriter;