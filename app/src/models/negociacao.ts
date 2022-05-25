import { Modelo } from '../interfaces/modelo.js';
export class Negociacao implements Modelo<Negociacao>{

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

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }

    get volume(): number {
        const numero = this.quantidade * this.valor;
        return numero;
    }
  
}