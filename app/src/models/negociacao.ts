export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        const numero = this.quantidade * this.valor;
        return numero;
    }
    public static CriaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {

        const exp = /-/g;
        const date = new Date(dataString.replace(exp, '/'));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(
            date, quantidade, valor
        );
    }
}