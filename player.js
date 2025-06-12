console.log("player.js loaded");

const appStartTime = Date.now();
let videoAttemptTime = null;
let videoStartTime = null;

const video = document.getElementById('videoPlayer');

video.addEventListener('loadstart', () => {
  videoAttemptTime = Date.now();
  console.log('🚀 Video Attempt at:', videoAttemptTime - appStartTime, 'ms since app load');
});

video.addEventListener('playing', () => {
  videoStartTime = Date.now();
  console.log('▶️ Video Play started at:', videoStartTime - appStartTime, 'ms since app load');
  console.log('⏱️ VST (Video Startup Time):', videoStartTime - videoAttemptTime, 'ms');
});

video.addEventListener('pause', () => {
  console.log('⏸️ Video paused');
});

video.addEventListener('ended', () => {
  console.log('🏁 Video ended');
});

video.addEventListener('error', (e) => {
  console.error('❌ Video error:', e);
});
