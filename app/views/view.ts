export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(private seletor: string) {
        this.elemento = document.querySelector(this.seletor);
    }

    
    abstract template(model: T): string 
    
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}