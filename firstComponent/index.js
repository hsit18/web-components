class FirstComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h2>${this.innerText}</h2>`;
  }
}

customElements.define("first-component", FirstComponent);
