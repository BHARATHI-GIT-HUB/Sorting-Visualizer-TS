let audioContext: any = null;

export const playAudio = (freq: any) => {
  freq = parseFloat(freq);
  if (audioContext == null) {
    audioContext = new (AudioContext || window.webkitAudioContext)();
  }

  const duration = 0.1;
  const oscillator = audioContext.createOscillator();
  changeVolume(freq, oscillator);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
  oscillator.connect(audioContext.destination);
};

const changeVolume = (freq: any, oscillator: any) => {
  freq = parseFloat(freq);
  if (isFinite(freq)) {
    oscillator.frequency.value = freq;
  }
};
