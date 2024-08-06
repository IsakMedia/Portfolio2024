 import {windowTemp, imageBoxTemp} from './templates.js'

class WindowMacOs extends HTMLElement {
    constructor(){
        super(); 
        console.log("constructor");  
        this.attachShadow({mode:'open'});  
    }
    
    render(){
        console.log("render()");
        const hasImg = this.hasAttribute('img');
        
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(windowTemp.content.cloneNode(true));

        
      

        if (hasImg) {
            const imgSrc = this.getAttribute('img');
            const imageTemplate = imageBoxTemp.content.cloneNode(true);
            imageTemplate.querySelector('img').src = imgSrc;
            this.shadowRoot.querySelector('#conditionalDiv').appendChild(imageTemplate);
        }
              
    }
    
 


    connectedCallback() {
        console.log("connectedCallback");
        this.render();
    }
    
    disconnectedCallback(){
        console.log("disconnectedCallback");
    }

   

    static get observedAttributes(){
        console.log("observedAttributes");
        return ["heading", "subheading", "lead", "paragraph"]
    }

    // find the attribute of heading in the dom-tree
    // get the attribute from the html so that js can use it
    // set the new attribute to its value
    get heading(){
      
        return this.getAttribute('heading');
    };

    set heading(value) {
        this.setAttribute("heading", value )
        console.log("Set heading körs inte :(");
       
    };

    //
    get subheading(){
        console.log("get subheading körs inte");
        return this.getAttribute('subheading')
    };

    set subheading(value){
        console.log("set subheading körs inte");
        this.setAttribute('subheading', value);
    }
    //
    get lead(){
        return this.getAttribute('paragraph')
    }; 
    set lead(value) {
        this.setAttribute('lead', value)
    }
    //
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

    
 

    attributeChangedCallback(attributeName, oldVal, newVal){
        console.log("attributeChangedCallback");
        if (oldVal !== newVal) {
            this.render();
        }

     if(attributeName.toLowerCase() === "heading"){
         this.shadowRoot.querySelector('h2').textContent = newVal;
         console.log(`if attributeName is heading: old val: ${oldVal},newVal: ${newVal}`);
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

     // gives the image-tag its src. 
     if(attributeName.toLowerCase() ==="img"){
        this.shadowRoot.querySelector("img").setAttribute('src',newVal);    
     }

     if(attributeName.toLowerCase()=== "btn-text") {
        this.shadowRoot.querySelector(".about__info-box__btn").textContent= newVal;
     }

   
    }

    
    
}

customElements.define('window-mac', WindowMacOs);