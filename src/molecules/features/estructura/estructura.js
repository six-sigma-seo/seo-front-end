import React from 'react';
import { Features, Text } from '../styles';

export const Estructura = ({ data }) => {
  return (
    <Features>
      <h2>Estructura Semantica</h2>
      <Text>
        Es recomendable seguir cieta estructura semantica en nuestro código,
        dentro del cual deberiamos incluir estiquetas header y footer En la
        página {data.footer ? 'existe' : 'no hay'} una etiqueta footer,{' '}
        {data.header ? 'existe' : 'no hay'} una etiqueta header por lo que{' '}
        {data.header && data.footer
          ? 'todo está bien, sigue mejorando.'
          : 'te recomendamos corregir esto.'}
      </Text>
      <p>
        {data.title_duplicated ? 'También dectamos titulos duplicados' : ''}
      </p>
    </Features>
  );
};
