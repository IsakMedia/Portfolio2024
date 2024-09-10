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

    get img() {
        console.log("do you fire get img");
        return this.getAttribute("img")
    }

    set img(value) {
        console.log("do you fire set img?");
        this.setAttribute("img", value)
    }

  
    attributeChangedCallback(attributeName, oldVal, newVal){

     if(attributeName.toLowerCase() === "heading"){
         this.shadowRoot.querySelector('h2').textContent = newVal;
         
        
     }

     if(attributeName.toLowerCase()==="subheading") {
        this.shadowRoot.querySelector('h3').textContent = newVal;
          
     } 
     
    //  if(attributeName.toLowerCase()==="lead") {
    //     this.shadowRoot.querySelector('p').textContent = newVal;
    //  } 

    //  if(attributeName.toLowerCase()==="paragraph") {
    //     this.shadowRoot.querySelector('p').textContent = newVal;
    //  } 

    //  if(attributeName.toLowerCase() ==="img"){
    //     this.shadowRoot.querySelector("img").setAttribute('src',newVal);    
    //  }


    }
    
   
}

// const remove =()=> {
//     document.querySelector("window-mac").remove();
// }


customElements.define('window-mac', WindowMacOs);