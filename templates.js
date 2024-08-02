// let condition = true;

// template2(imgSrc) {
//     return `
//       <div class="temp2">
//         <img src="${imgSrc}" alt="Image">
//       </div>
//     `;
//   }

export const imageBoxTemp = document.createElement('template');
        imageBoxTemp.innerHTML=`
            
                <section class="about">
                    <div class="about__about-container">
                        <div class="about__image-box">
                            <div class="about__image-box__profile-box">
                            <slot name="img-src"><img/></slot>
                            </div>
                        </div>
                        <div class="about__info-box">
                            <slot name="list"></slot>
                            <slot name="btn">
                            <button class="about__info-box__btn">Contact</button>
                            </slot>
                        </div>
                    </div> 
                </section>
            `;



export const windowTemp = document.createElement('template');
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
                    <slot name="subheading"></slot>
                </h3>
                <p>
                    <slot name="lead"></slot>
                </p>
                <p>
                    <slot name="paragraph"></slot>
                </p>
            <div>
        
            <div id="conditionalDiv"></div>
       
        </div>
    </div>
</main>

`;



            
//  <slot name="img">${imageBoxTemp.innerHTML}</slot>
// <slot name="img">${renderImg}</slot> 
// <slot name="img">${this.condition ? imageBoxTemp.innerHTML : ''} </slot>