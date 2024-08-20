 import {windowTemp, imageBoxTemp} from './templates.js'

class WindowMacOs extends HTMLElement {
    constructor(){
        super(); 
        console.log("1: constructor");  
        this.attachShadow({mode:'open'});  

        // if this renders all version of my component on startup. 
        // render runs 3 times per instance
       this.render();
    }
    
    render(){
        console.log("2: render()");
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

    static get observedAttributes(){
        console.log("observedAttributes");
        // den här verkar göra något iaf
        return ["heading", "subheading", "lead", "paragraph"]
    }
    
 
    // find the attribute of heading in the dom-tree
    // get the attribute from the html so that js can use it
    // set the new attribute to its value
    get heading(){
        console.log(" heading",this.getAttribute('heading'));
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
        // if (oldVal !== newVal) {
        //     this.render();
        // }

     if(attributeName.toLowerCase() === "heading"){
         this.shadowRoot.querySelector('h2').textContent = newVal;
         console.log("did heading textcontent set?");
        
     }

     if(attributeName.toLowerCase()==="subheading") {
        console.log("did subheading textcontent set?");
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
        console.log("trying to change the button text");
        this.shadowRoot.querySelector(".about__info-box__btn").textContent= newVal;
     }

   
    }


    
    
}

customElements.define('window-mac', WindowMacOs);