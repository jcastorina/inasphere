//*****************/
//   Add Demo Camera
//
const devCamera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
//const cw = w / 2;
//const ch = h / 2;
devCamera.rotation.order = "YXZ";
//devCamera.position.y = 5;

devCamera.name = "devCamera";

//devCamera.setViewOffset(w, h, cw * 0, ch * 0, cw, ch);
// devCamera.setViewOffset(w, h, cw * 1, ch * 0, cw, ch);
// devCamera.setViewOffset(w, h, cw * 0, ch * 1, cw, ch);
// devCamera.setViewOffset(w, h, cw * 1, ch * 1, cw, ch);

//*****************/

//*****************/
//   Add Player Camera
//
window.playerCamera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
playerCamera.name = "playerCamera";
playerCamera.rotation.order = "YXZ";
playerCamera.rotation.x = -Math.PI / 2;

//*****************/
