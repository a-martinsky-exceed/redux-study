import React, { useState, useRef } from 'react';
import { connect } from 'react-redux'
import { removeArticle, updateArticle } from '../actions';
import useInput from '../hooks/useInput';

const ArticleComponent = (props) => {
  const { id, title, body } = props.article;
  const { number } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleKeyDown = (event, type) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];

    if (
      (type === "textarea" && keys.indexOf(key) > -1) ||
      (type !== "textarea" && allKeys.indexOf(key) > -1)
    ) {
      setIsEditing(false);
    }
  };

  const handleRemove = (id) => (props.removeArticle({id}));

  const [newTitle, titleInput] = useInput({type: 'input', className: 'textwrapper', defaultValue: title, inputType: 'text'});
  const [newBody, bodyInput] = useInput({type: 'textarea', className: 'textwrapper',  defaultValue: body});

  const titleReadRef = useRef(null),
        bodyReadRef = useRef(null);

  const titleHeight = titleReadRef.current?.clientHeight,
        bodyHeight = bodyReadRef.current?.clientHeight;

  if ((newTitle !== title) || (newBody !== body)) {
    const updates = {...props.article, title: newTitle, body: newBody}
    props.updateArticle({id, updates});
  }

  const articleTitle = (title, isEditing, number) => {
    return (
      <>
        {
          isEditing ? (
            <div
              onBlur={() => setIsEditing(false)}
              onKeyDown={e => handleKeyDown(e, 'input')}
            >
              <div className='flex-stretch' style={{height: `${titleHeight}px`}}>{titleInput}</div>
            </div>
          ) : (
            <div
              className='textwrapper'
              onClick={() => setIsEditing(true)}
            >
              <div ref={titleReadRef}>{`#${number} ${title}`}</div>
            </div>
          )
        }
      </>
    )
  }
  
  const articleBody = (body, isEditing) => {
    return (
      <>
        {
          isEditing ? (
            <div
              onBlur={() => setIsEditing(false)}
              onKeyDown={e => handleKeyDown(e, 'textarea')}
            >
              <div className='flex-stretch' style={{height: `${bodyHeight}px`}}>{bodyInput}</div>
            </div>
          ) : (
            <div
              className='textwrapper'
              onClick={() => setIsEditing(true)}
              ref={bodyReadRef}
            >
              <div>{body}</div>
            </div>
          )
        }
      </>
    )
  }
  
  return (
    <section className='card'>
      <div className='flex-card-container'>
        <button className='removeButton' onClick={(e)=>handleRemove(id)} >❌</button>
        {articleTitle(title, isEditing, number)}
        {articleBody(body, isEditing)}
      </div>
    </section>
  )
}

const mapDispatchToProps = ({ removeArticle, updateArticle });
const Article = connect(null, mapDispatchToProps)(ArticleComponent);

export default Article;