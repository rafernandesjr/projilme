import React from 'react';
import PageDefault from '../../components/PageDefault';
import Flappy from '../../components/Flappy';

function Page404(){
  return (
    <>
      <PageDefault>
        <div style={{ textAlign: "center"}}>
          <h1>Erro 404!</h1>
          <h4>Não foi possível encontrar sua página.</h4>

          <Flappy />
        </div>
      </PageDefault>
    </>
  )
}
  
export default Page404;