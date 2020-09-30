import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from "../actions";

const mapDispatchToProps = (dispatch) => ({ addArticle: article => dispatch(addArticle(article)) });

const FormComponent = (props) => {
  const useInput = ({ type })  => {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
  }

  const [title, titleInput] = useInput({type: 'text'});
  const [body, bodyInput] = useInput({type: 'text'});

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