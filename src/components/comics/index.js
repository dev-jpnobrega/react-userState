import React, { useState, useEffect } from 'react';
import MarvelAPI from '../../services/marvel-api';

import ComicsTableComponent from '../comics-table';
import LoadingComponent from '../loading';

const userFetch = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
      const result = await new MarvelAPI().getAllComics({ limit: 50 });
      setData(result)
      setLoading(false);
    }, []);

    return { data, loading };
}

const ComicsComponent = (props) => {
  const { data, loading } = userFetch(props);

  return (
    <div>
      <h1>Comics</h1>
      { loading ? (
        <LoadingComponent />
      ) : (
        <ComicsTableComponent data={ data } />
      )}   
    </div> 
  )
}

export default ComicsComponent;