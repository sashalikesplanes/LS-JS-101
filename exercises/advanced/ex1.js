const template1 =
  "The ADJ brown NOUN ADV\nVERB the ADJ yellow\nNOUN,who ADV VERB his\nNOUN and looks around";

const template2 = "The NOUN VERB the NOUN's NOUN.";

function randomReplaceOne(template) {
  // Pick the random word
  const ADJS = ["quick", "lazy", "sleepy", "noisy", "hungry"];
  const NOUNS = ["fox", "dog", "head", "leg", "tail", "cat"];
  const VERBS = ["jumps", "lifts", "bites", "licks", "pats"];
  const ADVS = ["easily", "lazily", "noisily", "excitedly"];

  let adj = ADJS[Math.floor(Math.random() * ADJS.length)];
  let noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  let verb = VERBS[Math.floor(Math.random() * VERBS.length)];
  let adv = ADVS[Math.floor(Math.random() * ADVS.length)];

  return template
    .replace(/ADJ/, adj)
    .replace(/NOUN/, noun)
    .replace(/VERB/, verb)
    .replace(/ADV/, adv);
}

function madlibs(template) {
  // Replace each match once, until the new string is the same as old Str
  let oldStr = template;
  let newStr = randomReplaceOne(template);
  do {
    oldStr = newStr;
    newStr = randomReplaceOne(newStr);
  } while (newStr !== oldStr);
  console.log(newStr);
}

madlibs(template1);
madlibs(template2);
