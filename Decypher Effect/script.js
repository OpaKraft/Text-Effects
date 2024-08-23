// decipherAnimation() function is a function that takes a list of symbols and apply a decipher effect to a target element.
// The function uses :
//  - GSAP library for animations (see https://greensock.com/gsap/)
//  - SplitType library for splitting the text into characters (see https://www.npmjs.com/package/split-type )

// Example of a chars list used for the animation :
let alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '?', '!']

// Using the decipherAnimation() function :
// 1. First parameter is the list of symbols you want to use
// 2. Second parameter is the duration of the animation in milliseconds
// 3. Third parameter is the target element you want to apply the animation to
decipherAnimation(alphabetList, 2, 'p');


//Function declaration :
function decipherAnimation(symbolList, duration, targetElement)  {
    
    index = 0;
    duration = duration / 1000;
    originalText = new SplitType(targetElement);
    paragraphText = new SplitType(targetElement);

    const tl = gsap.timeline({
    });

    tl.fromTo(paragraphText.chars, {
        innerHTML: () => {
            return symbolList[Math.floor(Math.random() * symbolList.length)]
        },
    }, 
    { 
        duration: duration,
        innerHTML: () => {
            index++
            if (originalText.chars[index-1].textContent !== ' ') {
                return originalText.chars[index-1].textContent
            } else {
                return ' '
            }
        },
        stagger: duration
    });
}











