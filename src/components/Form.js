import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from "../actions/";
import useInput from '../hooks/useInput';

const FormComponent = (props) => {
  const [title, titleInput] = useInput({type: 'input', className: 'article-input', inputType: 'text'});
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

const mapDispatchToProps = (dispatch) => ({ addArticle: article => dispatch(addArticle(article)) });
const Form = connect(null, mapDispatchToProps)(FormComponent);

export default Form;