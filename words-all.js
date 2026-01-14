// For now: allow all common words plus some extras.
// Later you can paste in a bigger 5-letter dictionary.
const EXTRA = [
  "WEARY","PLAYS","VAGUE","CRANE","SLATE","ADIEU","ROAST","TEARS","STONE","ARISE",
  "PUCKS","GOALS","MALLET","BANKS","RAILS","SNIPE","SMASH","SPEED","SCORE","TABLE"
].map(w => w.toUpperCase());

const ALL = new Set(
  (window.PUCKLE_COMMON_WORDS || []).map(w => w.toUpperCase()).concat(EXTRA)
);

window.PUCKLE_ALL_WORDS_SET = ALL;
