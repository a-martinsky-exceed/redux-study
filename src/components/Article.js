import React, { useState, useRef } from 'react';
import { connect } from 'react-redux'
import remove from '../actions/removeArticle';
import update from '../actions/updateArticle'
import Input from './Input';

const ArticleComponent = (props) => {
  const { _id, title, body } = props.article;
  const { number } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setnewTitle] = useState(title);
  const [newBody, setnewBody] = useState(body);

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

  const handleUpdate = () => {
    setIsEditing(false)
    if ((newTitle !== title) || (newBody !== body)) {
      const updates = {...props.article, title: newTitle, body: newBody}
      props.update(_id, updates);  
    }
  }

  const handleRemove = (_id) => (props.remove(_id));

  const bodyReadRef = useRef(null);

  const bodyHeight = bodyReadRef.current?.clientHeight;

  const articleTitle = (title, isEditing, number) => {
    return (
      <>
        {
          isEditing ? (
            <div
              onBlur={() => handleUpdate()}
              onKeyDown={e => handleKeyDown(e, 'input')}
            >
              <div className='flex-stretch'>
                <Input
                  type='text'
                  value={newTitle}
                  className='textwrapper'
                  onChange={e=>setnewTitle(e.currentTarget.value)}
                />
              </div>
            </div>
          ) : (
            <div
              className='textwrapper'
              onClick={()=>setIsEditing(true)}
            >
              <>{`#${number} ${title}`}</>
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
              onBlur={() => handleUpdate()}
              onKeyDown={e => handleKeyDown(e, 'textarea')}
            >
              <div className='flex-stretch' style={{height: `${bodyHeight}px`}}>
                <textarea
                  value={newBody}
                  className='textwrapper'
                  onChange={e=>setnewBody(e.currentTarget.value)}
                />
              </div>
            </div>
          ) : (
            <div
              className='textwrapper'
              onClick={() => setIsEditing(true)}
              ref={bodyReadRef}
            >
              {body}
            </div>
          )
        }
      </>
    )
  }
  
  return (
    <section className='card'>
      <div className='flex-card-container'>
        <button className='removeButton' onClick={(e)=>handleRemove(_id)} ><span role='img' aria-label='remove'>❌</span></button>
        {articleTitle(title, isEditing, number)}
        {articleBody(body, isEditing)}
      </div>
    </section>
  )
}

const mapDispatchToProps = ({ remove, update });
const Article = connect(null, mapDispatchToProps)(ArticleComponent);

export default Article;