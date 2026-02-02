/* words-all.js
   Validation set ONLY (guess validity).
   Daily answers come from PUCKLE_ANSWER_EASY / PUCKLE_ANSWER_MED.
   Guess words come from words-10k.js (window.PUCKLE_GUESS_WORDS).
*/

// Optional extras you always want valid (keep 5 letters only)
const EXTRA = [
  "WEARY","PLAYS","VAGUE","CRANE","SLATE","ADIEU","ROAST","TEARS","STONE","ARISE",
  "PUCKS","GOALS","BANKS","RAILS","SNIPE","SMASH","SPEED","SCORE","TABLE"
].map(w => w.toUpperCase()).filter(w => w.length === 5);

// Build validation set:
// - Common words (air hockey list)
// - Answer pools (easy/medium)
// - Guess words (10k list)
// - Extras
const ALL = new Set(
  []
    .concat((window.PUCKLE_COMMON_WORDS || []).map(w => (w || "").toUpperCase()))
    .concat((window.PUCKLE_ANSWER_EASY  || []).map(w => (w || "").toUpperCase()))
    .concat((window.PUCKLE_ANSWER_MED   || []).map(w => (w || "").toUpperCase()))
    .concat((window.PUCKLE_GUESS_WORDS  || []).map(w => (w || "").toUpperCase()))
    .concat(EXTRA)
    .filter(w => (w || "").length === 5)
);

window.PUCKLE_ALL_WORDS_SET = ALL;
