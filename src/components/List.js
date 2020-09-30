import React from 'react'
import { connect } from 'react-redux';
import Article from './Article';

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
}

const ConndectedList = ({ articles }) => (
  articles.map(article => {
    const { id } = article;
    return <Article key={id} article={article} />
  })
)

const List = connect(mapStateToProps)(ConndectedList)
export default List;