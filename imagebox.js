const imageBoxTemplate = document.createElement('template');
imageBoxTemplate.innerHTML = `

<link rel="stylesheet"  href="./about.css">

<div class="window__body>
            <section class="about">
                <div class="about__about-container">
                    <div class="about__image-box">
                        <div class="about__image-box__profile-box">
                            <img/>
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
        </div>

`;



class ImageBox extends HTMLElement {
    constructor(){
        super();
        const shadowroot = this.attachShadow({mode:'open'});

        let clone = imageBoxTemplate.content.cloneNode(true);
        shadowroot.append(clone);
    }


    static get observedAttributes(){
        return ['src','alt']
    }

    get imgSrc(){
        return this.getAttribute('src')
    };

    set imgSrc(value) {
        this.setAttribute("src", value )
    };


    get imgAlt(){
        return getAttribute("alt")
    }

    set imgAlt(value) {
        this.setAttribute('alt', value)
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        if(attributeName.toLowerCase() === "src"){
            this.shadowRoot.querySelector('img').setAttribute("src",newVal);
        }

        if(attributeName.toLowerCase()==="alt"){
            this.shadowRoot.querySelector('img').setAttribute("alt",newVal);  

        }
    }

    
}