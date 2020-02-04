export class AppdCardHeader extends HTMLElement {
  constructor() {
    console.error(123);
    super();
    const shadow = this.attachShadow( { mode: 'closed' } );
    const templateElem: any = document.getElementById('appdCardHeader');
    const content = templateElem.content.cloneNode(true);
    shadow.appendChild(content);
  }
}
window.customElements.define('appd-card-header', AppdCardHeader);
