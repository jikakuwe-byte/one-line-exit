// Entry for make.fun's "The One-Line Exit" bounty: a single-line
// resignation letter that reads like a letter a person could actually
// send. The joke is bureaucratic heartbreak: after three years, the
// job description and the actual job finally meet in the hallway —
// and neither one recognises the other. Running the program prints
// the joke, and nothing else.

/** The joke: the resignation, the meeting, the non-recognition. */
function jokeLine(): string {
  const resign = "I hereby resign, effective immediately:";
  const meeting =
    "after three years, my job description and my actual job finally met in the hallway, and neither one recognised the other.";
  return `${resign} ${meeting}`;
}

console.log(jokeLine());
