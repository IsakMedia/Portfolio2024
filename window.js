 
const imageBoxTemp = document.createElement('template');
imageBoxTemp.innerHTML=`
            <slot name="image-box">
                <section class="about">
                    <div class="about__about-container">
                        <div class="about__image-box">
                            <div class="about__image-box__profile-box">
                                <img src="./src/isak.png"/>
                            </div>
                        </div>
                        <div class="about__info-box">
                                <ul>
                                    <li>Name: Isak</li>
                                    <li>Age: 35</li>
                                    <li>Status: Broke</li>
                                    <li>Location: Malmö</li>
                                </ul>
                                <button class="about__info-box__btn">Contact</button>    
                        </div>
                    </div>
                </section>
            </slot>`;

const windowTemp = document.createElement('template');
windowTemp.innerHTML = `
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
                <slot name="heading">default text</slot>
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


        <div class="window__body">
            <div slot="paragraph">
                <h3>
                    <slot name="subheading">      
                    </slot>
                </h3>
                <p>
                    <slot name="lead"></slot>
                </p>
                <p>
                    <slot name="paragraph"></slot>
                </p>
            <div>
    
            <slot name="image-box">${imageBoxTemp.innerHTML}</slot>
            
        </div>
    </div>
</main>

`;

console.log(imageBoxTemp);


class WindowMacOs extends HTMLElement {
    constructor(){
        super();
        const shadowroot = this.attachShadow({mode:'open'});

        let clone = windowTemp.content.cloneNode(true);
        shadowroot.append(clone);
    }

    static get observedAttributes(){
        return ['heading', "subheading", "lead", "paragraph", "image-box"]
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
    }

}



                 


customElements.define('window-mac', WindowMacOs);