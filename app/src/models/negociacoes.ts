import { Negociacao } from "./negociacao.js";
import { Imprimivel } from '../utils/imprimivel.js';

export class Negociacoes implements Imprimivel {

    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    public paraTexto(): string {
      return JSON.stringify(this.negociacoes, null, 2);
    }
}