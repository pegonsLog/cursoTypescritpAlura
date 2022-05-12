export class NegociacoesView{

    private elemento: HTMLDivElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    template(): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                <!-- aqui vai o loop -->
            </tbody>
        </table>
        `;
    }

    update(): void {
        this.elemento.innerHTML = this.template();
    }
}