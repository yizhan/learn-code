let paragraph = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris at luctus nisl vel venenatis risus Aliquam faucibus turpis elit ullamcorper'

getRanDomWord (wordsSrc): string[] {
    let arrayOfWord = wordsSrc.split(' ');
    let randomWordStart = Math.floor((Math.random() * arrayOfWord.length / 2) + 1);
    let randomWordEnd = Math.floor((Math.random() * arrayOfWord.length / 2) + arrayOfWord.length / 2);
    return arrayOfWord.slice(randomWordStart, randomWordEnd)
}

console.log(getRanDomWord(paragraph))

/*
    get a array of strings that is part of paragrapth randomly
*/
