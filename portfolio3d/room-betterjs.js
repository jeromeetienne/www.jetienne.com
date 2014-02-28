;(function(){
	var mixerPlane	= addPage({
		url		: 'http://betterjs.org',
		position	: new THREE.Vector3(0,1.4,6),
	})
	mixerPlane.scale.multiplyScalar(2)
	addPage({
		url		: 'tweetiframe.html',
		position	: new THREE.Vector3(-5,1,6),
		mixerPlaneOpts	: { elementW : 500, planeW: 1, planeH: 705/500 }
	})
})()