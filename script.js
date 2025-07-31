const storyTexts = [
  "Remember the first time we met? It still makes me smile.",
  "Our first date, the way you laughed, the way you looked at me... unforgettable.",
  "I love the way you care, how you make even a boring day fun.",
  "Through every silly moment and every serious one, I’ve loved you more each day."
];


const reasonList = [
  "You smiled at me when I need it most.",
  "You always know how to give me hope.",
  "Your ability to hug me tight amazes me.",
  "You make me feel safe.",
  "You’re the only one who truly dreamed together.",
  "Because you never stopped believing in us.",
  "I love how you always comforted me.",
  "You give me the courage to share a secret.",
  "You listen when I laugh so hard we cry.",
  "You treat me like I’m your whole world.",
  "You sat under the stars when I need it most.",
  "You always know how to hold my hand.",
  "Your ability to cry happy tears amazes me.",
  "You make me feel complete.",
  "You’re the only one who truly makes everything better.",
  "Because you never gave up on me.",
  "I love how you always take care of me.",
  "You give me the courage to smile again.",
  "You listen when I’m scared.",
  "You treat me like I matter.",
  "You danced in the rain when I need it most.",
  "You always know how to share that ice cream.",
  "Your ability to get lost together amazes me.",
  "You make me feel warm inside.",
  "You’re the only one who truly made me laugh.",
  "Because you never made me feel alone.",
  "I love how you always believe in us.",
  "You give me the courage to love more.",
  "You listen when I’m silent.",
  "You treat me like I’m your everything.",
  "You watched our favorite movie when I need it most.",
  "You always know how to share a secret.",
  "Your ability to hug me tight amazes me.",
  "You make me feel loved.",
  "You’re the only one who truly understands me.",
  "Because you never gave up on love.",
  "I love how you always smiled at me.",
  "You give me the courage to move forward.",
  "You listen when I’m hurting.",
  "You treat me like I’m your world.",
  "You held my hand when I need it most.",
  "You always know how to cry happy tears.",
  "Your ability to comfort me amazes me.",
  "You make me feel like the luckiest person alive.",
  "You’re the only one who truly got lost with me.",
  "Because you never stop caring.",
  "I love how you always make everything better.",
  "You give me the courage to believe in us.",
  "You listen when I don’t say a word.",
  "You treat me like I’m enough."
];


const quotes = [
  "In your smile, I found my peace.",
  "You’re the hug, and I never want to lose that.",
  "Every shared that ice cream with you is a gift.",
  "You make my heart feel safe.",
  "Love is real, because you held my hand.",
  "No one else has ever made me feel like I completed me.",
  "You're not just my comfort, you're my always.",
  "With you, even crying happy tears feels like magic.",
  "I could search the world and never find another you.",
  "You are my hope, my joy, my love.",
  "In your arms, I found my peace.",
  "You’re the laughter, and I never want to lose that.",
  "Every moment under the stars with you is a gift.",
  "You make my heart feel whole.",
  "Love is real, because you smiled at me.",
  "No one else has ever made me feel like I matter.",
  "You're not just my partner, you're my always.",
  "With you, even doing nothing feels like magic.",
  "I could search the world and never find another heartbeat like yours.",
  "You are my forever, my joy, my love.",
  "In your laugh, I found my peace.",
  "You’re the whisper, and I never want to lose that.",
  "Every touch with you is a gift.",
  "You make my heart feel loved.",
  "Love is real, because you never gave up.",
  "No one else has ever made me feel like I belong.",
  "You're not just my sunshine, you're my always.",
  "With you, even tears feel like magic.",
  "I could search the world and never find another soul like yours.",
  "You are my calm, my joy, my love.",
  "In your eyes, I found my peace.",
  "You’re the reason, and I never want to lose that.",
  "Every breath with you is a gift.",
  "You make my heart feel alive.",
  "Love is real, because you dreamed with me.",
  "No one else has ever made me feel like I could fly.",
  "You're not just my truth, you're my always.",
  "With you, even time stands still.",
  "I could search the world and never find another touch like yours.",
  "You are my home, my joy, my love.",
  "In your presence, I found my peace.",
  "You’re the light, and I never want to lose that.",
  "Every whisper with you is a gift.",
  "You make my heart feel everything at once.",
  "Love is real, because you chose me.",
  "No one else has ever made me feel like I’m enough.",
  "You're not just my heartbeat, you're my always.",
  "With you, even silence is perfect.",
  "I could search the world and never find another love like this.",
  "You are my miracle, my joy, my love."
];


let reasonIndex = 0;
let quoteIndex = 0;

function startExperience() {
  document.querySelector('.start-screen').style.display = 'none';
  document.getElementById('story').style.display = 'block';
  document.getElementById('bgMusic').play();
  startTyping();
  createHeartRain();
  rotateQuotes();
}

function startTyping() {
  storyTexts.forEach((text, i) => {
    setTimeout(() => {
      typeWriterEffect(text, document.getElementById(`section${i+1}`));
    }, i * 3000);
  });
}

function typeWriterEffect(text, targetElement) {
  let i = 0;
  targetElement.innerHTML = "";
  function type() {
    if (i < text.length) {
      targetElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

function nextReason() {
  document.getElementById("reasonText").innerText = reasonList[reasonIndex % reasonList.length];
  reasonIndex++;
}

function createHeartRain() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heart.innerText = '❤️';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

function rotateQuotes() {
  const quoteText = document.getElementById("quoteText");
  setInterval(() => {
    quoteText.innerText = quotes[quoteIndex % quotes.length];
    quoteIndex++;
  }, 4000);
}

function goToHeartPage() {
  window.location.href = "heart.html";
}

document.addEventListener('click', (e) => {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});
