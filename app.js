/*
Crie uma classe contendo 3 propriedades com seus respectivos gets e sets e um método que multiplique as 3 retornando o produto. 
Deixe um exemplo de utilização da sua classe no final do código.
*/

class Cubo {
    constructor(altura, lagura, comprimento) {
        this._altura = altura;
        this._lagura = lagura;
        this._comprimento = comprimento;
    }

    get altura() {
        return this._altura;
    }

    get lagura() {
        return this._lagura;
    }

    get comprimento() {
        return this._comprimento;
    }

    set altura(novaAltura) {
        this._altura = novaAltura;
    }

    set lagura(novaLagura) {
        this._lagura = novaLagura;
    }

    set comprimento(novoComprimento) {
        this._comprimento = novoComprimento;
    }


}


let geometrico = new Cubo();


geometrico.altura = 2;
geometrico.lagura = 10;
geometrico.comprimento = 3;

console.log(geometrico.altura * geometrico.lagura * geometrico.comprimento);
