import React from 'react';
import { connect } from 'react-redux'
import { removeArticle, updateArticle } from '../actions';

class ArticleComponent extends React.Component {
  state = {
    articleTitle: '',
    articleBody: '',
    titleChanged: false,
    bodyChanged: false,
    disableTitle: true,
    disableBody: true
  }

  handleInput = (event) => {
    const { currentTarget } = event;
    this.setState(
      { 
        [`article${currentTarget.name}`]: currentTarget.value,
        [`${currentTarget.name.toLowerCase()}Changed`]: true
      }
    );
  }

  invertDisable = (event) => {
    const { currentTarget } = event;
    this.setState(prevState => {
      return {
        ...prevState,
        [`disable${currentTarget.name}`]: !prevState[`disable${currentTarget.name}`]
      }
    })
  }

  handleRemove = (id) => (this.props.removeArticle({id}));

  update = (event, id) => {
    const { currentTarget } = event;
    const updatedField = {
      name: currentTarget.name.toLowerCase(),
      value: currentTarget.value
    }
    this.invertDisable(event);
    return this.props.updateArticle({id, updatedField})
  }

  render() {
    const { id, title, body } = this.props.article;
    const { articleTitle, articleBody, titleChanged, bodyChanged, disableTitle, disableBody } = this.state;
    return (
      <div className='article-container'>
      <div>
        <input 
          type='text' 
          name='Title' 
          value={titleChanged ? articleTitle : title} 
          onChange={(e)=>this.handleInput(e)} 
          disabled={disableTitle} 
          onBlur={(e)=>this.update(e, id)}
        />
        <button name='Title' onClick={(e)=>this.invertDisable(e)} > &#128394; </button>
        <br/>
          <input 
            type='text' 
            name='Body' 
            value={bodyChanged ? articleBody : body} 
            onChange={(e)=>this.handleInput(e)} 
            disabled={disableBody} 
            onBlur={(e)=>this.update(e, id)}
          />
          <button name='Body' onClick={(e)=>this.invertDisable(e)} >&#128394;</button>
      </div>
        <button onClick={(e)=>this.handleRemove(id)} >❌</button>
    </div>
    )
  }
}

const mapDispatchToProps = ({ removeArticle, updateArticle });
const Article = connect(null, mapDispatchToProps)(ArticleComponent);

export default Article;