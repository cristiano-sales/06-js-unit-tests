const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('a', 'b'))).toEqual(true); //expect(typeof productDetails('alcool', 'mascara')).toEqual('object'); //prova que é um array?
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('a', 'b')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof (productDetails('a', 'b')[0], productDetails('a', 'b')[1])).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('a', 'b')[0]).not.toEqual(productDetails('a', 'b')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('a', 'b')[0].details.productId.slice(-3) === '123' && productDetails('a', 'b')[1].details.productId.slice(-3) === '123').toBeTruthy()
  });
});
