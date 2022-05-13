export class View {
    constructor(seletor) {
        this.seletor = seletor;
        this.elemento = document.querySelector(this.seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
