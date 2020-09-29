import React from 'react'

const Article = ({text}) => {
  console.log(text, 'article');
  return <p>{text}</p>
}

export default Article;