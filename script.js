const photoInput = document.getElementById("photoInput");
const uploadBox = document.getElementById("uploadBox");

const uploadText = document.getElementById("uploadText");
const preview = document.getElementById("preview");

const generateButton =
  document.getElementById("generateButton");

const regenerate =
  document.getElementById("regenerate");

const copyButton =
  document.getElementById("copy");

const caption =
  document.getElementById("caption");

const mood =
  document.getElementById("mood");

const setting =
  document.getElementById("setting");

const palette =
  document.getElementById("palette");

const energy =
  document.getElementById("energy");


let selectedStyle = "cute";
let selectedLength = "short";

let currentPhoto = null;



/* =========================
   STYLE SELECTOR
========================= */

document.querySelectorAll(".style").forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".style")
      .forEach(item =>
        item.classList.remove("active")
      );

    button.classList.add("active");

    selectedStyle =
      button.dataset.style;

  });

});



/* =========================
   LENGTH SELECTOR
========================= */

document.querySelectorAll(".length").forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".length")
      .forEach(item =>
        item.classList.remove("active")
      );

    button.classList.add("active");

    selectedLength =
      button.dataset.length;

  });

});



/* =========================
   PHOTO UPLOAD
========================= */

photoInput.addEventListener("change", event => {

  const file =
    event.target.files[0];

  if (!file) return;

  showPhoto(file);

});



function showPhoto(file) {

  if (!file.type.startsWith("image/")) {

    alert("Please upload an image ♡");

    return;

  }

  currentPhoto = file;

  const imageURL =
    URL.createObjectURL(file);

  preview.src = imageURL;

  preview.classList.add("show");

  uploadText.classList.add("hidden");

  caption.textContent =
    "Ready when you are. ✦";

}



/* =========================
   DRAG & DROP
========================= */

uploadBox.addEventListener(
  "dragover",
  event => {

    event.preventDefault();

    uploadBox.style.transform =
      "translateY(-2px)";

  }
);


uploadBox.addEventListener(
  "dragleave",
  () => {

    uploadBox.style.transform = "";

  }
);


uploadBox.addEventListener(
  "drop",
  event => {

    event.preventDefault();

    uploadBox.style.transform = "";

    const file =
      event.dataTransfer.files[0];

    if (file) showPhoto(file);

  }
);



/* =========================
   DEMO CAPTIONS
========================= */

const captions = {

  cute: {

    short:
      "the sun really said “look at her” today… and honestly, i can’t even blame it. ☀️🎀",

    medium:
      "a tiny pretty moment for the camera ♡ everything felt a little softer today—the light, the breeze, even my mood. maybe i’ll keep this one close. ☁️",

    long:
      "some days arrive with the gentlest kind of magic. the light finds you at just the right angle, your favorite little details somehow look sweeter, and suddenly you’re smiling at a picture you didn’t even mean to take. ♡ perhaps this is my kind of ordinary—soft, sunny, and a little bit spoiled. 🎀☀️"

  },


  dreamy: {

    short:
      "caught somewhere between a daydream and a little piece of summer. ☁️♡",

    medium:
      "the kind of afternoon that feels borrowed from a dream—soft light resting everywhere, the world moving slowly, and me quietly keeping this little moment for myself. ✦",

    long:
      "there are moments that ask for nothing except to be noticed. a little light across the room, a quiet breeze, the softness of being exactly where you are. i think i’d like to stay here for a while longer, somewhere between a daydream and the real world. ♡"

  },


  classy: {

    short:
      "a quiet portrait of elegance, with just enough mischief hidden in the details. ♡",

    medium:
      "some moments do not need to be loud to be remembered. a composed little frame, softened by light, and a version of me i rather like today. ✦",

    long:
      "there is something beautiful about restraint—the way a quiet setting can make every detail speak a little louder. today, i let the light do most of the talking, while i simply stood there and let the moment become its own small portrait. ♡"

  },


  playful: {

    short:
      "oops… was i supposed to behave for the camera!? 🍒 hehe, too late.",

    medium:
      "one cute little picture turned into approximately seventeen poses. no regrets, obviously. ♡ if the camera is going to look at me, i might as well give it something fun to remember! ✦",

    long:
      "the original plan was to take one normal picture. one. somehow that became a tiny photoshoot, several dramatic poses, and me deciding that being adorable is a perfectly reasonable use of an afternoon. 🍒🎀 anyway… which one is your favorite?"

  },


  romantic: {

    short:
      "a little softness, a little blush, and suddenly the whole day feels romantic. ♡",

    medium:
      "maybe life is most romantic in the smallest details—the light on my skin, the quiet smile i didn’t plan, and this little moment i wish i could keep pressed between the pages of today. 💌",

    long:
      "i used to think romance had to arrive grandly, wrapped in flowers and music. perhaps it doesn’t. perhaps it is simply this: a gentle afternoon, a pretty little memory, and a heart that feels warm for no particular reason at all. ♡"

  },


  poetic: {

    short:
      "a fleeting frame, caught where daylight meets the quietest corner of my thoughts. ✦",

    medium:
      "the light settled softly upon the scene, turning an ordinary moment into something almost mythic. i remained there for a while, letting the afternoon write its own little verse around me. ♡",

    long:
      "a glass-soft moment suspended between one breath and the next; light spilling across the edges of the day, leaving every little detail touched with quiet wonder. i stood within it without asking for anything more, as though the world had briefly remembered how to be tender."

  },


  storybook: {

    short:
      "chapter one: she stepped into the sunlight, and the day decided to keep her. ✦",

    medium:
      "once upon a very ordinary afternoon, a little heroine found herself caught in a frame of warm light. she smiled, of course. some stories are sweetest when nothing extraordinary happens at all. ♡",

    long:
      "once upon a time, in a corner of the day no one thought to name, there was a girl who paused beneath the light. nothing grand happened—no castles, no spells, no distant kingdoms. only a quiet smile, a pretty little scene, and the feeling that perhaps this was magic enough."

  }

};



/* =========================
   DEMO GENERATOR
========================= */

function generateDemo() {

  let style =
    selectedStyle;

  if (style === "surprise") {

    const styles = [
      "cute",
      "dreamy",
      "classy",
      "playful",
      "romantic",
      "poetic",
      "storybook"
    ];

    style =
      styles[
        Math.floor(
          Math.random() * styles.length
        )
      ];

  }


  const result =
    captions[style][selectedLength];


  caption.textContent =
    result;


  const readings = {

    cute: [
      "soft & cheerful",
      "sunlit / everyday",
      "pastel + warm",
      "sweet little moment"
    ],

    dreamy: [
      "dreamy & tender",
      "quiet / atmospheric",
      "misty pastel",
      "ethereal"
    ],

    classy: [
      "elegant & composed",
      "polished / editorial",
      "soft neutrals",
      "graceful"
    ],

    playful: [
      "bright & mischievous",
      "casual / lively",
      "candy tones",
      "bouncy"
    ],

    romantic: [
      "warm & affectionate",
      "soft / intimate",
      "blush + cream",
      "tender"
    ],

    poetic: [
      "lyrical & introspective",
      "cinematic",
      "muted glow",
      "serene"
    ],

    storybook: [
      "whimsical & cinematic",
      "storybook scene",
      "fairy-tale pastels",
      "enchanted"
    ]

  };


  const data =
    readings[style];


  mood.textContent = data[0];
  setting.textContent = data[1];
  palette.textContent = data[2];
  energy.textContent = data[3];

}



/* =========================
   GENERATE
========================= */

generateButton.addEventListener(
  "click",
  () => {

    if (!currentPhoto) {

      alert(
        "Give me a photo first, darling ♡"
      );

      return;

    }

    generateButton.disabled = true;

    generateButton.textContent =
      "✦ reading your photo…";


    setTimeout(() => {

      generateDemo();

      generateButton.disabled = false;

      generateButton.textContent =
        "✦ READ PHOTO & GENERATE ✦";

    }, 900);

  }
);



/* =========================
   REGENERATE
========================= */

regenerate.addEventListener(
  "click",
  () => {

    if (!currentPhoto) {

      alert(
        "Upload a photo first ♡"
      );

      return;

    }

    generateDemo();

  }
);



/* =========================
   COPY
========================= */

copyButton.addEventListener(
  "click",
  async () => {

    await navigator.clipboard.writeText(
      caption.textContent
    );

    copyButton.textContent =
      "✓ copied";

    setTimeout(() => {

      copyButton.textContent =
        "♡ copy";

    }, 1200);

  }
);
