const paragraphTemp = document.createElement('template');
paragraphTemp.innerHTML = `

    <div class="window__body">
        <h3>
            <slot name="subheading">
                should be replaced
            </slot>
        </h3>
        <p>
            <slot name="lead"></slot>
        </p>
        <p>
            <slot name="paragraph"></slot>
        </p>
    </div>
`


class paragraphComp extends HTMLElement {
    constructor(){
        super();
        const shadowroot = this.attachShadow({mode:'open'});

        let clone = paragraphTemp.content.cloneNode(true);
        shadowroot.append(clone);
    }

    get paragraph(){
        return this.getAttribute("paragraph")
    };
    set paragraph(value){
        this.setAttribute('paragraph', value)
    };
    get lead(){
        return this.getAttribute('paragraph')
    }; 
    set lead(value) {
        this.setAttribute('lead', value)
    }

    static get observedAttributes(){
        return ["subheading", "paragraph", "lead"]
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        if(attributeName.toLowerCase()==="subheading") {
            this.shadowRoot.querySelector('h3').textContent = newVal;
         } 
     
     if(attributeName.toLowerCase()==="lead") {
        this.shadowRoot.querySelector('p').textContent = newVal;
     } 

     if(attributeName.toLowerCase()==="paragraph") {
        this.shadowRoot.querySelector('p').textContent = newVal;
     } 
    }

}

customElements.define('paragraph-comp', paragraphComp);

