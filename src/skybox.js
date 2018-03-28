function createSkyBox (scene) {
  let skyGeometry = new THREE.BoxGeometry(100, 100, 100)
  let materialArray = [];
  for (let i = 0; i < 6; i++) {
    materialArray.push(new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture(FILES.SKY_IMAGES[i]),
      side: THREE.BackSide
    }))
  }
  let skyMaterial = new THREE.MeshFaceMaterial(materialArray)
  let skyBox = new THREE.Mesh(skyGeometry, skyMaterial)
  scene.add(skyBox)
  /*
  sky = new THREE.Sky()
  sky.scale.setScalar(100)
  scene.add(sky)
  let sunSphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(100, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  )
  sunSphere.position.y = - 700000
  sunSphere.visible = false
  scene.add(sunSphere)
  */
}
