
const template = document.createElement('template');
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
    
}

.about__info-box__btn:active {
    box-shadow: inset 0px 2px 0px 1px rgba(0, 0, 0, 0.7);
    font-size: calc(1rem - 2%);
}

.flex {
display:flex;
}

</style>

<div class="flex">
<div class="about__info-box__btn"><slot></slot></div>
</div>
`;
// slot here will allow for parents to se the inner text of the buttons


export class ctaButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        // this.getAttribute("text")
        this.getAttribute("href")
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        
    }

    static get observedAttributes(){
        return ["href", "mailto"]
    }


    attributeChangedCallback(attribute, oldVal, newVal){

       if(attribute.toLowerCase() === "mailto"){
       
        const mailUrl = this.getAttribute('mailto');
        this.shadowRoot.querySelector('.about__info-box__btn').addEventListener('click', () => {
            if (mailUrl) {
                window.location.href = "mailto:"+mailUrl;
            }
        });
       }

       if(attribute.toLowerCase()=== "href") {

        const url = this.getAttribute('href');
        this.shadowRoot.querySelector('.about__info-box__btn').addEventListener('click', () => {
            if (url) {
                window.location.href = url;
            }
        });
       }
    }


}

customElements.define("cta-button", ctaButton);