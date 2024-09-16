 import {windowTemp, imageBoxTemp, textBoxTemp, boxTemp} from './templates.js'


class WindowMacOs extends HTMLElement {
    constructor(){
        super(); 
        this.attachShadow({mode:'open'});  
        this.render();
   
    }
  
    render(){
        const hasImg = this.hasAttribute('img');
        const hasList = this.hasAttribute('list');
        const hasCol = this.hasAttribute('col');
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(windowTemp.content.cloneNode(true));
  
       
        if (hasImg || hasList || hasCol) {
            this.shadowRoot.querySelector('#conditionalDiv').classList.add("about__about-container");
        }

        if(hasCol) {
            const imgSrc = this.getAttribute('img');
            const boxTemplate = boxTemp.content.cloneNode(true);
            // now it looks for an img tag in the template, but should look for an img in the document
            // but im guessing, an img in this.shadowRoot about__about-container
            boxTemplate.querySelector('img') ? boxTemplate.querySelector('img').src = imgSrc : null;
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
        return ["heading", "subheading", "col" ]
    }
    
  
    attributeChangedCallback(attributeName, oldVal, newVal){

     if(attributeName.toLowerCase() === "heading"){
         this.shadowRoot.querySelector('h2').textContent = newVal;
         
        
     }

     if(attributeName.toLowerCase()==="subheading") {
        this.shadowRoot.querySelector('h3').textContent = newVal;
          
     } 

     if(attributeName.toLowerCase()==="grid"){


     }
     


    }
    
   
}


customElements.define('window-mac', WindowMacOs);