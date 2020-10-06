import React, { useState } from 'react';
import { connect } from 'react-redux';
import create from "../actions/addArticle";
import fetchLocal from '../actions/fetchLocal';
import Input from './Input';

const CreateArticleComponent = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [Validate, setValidate] = useState(true)
 
  const handleSubmit = () => {
    if ([title, body].every(item => item)) {
      const newArticle = { title, body };
      setTitle('');
      setBody('');
      props.create(newArticle);
    } else {
      setValidate(false);
    }
  }

  return (
    <div className='create-article'>
      <Input
        type='text'
        value={title}
        className='article-input'
        onChange={e=>{
          setTitle(e.currentTarget.value)
          setValidate(true)
        }}
        placeholder={'type article title here'}
      />
      <br />
      <textarea
        value={body}
        className='article-textarea'
        onChange={e=>{
          setBody(e.currentTarget.value)
          setValidate(true)
        }}
        placeholder={'type article body here'}
      />
      <br />
      <button onClick={()=>handleSubmit()}>Add</button>
      <button onClick={()=>props.fetchLocal()}>Fetch test data to local store</button>
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
    </div>
  )
};

const mapDispatchToProps = ({ create, fetchLocal });
const CreateArticle = connect(null, mapDispatchToProps)(CreateArticleComponent);

export default CreateArticle;