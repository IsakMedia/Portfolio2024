# How to use

there are two components
`<window-mac>`
 `<cta-button>`
use the attribute slot="" to set content of a component.
the components have component-specific attributes and slot names.

## `<window-mac>`

window-mac have these attributes you can use
*"heading", "subheading", "img", "list"* ( *list* requires no value)
`<window-mac heading="hello" subheading="welcome" img="/image.jpg">`

`<window-mac>` uses these slot names:
*lead* = gives a cursive lead before a longer text
*paragraph* = gives a standard paragraph
*cta* = lets you put a  `<cta-button>`  inside your window

ex:
`<winow-mac>`
`<div slot="cta">`
`<cta-button> </cta-button>`
`</div>`
`</window-mac>`

## `<cta-button>`

cta-button have these attributes you can use
*"mailto", "href"*
it does not however have a specific slot name. just type the text as you would usually do with a standard html button
`<cta-button>my text</cta-button>`

cta buttons have two usecases
`<cta-button mailto="google@gmail.com">my text</cta-button>`  // will open installed mail client on clients machine
`<cta-button href="https://www.google.com">google</cta-button>` // will send you straight to target url

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

* can i go over my shadow dom and check if it contains any `<img>` tags, to add a default alt="", property. Or makes it more sense to find a way to force who ever (me proably) who want to use my web-component to add an alt="" if they want to
include an `<img>` or `<svg>`

## What am i using ChatGPT for?

* used chatGPT to ask about BEM since i get confused on how long the class names are suppose to be, how far nested?
* used chatGPT to get mediequeries for mobile first because i forgot the syntax.
* used chatGPT to properly use flex grow/shrink to get right element to resize
* using chatGPT a lot to get all the values for a property,i understand it better than MDN.
* asked the bot how to properly set flex on children to make em take up equal amount of space of its container
* still struggling with flexbox flex growth. also asked it to do some math even though i know LLMs do math bad
but i figuer that LLMs might be able to give me the formula to solve it, and then i can ask (or figuer out)
the proper way to solve it somewhere else.
* As i hard code in my about text i asked the bot to help me place `<p>` tags where ever it felt it should be
a little breathers in my text.
* my html didnt work, hard to look at my tiny screen figuering out want tags has been closed off or missing its closing tag and so on. the Bot solves it

[edit: i left this long ago. chatGPT is help and a curse, claude is cool too, i use em for everything sometimes it works, sometimes it doesnt]

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
 (update) i do not remember what i mean by this anymore. but i do like dynamic content. so i agree with myself there.

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

* throw out everything, start over. simple down the components.
-havent figuered out if there is a limitation in web-components making it hard to put a component inside another component or if i just dont understand basic JS.
 anyways. time to push for deployment, and update stuff later

### boiler-plate html for later use

`<section class="contact">
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
        </section>`

## if attribute is added. example "image-box"

`attributeChangeCallback(name, oldVal, newVal){
    if(newVal ==="null") {
        // if theres no attribute named "img" it will return "null"
        so if null, do nothing.
    } else {
        // if added, get reference to instance of class, look for attribute "src"
        const newImg = document.createElement("img")
        newImg.setAttribute("img", value)
        // maybe i need to use this. here to get the current value of components img attribute
    }
}`

`<window-mac img="./isak.jpg">`

setAttribute

img.setAttribute gives the element an attribute either way.
getAttribute gets the value of an attribute. if theres no attribute of said name, it returns null

maybe by moving   imageBoxTemp.content.cloneNode(true); and attach it to empty divs in windowsTemp
i can create a condition to render it. and it maybe should be placed within a livescycle method in web components
to render in at different times with different conditions met. but this messes with scope. so look into it.
maybe do as claude suggested and make a loop to get a hold of all gets and sets. think about it will ya

6/8 24
realizes that my component in a way works as expected, though ive forgotten how things work. i also realize that claude is right in a lot of ways but also the more i use AI to help me with logic, the further from god i walk. AI is great to help me with approaches to solvING problems but not so good at fixing them. Because it have its own idea on how to fix things, and not stringent with how i want to fix it. It's good in a way to figuer out the limitations of AI or maybe even more, the limitations of me, my journey or my comprehension of code in relation to AI.
Like theres a sub-journey for trying to become a more profficient AI-web-developer.
Anyways need to fix the bug of re-renders that mess with get and set attributes or observedAttributes that triggers a rerender and cleanup of the whole document. so execution order

16/8
if this.render() is run in the constructor (opposed to in a connectedcallback) it renderes all versions of my component
with text, with text and image, with only image. the subheading works but not the heading ?!
is a it a slot prob?

theres something about using attributes that messes with things, if i have both heading and subheading it only set the latter, if i only have a heading it works. now what in the

23/8
what ive learned from this ordeal. architecture is hard, doing css first is terrible, reinventing the wheel helps you learn stuff, but maybe not things you need. when i listen to tutorials about web components everyone is saying
"try not to think about it as react components"
"working with scoped css is terrible"
Guess what i did?

* i need to check if image container have a sibling and if so remove some classes.

if only child - render stuff with all them classes
if sibling - only the image-box

`<section class="about">`
`<div class=".about__about-container">`
// image needs these container classes to look proper
// text box need these container classes to look proper
// if there is both an image and a textbox, there should be only one about and about-container class
`</div>`
`</section>`

there is a super simple answer to this. i know it. but brain is mushy and i am stupid. Thats ok. i should go for a run
and think about it.

wait. should i have to include if image should be placed in a box. right now an image cant be shown without a box
but if img attribute already gives a box, it be redundant to add img and boxes as attributes. will also ruin !boxes rule

* should check for children or siblings

element.firstChild
or
element.hasChildNodes()

if  element.childNodes.length <= 1 set boxesTemp (.about__about-container ) to #conditionalDiv then add whatever.
else just add proper template.
i guess !boxes or !img attributes should do the trick to diffrentiate between if an image is added or text.

-this doesnt scale at all. attributes dont make much sense. but i guess there shouldve been different kinds of
custom elements originally to make it make more sense. but you dumbed it down remember? dont make the same mistake again.
eyes on the prices (the price in this case is the same price as "play stupid games, win stupid prices").

i will name this project "how to pwn yourself 101"

30/8
 i got multiple `<main>`
 today i learned dont do markup first.

## hard truths

30/8
i thought about how i was doing a lot of stuff and then having to retract back. like throwing out a couple of custom
elements and just do one file. or that i have a lot of code in my windows.js that doesnt do anything. and i dont know
why, but also dont know why they should. And i thought that maybe it goes into this idea which i (still!) believed, that
i was just stupid. Its how it is sometime. but it also teached me a lot about development. Because i get to hit these walls where i get stuck and feel confused and i cant think myself out of it. i think about it like i run out of brain-RAM.
so i have to dumb it down and make it less complex. Usually that only take me on a journey for another brick wall to hit my head on. But it really helps me reason and think about problems. finding limitations to my thinking or realize what i dont see or what decisions i have to make. like "realizing", at least for now. that it doesnt make much sense to give one custom element infinite amount of conflicting attributes. like adding a box with text in it if it has an image next to it or not, or set up a lot of other rules of if statments in other if statements.
maybe that should be another custom element, or maybe. juuust maybe. it should be just plain basic markup. maybe something
is allowed to be hardcoded into it.
for instance. one path i was on, i tried to add all my bio-text into the attribute of text="", right into the custom element. Like wtf? still i didnt see that i was on that path until i was about to implement it and then i felt confused.

im going to try today to not beat myself up about it. that i make stupid choices, and that i dont see the obvious even if its suuuuper obvious. I have to fail this to get what the tutorials are saying, and what they warn me about when they say "dont think about them as react components" and so on.

i remember first time in videoproduction, how i heard about storyboards. and i thought it was stupid. i had my vision, its easy. i bascially got it all planned out in my head. oh sweet summerchild.
now i do storyboards, and i design in figma. and im learning to plan my code. it will take a little while though. Because i have some serious frustrations, limitations and let downs ahead.

9/9
Button aint behaving as it should. maybe its something wrong in the click event. i want the right attribute to trigger the correct respons. you should be able to write "mailto" and make button into mail-button or "href" to make it a navigation link. console.log()s dont fire

10/9
ive been struggling today. thought i had the hang of it , but nope.
didnt know if it was suppose to be the component or the parent to controll the styling or semantics.
chatGPT said it was suppose to be the component (template), but it would be hidden in the shadow dom.
im not sure. i think my DOM-tree looks awful (and very confusing!!!). but now it looks better.
i also forgot ive moved the cta-buttons styling to the component so i should change rules there. which requires me
to rethink some, but also remember stuff.
I should read this readme more often and not just write in it

12/9

Ok so that  **.about__info-box** and **.about__image-box** does basically the same thing and looks like it can be given
the same rules. **.about_box** i suppose. though the image box will include another div with image specific rules
and i guess the same with the info-box. so as of right now, i dont really see how one class less makes much difference.

i wonder if i should make component that is basically a "cell" component. like theres an attribute for like [grid],
and if its added you need to include `<mac-cell img="./me.jpg"></max-cell>` and each `<mac-cell>` is placed on a growing 3x^ grid that will scale accordingly. and is given the (new) .about__box class.

ok so now both the image template and the infobox looks the same. the only difference is that one has an img tag in it and the other dont. What do i want with my component?

do i want an image to be set in as an attribute? why would if id make a grid? i i dont want to create something like
`<window-mac img1="./isak.jpg" img2="./jpg" img1="./isak.jpg" img2="./jpg" img1="./isak.jpg" img2="./jpg">` right?!?!
or should i just have like `<window-mac CoverPic="./pictureWithownstyling" grid>` and set the cover pic with its own styling and after that the component would not care what images what would be added in a cell.

maybe i should be able to set a coverphoto and it sets picture without giving it any about_box styling.
and then figuer out how to make mac-cells out of the rest.
I should take a run and think about this. Anyways Templates first

## known bugs

* links send you straight to target url (should preferably open in new tab. saw somone somewhere say you should mess with default behaviours. though i feel like tab behaviour is more more common now and also "please stay at my site)

* the  `<cta-button>`  allows for highlighting innerText
* the  `<cta-button>`  allows to be clicked multiple times in a row spawning possibly more windows than needed
* the  `<cta-button>`  does not on hover tell you the location of where the link will take you

* none of my buttons (any button) allow for activation on enter
* button have no or diminishable outline on focus which makes it hard to see
* `<cta-button>`  has no tab-index / cant be tabbed to

// structure

* The [list] attribute on `<window-mac>` doesnt make much sense as it is.
not sure exactly but feels like the classes **.about__info-box** and **.about__image-box** does the same thing
right now its not possible to create more than two boxes, and they have either have to be a [list] or a [img] but can not be more than one of the type. i.e cant be two images or two lists.
which is weirdly restricting.

* a component contains its different slots even if they're empty as default. which feels like bad html.
like the page gets cluttred with invisible p, a and image tags. doesnt seem very accessible to me

## whats missing fam?

* windows should be able to drag and drop around, able to be layered over one another without pulling both windows
only window in the top of the stack should be targetted

* corner buttons should be able to close and minimize windows. the design should become compacter when you do.

* there should be a nav bar at the top, that will allow you to toggle closed windows back on.
and also being able to jump straight down to what ever window you'd like to see.

### you know what would be cool though?

* just a lil function that sets my age by year, new Date(), should be easy enough "🙂" so i dont have to hard code it
