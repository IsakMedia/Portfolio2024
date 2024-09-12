 import {windowTemp, imageBoxTemp, textBoxTemp} from './templates.js'


class WindowMacOs extends HTMLElement {
    constructor(){
        super(); 
        this.attachShadow({mode:'open'});  
        this.render();
   
    }
  
    render(){
        const hasImg = this.hasAttribute('img');
        const hasList = this.hasAttribute('list');
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(windowTemp.content.cloneNode(true));
  
       
        if (hasImg || hasList) {
            this.shadowRoot.querySelector('#conditionalDiv').classList.add("about__about-container");
        }
       
        if (hasImg) {
            const imgSrc = this.getAttribute('img');
            const imageTemplate = imageBoxTemp.content.cloneNode(true);
            imageTemplate.querySelector('img').src = imgSrc;
            this.shadowRoot.querySelector('.about__about-container').appendChild(imageTemplate);

        } 
        if (hasList) {
            const textBoxTemplate = textBoxTemp.content.cloneNode(true);
            this.shadowRoot.querySelector('.about__about-container').appendChild(textBoxTemplate);
        }

    }

  
    static get observedAttributes(){
        return ["heading", "subheading", ]
    }
    
  
    attributeChangedCallback(attributeName, oldVal, newVal){

     if(attributeName.toLowerCase() === "heading"){
         this.shadowRoot.querySelector('h2').textContent = newVal;
         
        
     }

     if(attributeName.toLowerCase()==="subheading") {
        this.shadowRoot.querySelector('h3').textContent = newVal;
          
     } 
     


    }
    
   
}


customElements.define('window-mac', WindowMacOs);