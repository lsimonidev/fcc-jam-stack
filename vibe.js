const vibes = [
    '...and you are awesome!',
    '...and you are doing great!',
    '...and you are learning JAM Stack!',
    '...and happy xmas!',
];

let randomVibe = vibes[Math.floor(Math.random() * vibes.length)];

document.querySelector('.vibe').append(randomVibe);