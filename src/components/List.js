import React from 'react'
import { connect } from 'react-redux';
import Article from './Article';
import { fetchAll } from '../requests'
import { setInitial, fetchSuccess, fetchFailed } from '../actions/';

class ConnectedList extends React.Component {
  state = {
    posts: this.props.articles
  }
  async componentDidMount() {
    const res = await fetchAll()
    const {data} = res;
    this.props.setInitial(data)
  }
  render() {
    return (
      this.props.articles.map(article => {
        const { id } = article;
        return <Article key={id} article={article} />
      })
    )
  }
}

const mapStateToProps = (state) => ({ articles: state.articles })
const mapDispatchToProps =({setInitial})
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)
export default List;