import { Imprimivel } from '../utils/imprimivel.js';

export class Negociacao implements Imprimivel {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    public static CriaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {

        const exp = /-/g;
        const date = new Date(dataString.replace(exp, '/'));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(
            date, quantidade, valor
        );
    }

    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    
    public paraTexto(): string {
     return (`
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}`);

    }

    get volume(): number {
        const numero = this.quantidade * this.valor;
        return numero;
    }
  
}