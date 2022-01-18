const wordSizes = sentence => {
  if (sentence.trim() === '') return {};
  const sentenceArr = sentence.replace(/[^a-zA-Z\s]/g, '').split(' ').map(word => {
    return word.toLowerCase().length;
  }).sort();
  const wordLengthObj = {};
  for (let i = 0; i < sentenceArr.length; i += 1) {
    if (wordLengthObj[sentenceArr[i]]) wordLengthObj[sentenceArr[i]] += 1;
    else wordLengthObj[sentenceArr[i]] = 1;
  }
  console.log(wordLengthObj);
  return wordLengthObj;
};

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');