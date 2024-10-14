import { windowTemp, imageBoxTemp, textBoxTemp } from "./templates.js";

const macOsTemplate = document.createElement("template");
macOsTemplate.innerHTML = `
<style> 
@import url('./style.min.css');

::slotted([slot="lead"]) {
    font-style:italic;
  }

::slotted([slot="heading"]) {
    font-size: 1.1rem;
    font-style: normal;
    font-stretch: expanded;
    padding-inline: 8px;
    padding-block: 10px;
    margin: 0;
}

</style>
 <main>
            <div class="window">
                <div class="window__header">
                    <div class="btn-border-wrapper">
                        <button id="close-btn" class="window__header__btn window__header__btn--close"></button>
                    </div>
                    <div class="window__header__line-box">
                        <hr class="line-box__line">
                        <hr class="line-box__line">
                        <hr class="line-box__line">
                        <hr class="line-box__line">
                        <hr class="line-box__line">
                        <hr class="line-box__line">
                    </div>
                        <h2>
                        <slot name="heading">should be replaced</slot>
                        </h2>

                        <div class="window__header__line-box">
                            <hr class="line-box__line">
                            <hr class="line-box__line">
                            <hr class="line-box__line">
                            <hr class="line-box__line">
                            <hr class="line-box__line">
                            <hr class="line-box__line">
                        </div>
                        <div class="btn-border-wrapper">
                            <button id="expand-btn" class="window__header__btn window__header__btn--expand"></button>
                        </div>
                    
                </div>
                    
                <div class="window__body">
                    <h3>
                    <slot name="subheading">
                    h3 with slotname 'subheading'
                    </slot>
                    </h3>
                    <slot name="lead">
                    paragraph with slotname 'lead'
                    </slot>
                    <p>
                    <slot name="paragraph">
                   paragraph with slotname 'paragraph'
                    </slot>
                    </p>
                </div>
            </div>
</main>

`;

class WindowMacOs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const hasImg = this.hasAttribute("img");
    const hasList = this.hasAttribute("list");
    const hasCol = this.hasAttribute("col");
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(windowTemp.content.cloneNode(true));

    if (hasImg || hasList || hasCol) {
      this.shadowRoot
        .querySelector("#conditionalDiv")
        .classList.add("about__about-container");
    }

    if (hasCol) {
      // right yes, this is the problem, i want to set one .about__box to each element inside of the <window-mac>
      const boxTemplate = boxTemp.content.cloneNode(true);
      this.shadowRoot
        .querySelector(".about__about-container")
        .appendChild(boxTemplate);
      const setImg = this.shadowRoot.querySelector(".about__box");

      // what is this for? i want to set img src in html oldschool style
      // setImg.querySelector('img') ? setImg.querySelector('img').src = imgSrc : null;
    }

    if (hasImg) {
      const imgSrc = this.getAttribute("img");
      const imageTemplate = imageBoxTemp.content.cloneNode(true);
      imageTemplate.querySelector("img").src = imgSrc;
      this.shadowRoot
        .querySelector(".about__about-container")
        .appendChild(imageTemplate);
    }
    if (hasList) {
      const textBoxTemplate = textBoxTemp.content.cloneNode(true);
      this.shadowRoot
        .querySelector(".about__about-container")
        .appendChild(textBoxTemplate);
    }
  }

  static get observedAttributes() {
    return ["heading", "subheading", "col"];
  }

  attributeChangedCallback(attributeName, oldVal, newVal) {
    if (attributeName.toLowerCase() === "heading") {
      this.shadowRoot.querySelector("h2").textContent = newVal;
    }

    if (attributeName.toLowerCase() === "subheading") {
      this.shadowRoot.querySelector("h3").textContent = newVal;
    }
  }
}

customElements.define("window-mac", WindowMacOs);
