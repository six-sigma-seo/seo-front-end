import React from 'react';
import { Features, Text } from './styles';

function meta ({data}) {
  return (
    <Features>
      <h2>Meta Información</h2>
      <Text>
        Se recomienda que nuestras páginas cuenten con etiquetas meta que le brinden información al nevegador del contenido que se encuentra en ellas.
      </Text>
      <Text>
        La longitud de la etiqueta meta description debe ser igual o menor de 155 caracteres, en tu página esta longitu es de {data.lenthmetadescription} por lo que {data.rigthdimensionmetadescription ? 'todo está en orden, sigue mejorando.' : 'deberas cambiar el contenido.'}
      </Text>
      <p>
        Tu pagina cuenta con {data.qtymetadescription} de estas estiquetas y el contenido que estas comunicando es: {data.metadescription} 
      </p>
    </Features>
  );
}

export default meta;