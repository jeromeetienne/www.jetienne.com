# What can we do to improve studio

* Main IDEA
* split 3d and web code

# What do i mean by 3d and web code
- (it is a term i coined for a lack of better one)
- "3d code" is the 3d viewport in the middle
- "web code" is the website ui around it
- here is a initial page in our wiki explaining [in more tech details]( https://bitbucket.org/daqri1/4dstudio/wiki/Viewport%20in%20Iframe%20architecture)

# Goal

Split 3d and web code

# Why to split
- currently it is all too interwinded.

- the 3d+web code is not in anybody head
  - nobody understand it all
  - there is no clear clear boundary between each
  - it is a bad trend, which lead to unmaintainable code

- it slows down progress for both part
  - it make the web part hard to update
  - it make the 3d part hard to update
  - it slows down progress

# split it to divide and conquere
- Goal:
  - i would like to fix it
  - i think we can improve the structure
  - to make it happen
- split the big code into 2 smaller ones
  - easier to comprehend

# How ?
- to split our 3d viewport from our studio web code
- clearly define the API between each
- it will cleanup the relation
- so each part will be able to move faster

# Gain ? Cleaner Code, Faster dev
- cleaner code, more maintainable
- faster progress in both, individually
- faster as a whole

# How big is the modification
- 'not that big' i would say...
- a matter of months.
- not that big because we would end up with a much cleaner code.
- a cleaner more maintainable code on which we could rely to build on top

- i experimented with a prototype. 
- We obviously need to look more before deciding anything but it seems clearly feasable.


# Make Sense: 3d and web are 2 != things
- to code 3d and to code a website are != things

- the skills needed is not the same
  - web devs knows how to do stuff that 3d people dont
  - 3d people knows how to do stuff that web devs dont
  - when web devs are doing 3d, they dont have the needed experience
  - and unfortunatly sometime when i look at the code, it shows

- people location/timezone is not the same
  - web team / montain view
  - three.js team / dublin

## Relation with angular 1.4
- This split may help make the web code easier to update.

- It is relevant because current UI is in angular 1.4.
- This framework has been *announced dead* by its authors.
- They promotes now angular 2.0 which is a total rewrite.
- so we have to rewrite the web side sooner and later.
- it is a matter of *when* not a matter of *if*

- Whenever we decide to do it, it will be easier if the web part is clearly 
  distinct from the 3d part.

# One Step Further ?
- as possible step further, we could even directly reuse a slightly modified three.js editor
- daqri edge isnt in the 3d editor. we do AR
  - having a 3d editor to edit this AR is only part of our task
- more and more, we are reimplementing three.js editor
  - playcanvas/goosystem are doing the same
- i see it as a waste of rescource
- What about reusing three.js editor as much as possible ?
  - we keep our UI and just reuse the viewport part
  - i did a prototype, it is relatively easy
- NOTE: is that too much ? may be. but worth considering
