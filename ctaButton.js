const template = document.createElement("template");
template.innerHTML = `
<style>
.about__info-box__btn {
    align-self: flex-start;
    font-size: 1rem;
    font-family: 'Chicago', sans-serif;
    background-color: rgb(255, 255, 255);
    border-radius: 0.4rem;
    padding: 3px 20px;
    border: 1px solid rgb(5, 5, 5);
    box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 1);
    margin-top:5px;
    cursor: pointer;
    user-select: none;
    
}

.about__info-box__btn:active {
    box-shadow: inset 0px 2px 0px 1px rgba(0, 0, 0, 0.7);
    font-size: calc(1rem - 2%);

    
}

.flex {
display:flex;
}


.disabled {
color:#595959;
border: 1px solid #595959;
box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.5);
cursor:not-allowed;
}


</style>

<div class="flex">
<div class="about__info-box__btn"><slot></slot></div>
</div>

`;
// slot here will allow for parents to se the inner text of the buttons

export class ctaButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.getAttribute("text")
    this.getAttribute("href");
    this.setAttribute("tabindex", "0");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.isClicked = false;
  }

  static get observedAttributes() {
    return ["href", "mailto"];
  }

  attributeChangedCallback(attribute, oldVal, newVal) {
    if (attribute.toLowerCase() === "mailto") {
      // give it a role of link
      this.setAttribute("role", "link");
      const mailUrl = this.getAttribute("mailto");
      this.shadowRoot
        .querySelector(".about__info-box__btn")
        .addEventListener("click", (e) => {
          // set isClicked to true, to add disabled effect
          this.isClicked = true;
          e.preventDefault(); // this doesnt do anything?

          if (mailUrl && this.isClicked) {
            this.shadowRoot
              .querySelector(".about__info-box__btn")
              .classList.add("disabled");
            // window.location.href = "mailto:" + mailUrl;
            window.open("mailto:" + mailUrl);
          }

          // on MouseUp, set isClicked to false and .remove("disabled");
        });

      this.addEventListener("mouseover", (e) => {
        // Add any way to give user feedback on where the link is taking you
        // maybe a floating textbubble with absolute on it?
        const url = this.getAttribute("href");
        console.log("this is the mouse over for a cta-button");
      });
    }

    if (attribute.toLowerCase() === "href") {
      this.setAttribute("role", "link");
      const url = this.getAttribute("href");
      this.shadowRoot
        .querySelector(".about__info-box__btn")
        .addEventListener("click", () => {
          if (url) {
            window.location.href = url;
            this.setAttribute("role", "link");
          }
        });
    }
  }
}

customElements.define("cta-button", ctaButton);
