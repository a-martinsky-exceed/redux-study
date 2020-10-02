import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Article from './Article';
import { fetchPosts } from '../actions/';

const ConnectedList = (props) => {

  useEffect(() => {
    props.fetchPosts();
  }, [])

  const {articles} = props;

  let paginated = [];
  
  for (let i = 0; i <= articles.length; i+=12) {
    paginated = [...paginated, articles.slice(i, i+=12)]
  }

  const [Chunk, setChunk] = useState(0);

  return (
    <>
      <div className='flex-articles-center'>
        { 
          paginated[Chunk].map((article, index) => {
            const { id } = article;
            return <Article key={id} number={index+1} article={article} />
          })
        }
      </div>
      <ul className='pageList'>
        {
          paginated.map((_, index) => {
            return <li class='pageButton'>{index+1}</li>
          })
        }
      </ul>
    </>
  )
}

const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps =({fetchPosts})
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)
export default List;