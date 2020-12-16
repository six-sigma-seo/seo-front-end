import React from 'react';
import { Features, Text } from './styles';

function titulo ({data}) {
  return (
    <Features>
      <h2>Titulo de la página</h2>
      <Text>
        Se recomienda que la página tenga una sola etiqueta de titulo que de una idea completa del contenido. Detectamos que la página cuenta con {data.qtytitlepage}
        Por lo que {data.qtytitlepage === 1 ? 'todo está bien, sigue mejorando.' : 'te recomendamos corregir esto.'}
      </Text>
      <Text>
        A su vez se especifica que la longitud del contenido debe estar entre 50 y 60 caracteres, en tu página esta longitu es de {data.lenthtitlepage} por lo que {data.rigthdimensiontitlepage ? 'todo está en orden, sigue mejorando.' : 'deberas cambiar el contenido.'}
      </Text>
      <p>
        Tu pagina muestra con {data.titlepage} como titulo.
      </p>
    </Features>
  );
}

export default titulo;