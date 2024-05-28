
const macOsTemplate = document.createElement('template');
macOsTemplate.innerHTML = `
<style> 

:host(window-mac) {
    @import './style.min.css';
}

</style>
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
                        <slot name="title">place a h2 heading here</slot>
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
                    Hej@isakmedia.se
                    </slot>
                    </h3>
                    <p>
                    <slot name="paragraph">
                    </slot>
                    </p>
                </div>
            </div>


`;



class WindowMacOs extends HTMLElement {
    constructor(){
        super();
        const shadowroot = this.attachShadow({mode:'open'});
        
        let clone = macOsTemplate.content.cloneNode(true);
        shadowroot.append(clone);
        
    }

}


customElements.define('window-mac', WindowMacOs);