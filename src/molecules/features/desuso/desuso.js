import React from 'react';
import { Features, Text } from '../styles';

export const Desuso = ({ ...data }) => {
  function listarKeywords() {
    data.keywords.forEach((keyword) => <li>{keyword}</li>);
  }

  return (
    <Features>
      <h2>Etiquetas en desuso</h2>
      <Text>
        A lo largo de las versiónes de HTML han cambiado las etiquetas que
        componen al lenguaje y en la actualidad hay ciertas que se consideran en
        desuso, por lo que supone una buena practica sustituirlas
      </Text>
      {data.qtymeta_keywords > 0 ? (
        <Graficas>
          <Text>
            La etiqueta meta keywords representa una etiqueta en desuso y se
            encuentra {data.qtymeta_keywords} en tu código, de la forma:
          </Text>
          <ul>{listarKeywords()}</ul>
        </Graficas>
      ) : (
        <p>Tu página no tiene etiquetas en desuso.</p>
      )}
    </Features>
  );
};
