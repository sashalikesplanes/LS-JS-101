// input string
// output string

// split sentence into array of works
// for each word
//  if word is 5 letters or more reverse the word
// join the array into output

const reverseWord = word => word.split('').reverse().join('');

const reverseWords = sentence => {
  let sentenceArr = sentence.split(' ');
  sentenceArr = sentenceArr.map(word => {
    if (word.length >= 5) {
      return reverseWord(word);
    }
    return word;
  });
  console.log(sentenceArr.join(' '));
  return sentenceArr.join(' ');
};

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"