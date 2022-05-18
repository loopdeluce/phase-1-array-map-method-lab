const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 const titleCased = () => {

  const wordArrays = [];
  const capitalArrays = [];
  const finalTitles = [];
  
  for (let title of tutorials) {
    wordArrays.push(title.split(" "));
  }
  
  for (let title of wordArrays) {
    capitalArrays.push(title.map((word) => word[0].toUpperCase() + word.substring(1, word.length)));
  }
  
  for (let title of capitalArrays) {
    finalTitles.push(title.join(' '));
  }

  return finalTitles;

 };


