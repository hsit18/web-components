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
class ShadowObserverComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); // closed: outside styles not applicable
    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  connectedCallback() {
    console.log("connected");
  }

  disConnectedCallback() {
    console.log("disconnected");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name === "checked") {
      this.updateCheckbox(newValue);
    }
  }

  updateCheckbox(value) {
    this.checkbox.checked = value != null && value !== "false" ? true : false;
  }
}

customElements.define("shadow-observer-component", ShadowObserverComponent);

// dummy code to change web component attr value
const item = document.querySelectorAll("shadow-observer-component")[1];
item.setAttribute("checked", false);