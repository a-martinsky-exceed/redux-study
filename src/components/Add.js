import React, { useState } from 'react';
import { addArticle } from "../actions";

const Add = () => {
  const [ArticleName, setArticleName] = useState('');
  return (
    <>
      <input placeholder='type text here' value={ArticleName} onChange={(e) => setArticleName(e.target.value)} />
      <button onClick={addArticle}>Add an article</button>
    </>
  )
}

export default Add;