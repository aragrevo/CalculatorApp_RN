/* eslint-disable prettier/prettier */
import {useRef, useState} from 'react';
import {optionsRow} from '../helpers/options';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [beforeNumber, setBeforeNumber] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setCurrentNumber('0');
    setBeforeNumber('0');
  };

  const setNumber = (textNumber: string) => {
    // No aceptar doble punto
    // eslint-disable-next-line curly
    if (currentNumber.includes('.') && textNumber === '.') return;

    if (currentNumber.startsWith('0') || currentNumber.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        setCurrentNumber(currentNumber + textNumber);

        // Evaluar si es otro cero, y hay un punto
      } else if (textNumber === '0' && currentNumber.includes('.')) {
        setCurrentNumber(currentNumber + textNumber);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (textNumber !== '0' && !currentNumber.includes('.')) {
        setCurrentNumber(textNumber);

        // Evitar 0000.0
      } else if (textNumber === '0' && !currentNumber.includes('.')) {
        setCurrentNumber(currentNumber);
      } else {
        setCurrentNumber(currentNumber + textNumber);
      }
    } else {
      setCurrentNumber(currentNumber + textNumber);
    }
  };

  const sign = () => {
    if (currentNumber.includes('-')) {
      setCurrentNumber(currentNumber.replace('-', ''));
    } else {
      setCurrentNumber('-' + currentNumber);
    }
  };

  const deleteAction = () => {
    let negative = '';
    let numeroTemp = currentNumber;
    if (currentNumber.includes('-')) {
      negative = '-';
      numeroTemp = currentNumber.substr(1);
    }

    if (numeroTemp.length > 1) {
      setCurrentNumber(negative + numeroTemp.slice(0, -1));
    } else {
      setCurrentNumber('0');
    }
  };

  const switchNumber = () => {
    if (currentNumber.endsWith('.')) {
      setBeforeNumber(currentNumber.slice(0, -1));
    } else {
      setBeforeNumber(currentNumber);
    }
    setCurrentNumber('0');
  };

  const divide = () => {
    switchNumber();
    lastOperation.current = Operators.divide;
  };

  const multiply = () => {
    switchNumber();
    lastOperation.current = Operators.multiply;
  };

  const subtract = () => {
    switchNumber();
    lastOperation.current = Operators.subtract;
  };

  const add = () => {
    switchNumber();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(currentNumber);
    const num2 = Number(beforeNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setCurrentNumber(`${num1 + num2}`);
        break;

      case Operators.subtract:
        setCurrentNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setCurrentNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setCurrentNumber(`${num2 / num1}`);
        break;
    }

    setBeforeNumber('0');
  };

  const options: optionsRow[] = [
    {
      buttons: [
        {
          text: 'C',
          color: '#9B9B9B',
          action: clean,
        },
        {
          text: '+/-',
          color: '#9B9B9B',
          action: sign,
        },
        {
          text: 'del',
          color: '#9B9B9B',
          action: deleteAction,
        },
        {
          text: '/',
          color: '#FF9427',
          action: divide,
        },
      ],
    },
    {
      buttons: [
        {
          text: '7',
          action: setNumber,
        },
        {
          text: '8',
          action: setNumber,
        },
        {
          text: '9',
          action: setNumber,
        },
        {
          text: 'x',
          color: '#FF9427',
          action: multiply,
        },
      ],
    },
    {
      buttons: [
        {
          text: '4',
          action: setNumber,
        },
        {
          text: '5',
          action: setNumber,
        },
        {
          text: '6',
          action: setNumber,
        },
        {
          text: '-',
          color: '#FF9427',
          action: subtract,
        },
      ],
    },
    {
      buttons: [
        {
          text: '1',
          action: setNumber,
        },
        {
          text: '2',
          action: setNumber,
        },
        {
          text: '3',
          action: setNumber,
        },
        {
          text: '+',
          color: '#FF9427',
          action: add,
        },
      ],
    },
    {
      buttons: [
        {
          text: '0',
          action: setNumber,
          weight: true,
        },
        {
          text: '.',
          action: setNumber,
        },
        {
          text: '=',
          color: '#FF9427',
          action: calculate,
        },
      ],
    },
  ];

  return {
    beforeNumber,
    currentNumber,
    options,
  };
};
