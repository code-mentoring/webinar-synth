let synth;

// Workaround for the audio context warning
const start = () => {
  window.removeEventListener('click', start);

  //create a synth and connect it to the main output (your speakers)
  synth = new Tone.Synth().toDestination();

  // Register the buttons to play the notes
  document.querySelectorAll('[data-key]').forEach(k => {
    const key = k.getAttribute('data-key');
    k.addEventListener('click', () => playNote(key));
  });

  document.getElementById('waveform').addEventListener('change', e => {
    synth.oscillator.type = e.target.value;
  })
};
window.addEventListener('click', start);


const playNote = (key) => {
  synth.triggerAttackRelease(key, '8n');
}



const keyMap = {
  "a" :"c4",
  "w" :"c#4",
  "s" :"d4",
  "e" :"d#4",
  "d" :"e4",
  "f" :"f4",
  "t" :"f#4",
  "g" :"g4",
  "y" :"g#4",
  "h" :"a4",
  "u" :"a#4",
  "j" :"b4",
  "k" :"c5",
  "o" :"c#5",
  "l" :"d5",
  "p" :"d#5",
  ";" :"e5",
  "'" :"f5",
}

document.addEventListener('keydown', (e) => {
  if (keyMap[e.key]) playNote(keyMap[e.key]);
});
