import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Article from './Article';
import fetchPosts from '../actions/fetchAll';
import CreateArticle from './CreateArticle';

const List = (props) => {

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
    <div className='content'>
      <CreateArticle />
      <div className='flex-articles-center'>
        { 
          articles.length 
            ?
            paginated[Chunk].map((article, index) => {
              return <Article key={ article._id } number={index+1} article={article} />
            })
            :
            <p>There are no articles yet.</p>
        }
      </div>
    </div>

    {paginated.length > 1 && 
      <div className='footer'>
      <ul className='pageList'>
        {
          paginated.map((_, index) => {
            let active = ''
            if (index === Chunk) {
              active = 'active';
            }
            return <li className={active} value={index} onClick={e=>setChunk(+e.currentTarget.value)} key={index}><button>{index+1}</button></li>
          })
        }
      </ul>
    </div>
    }
    </>
  )
}

const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps =({fetchPosts})
const Content = connect(mapStateToProps, mapDispatchToProps)(List)
export default Content;