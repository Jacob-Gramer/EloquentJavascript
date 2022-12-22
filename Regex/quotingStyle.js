let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.

let repl = /(^|\W)'|'(\W|$)/g;

console.log(text.replace(repl, '$1"$2'));