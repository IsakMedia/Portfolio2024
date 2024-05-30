 
const macOsTemplate = document.createElement('template');
macOsTemplate.innerHTML = `
<style> 

@import url('./style.min.css');
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
                        <slot name="title">title on window header</slot>
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
                    Här är en subheading från componenten
                    </slot>
                    </h3>
                    <p>
                    <slot name="paragraph">
                    här har jag text från componenten i paragraph slot.
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
        return ['title', "subheading", "paragraph"]
    }
}


customElements.define('window-mac', WindowMacOs);