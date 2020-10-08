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

