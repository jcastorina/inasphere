const FPS = 60;

const time = new THREE.Clock(false);
time.start();

const animate = () => {
  stats.begin();
  const delta = FPS / (1 / time.getDelta());
  requestAnimationFrame(animate);
  update(delta);
  renderer0.render(scene, game.camera);

  stats.end();
};
animate();
