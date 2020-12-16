import React from 'react';
import { Features, Text, Lista } from '../styles';

export const Arial = ({ data }) => {
  function listar() {
    data.buttons_without_arial_tags.forEach((boton) => <li>{boton}</li>);
  }

  return (
    <Features>
      <h2>Etiquetas arial</h2>
      <Text>
        Las etiquetas arial nos ayudan a expresar cadenas en elemntos del
        código, puntualmente estamos revisando que los botones cuenten con estas
        etiquetas. De esta manera el robot de google sabrá más infomación acerca
        de que hace ese boton.
      </Text>
      {data.buttons_without_arial_tags ? (
        <Graficas>
          <Text>Los botones que encontramos con esta carencia son:</Text>
          <Lista>{listar()}</Lista>
        </Graficas>
      ) : (
        <p>Todos tus botones cuentan con etiquetas arial.</p>
      )}
    </Features>
  );
};
