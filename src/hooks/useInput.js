import React, { useState } from 'react';

const useInput = ({type, className, defaultValue, inputType})  => {
  const defVal = typeof defaultValue == undefined ? defaultValue = '' : defaultValue;
  const [value, setValue] = useState(defVal);
  if (type === 'input') {
    const input = 
      <input 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        type={inputType}
        className={className}
      />;
    return [value, input];
  }
  if (type === 'textarea') {
    const textarea = 
      <textarea 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        className={className}
      />;
    return [value, textarea];
  }
  return [];
}

export default useInput;