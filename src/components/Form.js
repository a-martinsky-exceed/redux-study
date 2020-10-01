import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from "../actions/";

const mapDispatchToProps = (dispatch) => ({ addArticle: article => dispatch(addArticle(article)) });

const FormComponent = (props) => {
  const useInput = ({type, className, inputType})  => {
    const [value, setValue] = useState('');
    if (type === 'input') {
      const input = 
        <input 
          value={value} 
          onChange={e => setValue(e.target.value)} 
          type={type}
          className={className}
        />;
      return [value, input];
    }
    if (type === 'textarea') {
      const textarea = 
        <textarea 
          value={value} 
          onChange={e => setValue(e.target.value)} 
          type={type}
          className={className}
        />;
      return [value, textarea];
    }
    return [];
  }

  const [title, titleInput] = useInput({type: 'input', className: 'article-input',inputType: 'text'});
  const [body, bodyInput] = useInput({type: 'textarea', className: 'article-textarea'});

  const handleSubmit = () => {
    const id = Math.random();
    const newArticle = { id, title, body };
    props.addArticle(newArticle);
  }

  return (
    <>
      {titleInput}<br />
      {bodyInput} <br />
      <button onClick={()=>handleSubmit()}>Add</button>
    </>
  )
};

const Form = connect(null, mapDispatchToProps)(FormComponent);
export default Form;