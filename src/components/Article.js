import React from 'react'
import { connect } from 'react-redux'
import { removeArticle, updateArticle } from '../actions';

const mapDispatchToProps = (dispatch) => (
  { 
    removeArticle: id => dispatch(removeArticle(id)),
    updateArticle: id => dispatch(updateArticle(id))
  }
)

const ArticleComponent = (props) => {
  console.log(props);
  const { id, title, body } = props.article;

  const handleRemove = (id) => (props.removeArticle({id}));

  const handleUpdate = (e, id) => {
    const updatedField = { [e.target.name]: window.prompt(), id}
    return props.removeArticle({updatedField, id})
  }

  return (
    <div>
      <strong style={{display: 'inline', margin: '10px'}} >{title}</strong>
      <button name='title' onClick={()=>handleUpdate(id)}> &#128394; </button>
      <button onClick={(e)=>handleRemove(e, id)} >❌</button>
      <p>
        {body}
        <button name='body' onClick={(e)=>handleUpdate(e, id)}>&#128394;</button>
      </p>
    </div>
  )
}

const Article = connect(null, mapDispatchToProps)(ArticleComponent)

export default Article;