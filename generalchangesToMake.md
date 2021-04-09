## General
​
You've got a lot of work done and its really starting to come together. Havent used a route for the topics `/topics/:topic_slug` which is fine but could provide some user feedback so its clear what they are looking at.
​
## Code
​
Some issues with voter some of which stems from not quite getting the isLoading and Error pattern down. you also giving buttons the same Id, so you can access them later, but you could do this from props.
​
you could clean up quite a few of the render methods by reducing the nesting of divs
​
### Sorting
​
When you add in sorting later think about your componentDidUpdate Logic and what you want to compare
​
## Error handling
​
Do some, please.
​
​
Rough guide is whenever you make an api request thats us giving control away to another source, its likley therefore that an error could occur, you dont need to use an "Error Component" for all situation but show that you have thought about them and provide appropriate feedback to users.
​
## UX
​
its still early days but generally you have a nice layout and a good design idea, make sure to add some responsive elements later, think about where users might want or need feedback and go from there :)
