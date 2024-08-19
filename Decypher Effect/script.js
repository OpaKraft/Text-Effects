const symbolsList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const originalText = new SplitType('p')
const paragraphText = new SplitType('p')
let index = 0

paragraphText.chars.forEach((char, i) => {   
    gsap.set(char, {
        innerHTML : symbolsList[Math.floor(Math.random() * symbolsList.length)],
    })
})

gsap.set(paragraphText.lines, {
    x: -10
})

const tl = gsap.timeline({
    repeatDelay: 0.5
})

tl
    .to(paragraphText.chars, {
        duration: 0.001,
        innerHTML: () => {
            index++
            if (originalText.chars[index-1].textContent !== ' ') {
                return originalText.chars[index-1].textContent
            } else {
                return ' '
            }
        },
        stagger: 0.003,
    })
    .to('p', {
        opacity: 1,
        duration: 1.5
    }, '<')
    .to(paragraphText.lines, {
        x: 0,
        stagger: 0.05,
        duration: 2,
        ease: 'back.out(1.7)'
        
    }, '<')

// To do:
// Add the effect to the title and the link element
// Add a little mouvement to the container
// Post the final resutlt on codepen
// multiple layers of text changes ???
// Refactor the code (maybe...)









