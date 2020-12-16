import React from 'react';
import { Features, Graficas, Text } from '../styles';
import { Doughnut, Bar } from 'react-chartjs-2';

export const Alternativas = ({ ...data }) => {
  const graph = {
    datasets: [
      {
        data: [
          data.percentajeemptyaltinimg,
          100 - data.percentajeemptyaltinimg,
        ],
        backgroundColor: ['rgba(86,71,135,1)', 'rgba(255,255,255,1)'],
      },
    ],
    labels: ['Porcentaje de imagenes que no cumple la condición'],
  };

  const graph2 = {
    datasets: [
      {
        data: [data.qtyimgwithaltempty, data.qtyimgwithoutalt],
        backgroundColor: ['rgba(132,210,246,1)', 'rgba(239,71,111,1)'],
        label: 'Numero de imagenes que no cumplen la condición',
      },
    ],
    labels: ['Imagenes sin etiqueta alt', 'Imagnes con alt vacio'],
  };

  return (
    <Features>
      <h2>Alternativas Teaxtuales</h2>
      <Text>
        Es recomendable que los elementos visuales de nuestras páginas utilcen
        alternativas textuales que facilitan la accesivilidad para programas
        lectores o robots.
      </Text>
      <Graficas>
        <Doughnut data={graph} />
        <Bar data={graph2} />
      </Graficas>
      <p>De un total de {data.totalimg} imagenes</p>
    </Features>
  );
};
