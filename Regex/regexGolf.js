// Fill in the regular expressions

//car and cat
verify(//,
       ["my car", "bad cats"],
       ["camper", "high art"]);

//pop and prop
verify(/.../,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

//ferret, ferry, and ferrari
verify(/.../,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

//Any word ending in ious
verify(/.../,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

//A whitespace character followed by a period, comma, colon, or semicolon
verify(/.../,
       ["bad punctuation ."],
       ["escape the period"]);

//A word longer than six letters
verify(/.../,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

//A word without the letter e (or E)
verify(/.../,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}