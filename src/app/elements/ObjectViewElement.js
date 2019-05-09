import { html } from '../../../web_modules/lit-element.js'
import BaseElement from './BaseElement.js';

export default class ObjectViewElement extends BaseElement {
  static get properties() {
    return {
      ...BaseElement.properties,
    }
  }

  constructor() {
    super();

  }

  render() {
    const object = this.app.getObject(this.uuid);

    if (!object) {
      return html`<div>no object selected</div>`;
    }

    console.log(object);
    return html`
<style>
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
<title-bar>Object View</title-bar>
<div class="properties">
  <key-value key-name="Type" value="${object.type}" type="string"></key-value>
  <key-value key-name="UUID" value="${object.uuid}" type="string"></key-value>
  <key-value key-name="Name" value="${object.name}" type="string"></key-value>
  <key-value key-name="Material" value="${object.material}" type="material"></key-value>
  <key-value key-name="Geometry" value="${object.geometry}" type="geometry"></key-value>
</div>
`;
  }
}
