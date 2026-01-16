/* words-all.js
   Expanded guess dictionary + validation set
   This is used ONLY for guess validity.
   Daily answers come from PUCKLE_ANSWER_EASY / PUCKLE_ANSWER_MED.
*/

// A bigger, reasonable 5-letter guess list.
// Add more anytime. Keep uppercase here.
window.PUCKLE_GUESS_WORDS = [
  "ABOUT","ABOVE","ABUSE","ACTOR","ACUTE","ADMIT","ADOPT","AFTER","AGAIN","AGENT",
  "AGREE","AHEAD","ALARM","ALBUM","ALERT","ALIEN","ALIVE","ALLOW","ALONE","ALONG",
  "ALTER","AMONG","ANGER","ANGLE","ANGRY","APART","APPLE","APPLY","ARENA","ARGUE",
  "ARISE","ARMOR","ARRAY","ARROW","ASIDE","AUDIO","AVOID","AWARD","AWARE",

  "BACON","BASIC","BEACH","BEGIN","BEING","BELOW","BENCH","BIRTH","BLACK","BLAME",
  "BLAST","BLEED","BLEND","BLIND","BLOCK","BLOOD","BOARD","BOOST","BOOTH","BOUND",
  "BRAIN","BRAVE","BREAD","BREAK","BRICK","BRIEF","BRING","BROAD","BROWN","BRUSH",
  "BUILD","BUILT","BUYER",

  "CABLE","CARRY","CATCH","CAUSE","CHAIN","CHAIR","CHALK","CHANCE","CHANGE","CHAOS",
  "CHARM","CHART","CHASE","CHEAP","CHECK","CHEST","CHIEF","CHILD","CHILL","CHOIR",
  "CHOOSE","CHORD","CIVIL","CLAIM","CLASS","CLEAN","CLEAR","CLICK","CLIMB","CLOCK",
  "CLOSE","CLOUD","COACH","COAST","COLOR","COULD","COUNT","COURT","COVER","CRANE",
  "CRASH","CRIME","CROSS","CROWD","CRUEL","CRUSH","CURVE","CYCLE",

  "DAILY","DANCE","DEALT","DEATH","DEPTH","DOING","DOUBT","DOZEN","DRAFT","DRAMA",
  "DRAWN","DREAM","DRESS","DRILL","DRINK","DRIVE","DROVE",

  "EARLY","EARTH","EIGHT","EMPTY","ENJOY","ENTER","EQUAL","ERROR","EVENT","EVERY",
  "EXACT","EXIST","EXTRA",

  "FAITH","FALSE","FAULT","FENCE","FIELD","FIFTH","FIFTY","FINAL","FIRST","FIXED",
  "FLAME","FLASH","FLEET","FLICK","FLOOR","FLUSH","FOCUS","FORCE","FRAME","FRESH",
  "FRONT","FRUIT","FULLY","FUNNY",

  "GIANT","GIVEN","GLASS","GLIDE","GLINT","GLOVE","GOALS","GRACE","GRADE","GRAIN",
  "GRAND","GRANT","GRASS","GREAT","GREEN","GRIND","GROUP","GUESS",

  "HAPPY","HARDY","HEART","HEAVY","HONEY","HORSE","HOTEL","HOUSE","HUMAN",

  "IDEAL","IMAGE","INDEX","INNER","INPUT","ISSUE",

  "JOINT","JUDGE",

  "KNOWN",

  "LABEL","LARGE","LASER","LATER","LAYER","LEARN","LEAST","LEVEL","LIGHT","LIMIT",
  "LOCAL","LOGIC","LOOSE","LUCKY",

  "MAJOR","MAKER","MARCH","MATCH","MAYBE","METAL","MODEL","MONEY","MONTH","MOTOR",
  "MOUNT","MOUSE","MUSIC",

  "NEEDS","NEVER","NIGHT","NOISE","NORTH",

  "OFFER","OFTEN","ORDER","OTHER","OWNER",

  "PANEL","PAPER","PARTS","PARTY","PEACE","PHONE","PHOTO","PIECE","PIVOT","PLANE",
  "PLANT","PLATE","PLAYS","POINT","POWER","PRESS","PRICE","PRIDE","PRIME","PRINT",
  "PRIOR","PROOF","PROUD","PUCKS","PULSE",

  "QUICK","QUIET",

  "RAILS","RANGE","RANKS","RAPID","RATIO","REACH","READY","RIGHT","RIVER","ROUND",
  "ROAST","ROUGH","ROUTE",

  "SCALE","SCENE","SCOPE","SCORE","SERVE","SEVEN","SHAKE","SHARE","SHARP","SHIFT",
  "SHINE","SHIRT","SHOCK","SHOOT","SHORT","SHOTS","SHOWN","SIGHT","SINCE","SKILL",
  "SLASH","SLATE","SLIDE","SMASH","SMILE","SMOKE","SNIPE","SOLID","SOUND","SOUTH",
  "SPACE","SPARE","SPEAK","SPEED","SPEND","SPENT","SPARK","SPORT","STAGE","STAND",
  "START","STATE","STEEL","STICK","STILL","STONE","STORE","STORM","STORY","STRIP",
  "STYLE","SUGAR","SUPER","SWEET","SWEEP","SWIRL",

  "TABLE","TAKEN","TASTE","TEARS","TEACH","THANK","THEME","THINK","THIRD","THOSE",
  "THREE","THROW","TIGHT","TIMER","TIRED","TITLE","TODAY","TOPIC","TOTAL","TOUCH",
  "TOUGH","TRACE","TRACK","TRADE","TRAIN","TREND","TRIAL","TRIED","TRUTH",

  "UNDER","UNION","UNITY","UNTIL","UPPER","USUAL",

  "VALUE","VIDEO","VISIT","VOICE",

  "WALLS","WASTE","WATCH","WATER","WEARY","WHERE","WHILE","WHITE","WHOLE","WOMAN",
  "WORLD","WORRY","WORTH","WOULD","WRITE",

  "YOUNG",

  "ZONES"
].map(w => w.toUpperCase()).filter(w => w.length === 5);

// Keep your prior EXTRA list (including MALLET even though it’s 6 letters - we drop it automatically)
const EXTRA = [
  "WEARY","PLAYS","VAGUE","CRANE","SLATE","ADIEU","ROAST","TEARS","STONE","ARISE",
  "PUCKS","GOALS","MALLET","BANKS","RAILS","SNIPE","SMASH","SPEED","SCORE","TABLE"
].map(w => w.toUpperCase()).filter(w => w.length === 5);

// Build validation set:
// - Common words (your air hockey list)
// - Answer pools (easy/medium)
// - Expanded guess words
// - Extras
const ALL = new Set(
  []
    .concat((window.PUCKLE_COMMON_WORDS || []).map(w => (w||"").toUpperCase()))
    .concat((window.PUCKLE_ANSWER_EASY || []).map(w => (w||"").toUpperCase()))
    .concat((window.PUCKLE_ANSWER_MED  || []).map(w => (w||"").toUpperCase()))
    .concat((window.PUCKLE_GUESS_WORDS || []).map(w => (w||"").toUpperCase()))
    .concat(EXTRA)
    .filter(w => (w||"").length === 5)
);

window.PUCKLE_ALL_WORDS_SET = ALL;
