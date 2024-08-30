
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
    
}

.about__info-box__btn :active {
    box-shadow: inset 0px 2px 0px 1px rgba(0, 0, 0, 0.7);
    font-size: calc(1rem - 2%);
}

</style>
<button class='about__info-box__btn'></button>`;


export class ctaButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})

        this.getAttribute("text")
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        
    }

    static get observedAttributes(){
        return ["text"]
    }

    attributeChangedCallback(attribute, oldVal, newVal){
        console.log(attribute, oldVal,newVal);

        this.shadowRoot.querySelector('button').textContent = newVal;

    }

    render(){
        
    }

    

}

customElements.define("cta-button", ctaButton);