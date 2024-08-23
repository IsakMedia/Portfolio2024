 import {windowTemp, imageBoxTemp, textBoxTemp, boxesTemp} from './templates.js'

class WindowMacOs extends HTMLElement {
    constructor(){
        super(); 
        this.attachShadow({mode:'open'});  
        this.render();
   
    }
  
    render(){
        const hasImg = this.hasAttribute('img');
        const boxes = this.hasAttribute('boxes');
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(windowTemp.content.cloneNode(true));
  
        const boxesTemplate = boxesTemp.content.cloneNode(true);
       
        if (hasImg && !boxes) {
            this.shadowRoot.querySelector('#conditionalDiv').appendChild(boxesTemplate);

            const imgSrc = this.getAttribute('img');
            const imageTemplate = imageBoxTemp.content.cloneNode(true);
            imageTemplate.querySelector('img').src = imgSrc;
            this.shadowRoot.querySelector('.about__about-container').appendChild(imageTemplate);
        }
   
        // const hasText =  this.shadowRoot.querySelector('.about__about-container');
        // if(hasText) {
        //     this.shadowRoot.querySelector('.about__about-container').appendChild(boxTemplate);
        // }

       

    }

    static get observedAttributes(){
        return ["heading", "subheading", "lead", "paragraph", "button", "boxes"]
    }
    
    get heading(){
        return this.getAttribute('heading');
    };

    set heading(value) {
        this.setAttribute("heading", value )
       
    };

    get subheading(){
        return this.getAttribute('subheading')
    };

    set subheading(value){
        this.setAttribute('subheading', value);
    }

    get lead(){
        return this.getAttribute('paragraph')
    }; 
    set lead(value) {
        this.setAttribute('lead', value)
    }

    get paragraph(){
        return this.getAttribute("paragraph")
    };
    set paragraph(value){
        this.setAttribute('paragraph', value)
    };

    get img() {
        return this.getAttribute("img")
    }

    set img(value) {
        this.setAttribute("img", value)
    }

    get boxes() {
        return this.getAttribute("box")
    }

   

  
    attributeChangedCallback(attributeName, oldVal, newVal){
        // if (oldVal !== newVal) {
        //     this.render();
        // }

     if(attributeName.toLowerCase() === "heading"){
         this.shadowRoot.querySelector('h2').textContent = newVal;
         
        
     }

     if(attributeName.toLowerCase()==="subheading") {
        this.shadowRoot.querySelector('h3').textContent = newVal;
          
     } 
     
     if(attributeName.toLowerCase()==="lead") {
        this.shadowRoot.querySelector('p').textContent = newVal;
     } 

     if(attributeName.toLowerCase()==="paragraph") {
        this.shadowRoot.querySelector('p').textContent = newVal;
     } 

     if(attributeName.toLowerCase() ==="img"){
        this.shadowRoot.querySelector("img").setAttribute('src',newVal);    
     }

     if(attributeName.toLowerCase()==="boxes") {
        const boxesTemplate = boxesTemp.content.cloneNode(true);
        this.shadowRoot.querySelector('#conditionalDiv').appendChild(boxesTemplate);

     }

     if(attributeName.toLowerCase()=== "button") {
        const attachmentDiv = this.shadowRoot.querySelector(".about__info-box");
        const btn = document.createElement("button");
        btn.classList.add("about__info-box__btn");
        btn.textContent = newVal;
        attachmentDiv.appendChild(btn);
        
        this.shadowRoot.querySelector(".about__info-box__btn").textContent= newVal;
     }

   
    }
    
   
}


customElements.define('window-mac', WindowMacOs);