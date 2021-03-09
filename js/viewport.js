const video = document.querySelector("video#playback");
video.srcObject = renderer0.domElement.captureStream();
video.play();

video.onclick = () => {
  video.requestPointerLock();
  if (newLockedMouse) {
    vmouseOffset.x = (event.clientX / window.innerWidth) * 2 - 1;
    vmouseOffset.y = -(event.clientY / window.innerHeight) * 2 + 1;
    newLockedMouse = false;
  }
  lockedMouse = true;
};
