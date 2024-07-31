 import {windowTemp, imageBoxTemp} from './templates.js'



class WindowMacOs extends HTMLElement {
    constructor(){
        super();
        
        
        this.attachShadow({mode:'open'});
       
        
       
        
    }
    
    render(){
        const conditionalDiv = this.shadowRoot.getElementById('conditionalDiv');
      


        if (this.condition) {
            conditionalDiv.innerHTML = imageBoxTemp.innerHTML;
        } else {
            conditionalDiv.innerHTML = '';
        }
    }
    
 


    connectedCallback() {
        console.log("connectedCallback ran");
        // add a shdaowroot to DOM
        const shadowroot = this.shadowRoot;   
        // create a copy of windowTemp template and attach it to the shadowroot
        let clone = windowTemp.content.cloneNode(true);
        shadowroot.append(clone);

        // this is now out of scope for all my get attribute functions

        let imgclone = imageBoxTemp.content.cloneNode(true);
        let windowhook = document.querySelector('#conditionalDiv') || null
        if(windowhook) {
           windowhook.append(imgclone);
        }
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