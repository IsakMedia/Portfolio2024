console.log("hello from buttons.js")

const closeBtn = document.querySelector(".window__header__btn--close");
const expandBtn = document.querySelectorAll(".window__header__btn--expand");
const windowBody = document.querySelector(".window__body");
const window = document.querySelector(".window");



const toggle = (e)=> {
    e.target.classList.toggle("hidden");
    console.log("i run and im targetted by", e.target);
    }

    expandBtn.forEach((button) => {
            button.addEventListener("click", toggle)
        })

    // expandBtn.addEventListener("click", (e) =>{
        
    //     windowBody.classList.toggle("hidden");
    //     console.log("you clicked the expand/minimize button")
    //     console.log("does it have the hidden class?" , windowBody.classList.contains("hidden"))
    // })

    // closeBtn.addEventListener("click", (e)=> {
    //     window.classList.toggle("hidden");
    //     console.log("you clicked the close button")
    //     console.log("does it have the hidden class?" , window.classList.contains("hidden"))
    // })
  


    // redo it so that if theres an added button loop through all expand and hidden buttons and give them an eventlistener
    // and toggle the class of hidden for each button