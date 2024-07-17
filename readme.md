# Steps im doing in development

## helpers

* figma
* chatgpt
* <https://box-shadow.dev/>
* <https://www.cdnfonts.com/chicago-2.font>;
* mac os 9 reference - <https://www.youtube.com/watch?v=Pxdjhi53B8U>
* can i keep using scss for webcomponents?
<https://dev.to/m4thieulavoie/how-i-managed-to-use-scss-inside-web-components-3lk9>
<https://medium.com/swlh/web-components-with-shadow-dom-and-sass-f780ad23dd90>

* Did the original design in figma, strongly based (copied) from old Mac OS 9 i grew up with.  

* I need to rethink my BEM-classes again, should i think more in components?
should i start to try to make em right away before it goes too far. or do everything first.
probably not the latter. ill get to it soon

* setting up and watching sass on my laptop created a style.min.css and was dependent on it to read the scss in
index.html. wonder if im using different extensions or whats up. this might be a somewhat inconvenience when
switching between computers. so maybe i solve this some day. Anyways something to remember, to save myself from frustration.

* maybe i cant use scss as i want to, or webcomponents. im not sure yet. I really didnt want to use any npm packages for this project, keeping everything as "vanilla" as possible (except for sass, gotta have sass). Maybe this project will get me closer to understand the usefullness of bundlers and maybe wth webpack is?

* can i go over my shadow dom and check if it contains any <img> tags, to add a default alt="", property. Or makes it more sense to find a way to force who ever (me proably) who want to use my web-component to add an alt="" if they want to
include an <img> or <svg>

## What am i using ChatGPT for?

* used chatGPT to ask about BEM since i get confused on how long the class names are suppose to be, how far nested?
* used chatGPT to get mediequeries for mobile first because i forgot the syntax.
* used chatGPT to properly use flex grow/shrink to get right element to resize
* using chatGPT a lot to get all the values for a property,i understand it better than MDN.
* asked the bot how to properly set flex on children to make em take up equal amount of space of its container
* still struggling with flexbox flex growth. also asked it to do some math even though i know LLMs do math bad
but i figuer that LLMs might be able to give me the formula to solve it, and then i can ask (or figuer out)
the proper way to solve it somewhere else.
* As i hard code in my about text i asked the bot to help me place <p> tags where ever it felt it should be
a little breathers in my text.
* my html didnt work, hard to look at my tiny screen figuering out want tags has been closed off or missing its closing tag and so on. the Bot solves it

## ideas

* could i do a vanilla js webcomponent?

* can i get the rearange feature in the bottom right of the window, but only on desktop.
im guessing i need to do some x-pos y-pos with javascript to drag em around. should it push the other content
or should it overlap. i need to think about it.
id really like if one feature would be that if you expand one of the windows, ive hidden easter eggs off screen.

* should the expand button make the window collapse at place itself on top of upper window?
* should it work by placing it with position:relative top:0, or do i have to use javascript to find the lower boundingrect?

* should add a margin of error for my jokes to multiply with. Maybe
it aint that funny even though i think it for the moment. i wonder if there are
any humor calculators out there. maybe i can run it on my page aswell. yeah ok
maybe not, but id like to have some dynamic text content from an open api.
hmm, dont know if i want it to be hidden or in the source-code just like an easter eggs. i do love easter eggs.

### what am i doing?

* realizing how much i like typescript with all those mental gymnastics im doing

* realizing the important of planning what you want your components to do before you stir sh*t up.

* why am i like this?

* what an absolute nightmare this has become
-i need to blame someone..or something.. yooohooo chatGPT, whats up little buddy?
-it told me ive missunderstood everything.
-thanks obama.
-^ is that still a meme people remembers?
-anyways, next time i wont do the css first, or ill google before hand if sass could be a problem
-are you trying to blame sass for this?
-i guess.




### boiler-plate html for later use

<section class="contact">
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
                    <h2>About</h2>
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
                    <section class="about">
                        <div class="about__about-container">
                            <div class="about__image-box">
                                <div class="about__image-box__profile-box">
                                    <img src="./src/images/isak.png" alt="Isak's profile picture"/>
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
            </div>
        </section>  