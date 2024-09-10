
export const textBoxTemp = document.createElement('template');
        textBoxTemp.innerHTML=`
                <div class="about__info-box"> 
                    
                <ul>
                <slot name="list"></slot>
                </ul>
                    
                <a>
                <slot name="cta"></slot>
                </a>
                      
                </div>
        
        `;


export const imageBoxTemp = document.createElement('template');
        imageBoxTemp.innerHTML=`  
                        <div class="about__image-box">
                            <div class="about__image-box__profile-box">
                            <img/>
                            </div>
                        </div>
                        
            `;

//<div class="about__about-container">

export const windowTemp = document.createElement('template');
windowTemp.innerHTML = `
<style> 


::slotted([slot="lead"]) {
    font-style:italic;  
  }

::slotted([slot="list"]) {
 list-style-type: none;
  padding: 0;
  margin: 0;
}

</style>
<link rel=stylesheet href="./style.min.css">
<div class="main">
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
                <h2><slot name="heading">set attribute 'heading'</slot></h2>

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
           <div>
                <h3>
                    <slot name="subheading"></slot>
                </h3>

                <p>
                    <slot name="lead"></slot>
                </p>
                
                <p>
                    <slot name="paragraph"></slot>
                </p>

                <a>
                <slot name="cta-btn"></slot>
                </a>

            </div>  

                
            
        
            <div id="conditionalDiv"></div>
            
          

                      
            
           
            
       
        </div>
    </div>

</div>
`;


