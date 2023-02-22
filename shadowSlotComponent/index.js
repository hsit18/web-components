const template = document.createElement("template");
template.innerHTML = `
    <style> 
        label {
            display: block;
        } 
        .desc {
          color: #777;
          font-size: .65rem;
        }
    </style> 
    <label>
        <input type="checkbox" />
        <slot></slot>
        <span class="desc"><slot name="description"></slot></span>
    </label>
`;
class ShadowSlotComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); // closed: outside styles not applicable
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("shadow-slot-component", ShadowSlotComponent);
