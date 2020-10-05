import React, { useState } from 'react';
import { connect } from 'react-redux';
import create from "../actions/addArticle";
import useInput from '../hooks/useInput';

const CreateArticleComponent = (props) => {
  const [title, titleInput] = useInput({type: 'input', className: 'article-input', inputType: 'text', placeholder: 'type article title here'});
  const [body, bodyInput] = useInput({type: 'textarea', className: 'article-textarea', placeholder: 'type article text here'});
  const [Validate, setValidate] = useState(true)
  const handleSubmit = () => {
    const id = Math.random();
    if ([title, body].every(item => item)) {
      const newArticle = { id, title, body };
      props.addArticle(newArticle);  
    } else {
      setValidate(false);
    }
  }

  return (
    <>
      {titleInput}<br />
      {bodyInput} <br />
      <button onClick={()=>handleSubmit()}>Add</button>
      {
        !Validate && 
          <>
            <br />
            <div className='warning'>
              <button onClick={()=>setValidate(true)}>x</button>
              <span>title or body of article is empty!</span>
              </div>
          </>
      }
    </>
  )
};

const mapDispatchToProps = (dispatch) => ({ addArticle: article => dispatch(create(article)) });
const CreateArticle = connect(null, mapDispatchToProps)(CreateArticleComponent);

export default CreateArticle;