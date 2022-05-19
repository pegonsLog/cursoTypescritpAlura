export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(private seletor: string) {

        const elemento = document.querySelector(seletor);
        if(elemento){

            this.elemento = elemento as HTMLElement;
        }else{
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique no Desenvolvedor`);
        }
    }
    
    protected abstract template(model: T): string 
    
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}