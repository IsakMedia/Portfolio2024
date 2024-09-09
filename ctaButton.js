// import { setHref } from "./script";


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

.about__info-box__btn:active {
    box-shadow: inset 0px 2px 0px 1px rgba(0, 0, 0, 0.7);
    font-size: calc(1rem - 2%);
}



</style>


<a class="about__info-box__btn"><slot></slot></a>
`;



export class ctaButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.getAttribute("text")
        this.getAttribute("href")
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        
    }

  

    static get observedAttributes(){
        return ["text" , "href", "mailto"]
    }


    attributeChangedCallback(attribute, oldVal, newVal){
        console.log(attribute, oldVal,newVal);

       if(attribute.toLowerCase() === "mailto"){
        // this.setAttribute('href', newVal);
        console.log("please fire");
        const mailUrl = this.getAttribute('mailto');
        this.shadowRoot.querySelector('.about__info-box__btn').addEventListener('click', () => {
            if (mailUrl) {
                window.location.href = "mailto:"+mailUrl;
            }
        });
       }

       if(attribute.toLowerCase()=== "href") {
        console.log("please fire");
        const url = this.getAttribute('href');
        this.shadowRoot.querySelector('.about__info-box__btn').addEventListener('click', () => {
            if (mailUrl) {
                window.location.href = url;
            }
        });
       }
    }

    connectedCallback(){
  
    }

    render(){
        
    }

    

}

customElements.define("cta-button", ctaButton);