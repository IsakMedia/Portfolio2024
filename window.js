 import {windowTemp, imageBoxTemp} from './templates.js'



class WindowMacOs extends HTMLElement {
    constructor(){
        super();
        
        
        this.attachShadow({mode:'open'});
       
       
        
    }
    
    render(){
        console.log("render is running");
        const hasImg = this.hasAttribute('img');
        
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(windowTemp.content.cloneNode(true));
        const conditionalDiv = this.shadowRoot.getElementById('conditionalDiv');
        
        if (hasImg) {
            const imgSrc = this.getAttribute('img');
            const imageTemplate = imageBoxTemp.content.cloneNode(true);
            imageTemplate.querySelector('img').src = imgSrc;
            conditionalDiv.appendChild(imageTemplate);
        }

       
        
       
        
        
    }
    
 


    connectedCallback() {
        console.log("connectedCallback ran");
        this.render();
    }
    
    disconnectedCallback(){
        console.log("why does this make connectedcallback run twice?");
    }

   

    static get observedAttributes(){
        return ['heading', "subheading", "lead", "paragraph", "img", "img-src"]
    }

    // find the attribute of heading in the dom-tree
    // get the attribute from the html so that js can use it
    // set the new attribute to its value
    get heading(){
        return this.getAttribute('heading');
    };

    set heading(value) {
        this.setAttribute("heading", value )
    };

    //
    get subheading(){
        return this.getAttribute('subheading')
    };

    set subheading(value){
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

     // gives the image-tag its src. 
     if(attributeName.toLowerCase() ==="img"){
        this.shadowRoot.querySelector("img").setAttribute('src',newVal);    
     }
    
    }

    
    
}


                 


customElements.define('window-mac', WindowMacOs);