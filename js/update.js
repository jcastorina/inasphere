const update = (delta) => {
  if (game.camera.name === "devCamera") {
    let DEV_CAM_SPEED = 0.5 * delta;

    // devCamera.rotation.y = -me.mouse.curr.x;
    // devCamera.rotation.x = -me.mouse.curr.y;

    devCamera.rotation.y -= me.mouse.last.x;
    devCamera.rotation.x -= me.mouse.last.y;

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
    if (me.keyboard[81]) {
      //q
      devCamera.position.y += DEV_CAM_SPEED;
    }
    if (me.keyboard[69]) {
      //e
      devCamera.position.y -= DEV_CAM_SPEED;
    }
  }
  if (game.camera.name === "playerCamera") {
    vehicle_cameraMount.rotation.y -= me.mouse.last.x;
    vehicle_camera.rotation.x -= me.mouse.last.y;

    if (me.keyboard[87]) {
      //w
      tether.rotation.x += 0.01;
    }
    if (me.keyboard[83]) {
      //s
      tether.rotation.x -= 0.01;
    }
    if (me.keyboard[65]) {
      //a
      tether.rotation.y += 0.01;
    }
    if (me.keyboard[68]) {
      //d
      tether.rotation.y -= 0.01;
    }
    // if (me.keyboard[65]) {
    //   //a
    //   devCamera.position.z += DEV_CAM_SPEED * Math.sin(devCamera.rotation.y);
    //   devCamera.position.x -=
    //     DEV_CAM_SPEED * Math.sin(devCamera.rotation.y + Math.PI / 2);
    // }
    // if (me.keyboard[83]) {
    //   //s
    //   devCamera.position.z +=
    //     DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y + Math.PI / 2);
    //   devCamera.position.x -= DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y);
    // }
    // if (me.keyboard[68]) {
    //   //d
    //   devCamera.position.z -= DEV_CAM_SPEED * Math.sin(devCamera.rotation.y);
    //   devCamera.position.x +=
    //     DEV_CAM_SPEED * Math.sin(devCamera.rotation.y + Math.PI / 2);
    // }
    // if (me.keyboard[81]) {
    //   //q
    //   devCamera.position.y += DEV_CAM_SPEED;
    // }
    // if (me.keyboard[69]) {
    //   //e
    //   devCamera.position.y -= DEV_CAM_SPEED;
    // }
  }
  me.mouse.last.x = me.mouse.last.y = 0;
};
