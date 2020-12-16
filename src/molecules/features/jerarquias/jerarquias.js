import React from 'react';
import { Features, Graficas, Text } from '../styles';
import { Bar } from 'react-chartjs-2';

function jerarquias ({data}) {
  const graph = {
    datasets: [{
      data: [data.qtyh1title],
      backgroundColor: ['rgba(255,209,102,1)'],
      label: 'Numero de etiquetas de titulo'
    }],
    labels: [
        'h1',
    ]
  }

  return (
    <Features>
      <h2>Jerarquias Teaxtuales</h2>
      <Text>
        Las jerarquias textuales nos sirven para priorizar el contendio de un sitio web, es por eso que se recomienda el uso subordinado de las etiquetas de titulo
        En donde solo debe haber 1 h1 por página, en tu caso se ceunta con {data.qtyh1title} de estas etiquetas {data.qtyh1title > 1 ? 'por lo que te sugerimos cambiar esto.' : 'todo en orden.'}
      </Text>
      <Graficas>
        <Bar data={graph} />
      </Graficas>
      <p>La idea princpal que transmite tu página es: {data.h1title}</p>
    </Features>
  );
}

export default jerarquias;