const update = (delta) => {
  if (game.camera.name === "devCamera") {
    let DEV_CAM_SPEED = 0.5 * delta;

    devCamera.rotation.y = -me.mouse.curr.x;
    devCamera.rotation.x = -me.mouse.curr.y;

    if (me.keyboard[87]) {
      //w
      devCamera.position.z -=
        DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y + Math.PI / 2);
      devCamera.position.x += DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y);
    }
    if (me.keyboard[65]) {
      //a
      devCamera.position.z += DEV_CAM_SPEED * Math.sin(devCamera.rotation.y);
      devCamera.position.x -=
        DEV_CAM_SPEED * Math.sin(devCamera.rotation.y + Math.PI / 2);
    }
    if (me.keyboard[83]) {
      //s
      devCamera.position.z +=
        DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y + Math.PI / 2);
      devCamera.position.x -= DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y);
    }
    if (me.keyboard[68]) {
      //d
      devCamera.position.z -= DEV_CAM_SPEED * Math.sin(devCamera.rotation.y);
      devCamera.position.x +=
        DEV_CAM_SPEED * Math.sin(devCamera.rotation.y + Math.PI / 2);
    }
  }
};
