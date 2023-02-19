const template = document.createElement("template");
template.innerHTML = `
    <style> 
        h2 {
            color: green
        } 
    </style> 
    <h2>
        <slot></slot>
    </h2>
`;
class ShadowComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); // closed: outside styles not applicable
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("shadow-component", ShadowComponent);
