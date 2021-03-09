const renderer0 = new THREE.WebGLRenderer();
renderer0.setSize(w, h);

renderer0.domElement.style.display = "none";
renderer0.domElement.style.position = "absolute";
document.body.appendChild(renderer0.domElement);
