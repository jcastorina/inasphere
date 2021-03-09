//*****************/
//   CONTROL OBJECTS
//

const vmouse = new THREE.Vector2();
const vmouseOffset = new THREE.Vector2();
let lockedMouse = false;
let newLockedMouse = true;

const me = {
  keyboard: [],
  mouse: {
    down: false,
    rc: false,
    curr: {
      x: 0,
      y: 0,
    },
    past: {
      x: 0,
      y: 0,
    },
    last: {
      x: 0,
      y: 0,
    },
  },
};

const game = {
  camera: devCamera,
};

// renderer0.domElement.onclick = () => {
//   renderer0.domElement.requestPointerLock();
//   if (newLockedMouse) {
//     vmouseOffset.x = (event.clientX / window.innerWidth) * 2 - 1;
//     vmouseOffset.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     newLockedMouse = false;
//   }
//   lockedMouse = true;
// };

//*****************/
