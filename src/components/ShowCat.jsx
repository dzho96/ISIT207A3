import "./showcatstyles.css";

import React,  { useState, useEffect } from 'react';
import axios from 'axios';

const Resource  = ( { path,  render  }    ) => {

    const initialState = {
        trans:[],
        loading: true,
        error: null
    }

    const [ state, setState ] = useState( initialState );

    const getData = async ( ) => {

        try {

            const result = await axios.get( path );

            console.log(' result ', result );

            const newData = {
                trans: result.data,
                loading: false,
                error:null
            }

            setState( newData );
           
        } catch (error) {
           
            console.log('error in get data', error.message)
        }


    }  


    useEffect( () => {  

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <div  className='showlist'>
           

          {   render( state )  }

        </div>
    )
}





const ShowCat = () => {

  const webURL = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC'

  const render = ( data ) => {

      if ( data.loading === true ) return <p>loading ...</p>

      console.log('Got the data', data );

   return (    data.trans.map( cat => (

          <div key={cat.id} >

              <img className='image' src= { cat.url } alt='cat img' />

          </div>
        )
   )

   )
  }



  return (
      <div>

          <Resource path={ webURL  } render={ render } />

      </div>
  )
}

export default ShowCat;