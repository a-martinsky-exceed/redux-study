import React from 'react'
import { connect } from 'react-redux';
import Article from './Article';

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
}

const ConndectedList = ({ articles }) => (
  articles.map(text => {
    return <Article key={Date.now()} text={text} />
  })
)

const List = connect(mapStateToProps)(ConndectedList)
export default List;