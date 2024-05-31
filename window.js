 
const macOsTemplate = document.createElement('template');
macOsTemplate.innerHTML = `
<style> 

@import url('./style.min.css');


::slotted([slot="lead"]) {
    font-style:italic;
  }


</style>
 <main>
            <div class="window">
                <div class="window__header">
                    <div class="btn-border-wrapper">
                        <button class="window__header__btn window__header__btn--close"></button>
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
                            <button class="window__header__btn window__header__btn--expand"></button>
                        </div>
                    
                </div>
                    
                <div class="window__body">
                    <h3>
                    <slot name="subheading">
                    should be replaced
                    </slot>
                    </h3>
                    <slot name="lead"></slot>
                    <p>
                    <slot name="paragraph">
                   
                    </slot>
                    </p>
                </div>
            </div>
</main>

`;


class WindowMacOs extends HTMLElement {
    constructor(){
        super();
        const shadowroot = this.attachShadow({mode:'open'});

        let clone = macOsTemplate.content.cloneNode(true);
        shadowroot.append(clone);
  
}

    static get observedAttributes(){
        return ['heading', "subheading", "paragraph", "lead"]
    }

    get heading(){
        return this.getAttribute('heading');
    };
    set heading(value) {
        this.setAttribute("heading", value )
    };
    get subheading(){};
    get paragraph(){};
    get lead(){}; 


    attributeChangedCallback(attrname, oldVal, newVal){

    }
}


customElements.define('window-mac', WindowMacOs);