/* words-common.js
   Common vocabulary + curated daily answer pools (Easy/Medium)
*/

window.PUCKLE_COMMON_WORDS = [
  "pucks","goalie","rails","quick","banks","angle","wrist","slide","stick",
  "speed","skill","shots","slash","bump","score","timer","round","table",
  "light","front","serve","touch","grind","clean","tight","shake","focus",
  "edges","curve","glide","blade","press","smash","snipe","track","pivot",
  "sweep","flush","brisk","flick","crazy","zones","house","feint","drill",
  "parts","walls","ranks"
].map(w => w.toLowerCase());

/*
  Curated daily answer pools
  - Easy: common patterns, friendlier words
  - Medium: still fair, a bit more variety
  Keep these curated so the daily word never feels "Scrabble-y".
*/
window.PUCKLE_ANSWER_EASY = [
  "PUCKS","RAILS","BANKS","ANGLE","WRIST","SLIDE","STICK",
  "SPEED","SKILL","SHOTS","BUMP","SCORE","TIMER","ROUND","TABLE",
  "LIGHT","FRONT","SERVE","TOUCH","CLEAN","TIGHT","SHAKE","FOCUS",
  "EDGES","CURVE","GLIDE","BLADE","PRESS","TRACK","PIVOT",
  "SWEEP","FLUSH","BRISK","FLICK","ZONES","HOUSE","FEINT","DRILL",
  "PARTS","WALLS","RANKS",

  // A few classic “good opener” style words
  "CRANE","SLATE","ARISE","TEARS","ROAST","STONE","WEARY","VAGUE"
].map(w => w.toUpperCase()).filter(w => w.length === 5);

window.PUCKLE_ANSWER_MED = [
  // Slightly spicier but still normal English
  "GRIND","SMASH","SNIPE","SLASH","QUICK","CRAZY",
  "PULSE","SPARK","SHARP","SHIFT","TRACE","SCOPE",
  "SWIRL","BRAVE","CLOUD","FRAME","BLAST","DRIVE",
  "GLINT","PRIDE","CHALK","SWEET","ROUGH","CROSS",
  "SNEAK","FLEET","CLASH","STAND","SOUND","VALUE"
].map(w => w.toUpperCase()).filter(w => w.length === 5);
