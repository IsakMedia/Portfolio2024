 
const paragraphTemp = document.createElement('template');
paragraphTemp.innerHTML = `
<style> 


::slotted([slot="lead"]) {
    font-style:italic;
    
  }
</style>
<link rel=stylesheet href="./style.min.css">
<main>
    <div class="window">
        <div class="window__header">
            <div class="btn-border-wrapper">
                <button id="closeBtn" class="window__header__btn window__header__btn--close"></button>
            </div>
            <div class="window__header__line-box">
                <hr class="line-box__line">
                <hr class="line-box__line">
                <hr class="line-box__line">
                <hr class="line-box__line">
                <hr class="line-box__line">
                <hr class="line-box__line">
            </div>
                <h2>
                <slot name="heading">should be replaced</slot>
                </h2>

                <div class="window__header__line-box">
                    <hr class="line-box__line">
                    <hr class="line-box__line">
                    <hr class="line-box__line">
                    <hr class="line-box__line">
                    <hr class="line-box__line">
                    <hr class="line-box__line">
                </div>
                <div class="btn-border-wrapper">
                    <button id="expandBtn" class="window__header__btn window__header__btn--expand"></button>
                </div>
            
        </div>
            

        
        <slot name="image-box"></slot>
        
        <slot name="paragraph-comp"></slot>



        
    </div>
</main>

`;


class WindowMacOs extends HTMLElement {
    constructor(){
        super();
        const shadowroot = this.attachShadow({mode:'open'});

        let clone = paragraphTemp.content.cloneNode(true);
        shadowroot.append(clone);
    }

    static get observedAttributes(){
        return ['heading', "subheading"]
    }

    // find the attribute of heading in the dom-tree
    // get the attribute from the html so that js can use it
    // set the new attribute to its value
    get heading(){
        return this.getAttribute('heading');
    };
    // 
    set heading(value) {
        this.setAttribute("heading", value )
    };
    get subheading(){
        return this.getAttribute('subheading')
    };

    set subheading(value){
        this.setAttribute('subheading', value);
    }
   
    attributeChangedCallback(attributeName, oldVal, newVal){

     if(attributeName.toLowerCase() === "heading"){
        // const div = this.shadowRoot.querySelector('.root');
        this.shadowRoot.querySelector('h2').textContent = newVal;
     }

     if(attributeName.toLowerCase()==="subheading") {
        this.shadowRoot.querySelector('h3').textContent = newVal;
     } 

}

}

                 


customElements.define('window-mac', WindowMacOs);