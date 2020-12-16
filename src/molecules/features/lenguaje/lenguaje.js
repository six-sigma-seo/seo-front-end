import React from 'react';
import { Features, Text } from '../styles';

export const lenguaje = ({data}) => {
  return (
    <Features>
      <h2>Declaración de lenguaje</h2>
      <Text>
        Es importante que nuestra página especifique el idioma del contendio por medio de una etiqueta {'<html lang=eng></html>'}
      </Text>
      <p>La detección de lenguaje indica que el contenido está en: {data.language_tag}</p>
    </Features>
  );
}