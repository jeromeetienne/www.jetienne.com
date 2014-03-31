;(function(){	
	
	//////////////////////////////////////////////////////////////////////////////////
	//		threex page							//
	//////////////////////////////////////////////////////////////////////////////////
	
	var mixerPlane	= addPage({
		url		: 'http://jeromeetienne.github.io/stellar7/',
		position	: new THREE.Vector3(4,2,5),
	})
	mixerPlane.scale.multiplyScalar(2)

	//////////////////////////////////////////////////////////////////////////////////
	//		threejsgames.com (in 2d not to slow down the whole page)	//
	//////////////////////////////////////////////////////////////////////////////////
	
	var mixerPlane	= addPage({
		url		: 'http://jeromeetienne.github.io/threex/',
		position	: new THREE.Vector3(-4,2,5),
	})
	mixerPlane.scale.multiplyScalar(2)

	//////////////////////////////////////////////////////////////////////////////////
	//		comment								//
	//////////////////////////////////////////////////////////////////////////////////
	
	var tvSet	= new THREEx.TvSet()
	tvSet.object3d.position.x	= 0
	tvSet.object3d.position.y	= 0
	tvSet.object3d.position.z	= 0
	tvSet.object3d.scale.multiplyScalar(10)
	
	scene.add(tvSet.object3d)

	//////////////////////////////////////////////////////////////////////////////////
	//		create a Plane for THREEx.HtmlMixer				//
	//////////////////////////////////////////////////////////////////////////////////

	var rootUrl	= 'room-threejsgames-tvsetmenu.html'

	// create the iframe element
	var domElement	= document.createElement('iframe')
	domElement.src	= rootUrl;
	domElement.style.border	= 'none'
	// create the plane
	var mixerPlane	= new THREEx.HtmlMixer.Plane(mixerContext, domElement, {
		planeW	: 1/2.2,
		planeH	: 1/2.85,
	})
	// mixerPlane.object3d.scale.multiplyScalar(2)
	// scene.add(mixerPlane.object3d)
	onRenderFcts.push(function(delta, now){
		mixerPlane.update(delta, now)
	})
	tvSet.setScreenPlane(mixerPlane.object3d)

	//////////////////////////////////////////////////////////////////////////////////
	//		comment								//
	//////////////////////////////////////////////////////////////////////////////////
			
	/**
	 * what is the state automata
	 * - state = watching or walking
	 * - if state === walking and distance to object < threshold
	 *   goto state = watching
	 * - if state === watching and press esc then goto state walking 
	 */

	var state	= 'walking'
	onRenderFcts.push(function(){
		var distanceTo	= player.character.root.position.distanceTo(tvSet.object3d.position)
	// console.log('distanceTo', distanceTo)
		if( state === 'walking' && distanceTo < 4 )	gotoWatching()
	})

	document.querySelector('#homeOsd').addEventListener('click', function(){
		domElement.src	= rootUrl;
	});

	document.body.addEventListener('keydown', function(event){
		if( event.keyCode === 27 && state === 'watching' )	gotoWalking()
	})

	document.querySelector('#exitOsd').addEventListener('click', function(){
		if( state === 'watching' )	gotoWalking()
	})

	function gotoWatching(){
		console.log('goto watching')
		state	= 'watching'
		cameraControlsDisabled	= true
		camera.position.copy(tvSet.object3d.position)
		camera.position.add(new THREE.Vector3(0,0.31,0.6).multiply(tvSet.object3d.scale))
		camera.lookAt(new THREE.Vector3(0,camera.position.y,1))
		
		document.querySelector('#homeOsd').classList.toggle('visible')
		document.querySelector('#exitOsd').classList.toggle('visible')
	}

	function gotoWalking(){
		state	= 'walking'	
		cameraControlsDisabled	= false	
		var delta	= player.character.root.position.clone().sub(tvSet.object3d.position)
		delta.setLength(5)
		player.character.root.position
			.copy(tvSet.object3d.position)
			.add(delta)
			
		// player.character.root.lookAt(tvSet.object3d.position)

		document.querySelector('#homeOsd').classList.toggle('visible')
		document.querySelector('#exitOsd').classList.toggle('visible')
	}

	//////////////////////////////////////////////////////////////////////////////////
	//		menu button							//
	//////////////////////////////////////////////////////////////////////////////////

	
	;(function(){
		var material	= new THREE.MeshPhongMaterial({
			color	: 'cyan'
		})
		var mesh	= new THREEx.Text('Menu')
		mesh.material	= material
		mesh.scale.multiplyScalar(1/20)
		mesh.position.x	= -0.125
		mesh.position.y	= 0.02
		mesh.position.z	= 0.25
		tvSet.object3d.add(mesh)

		// compute geometry size
		var geometry	= mesh.geometry
		geometry.computeBoundingBox();
		var size	= new THREE.Vector3();
		size.x	= (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
		size.y	= (geometry.boundingBox.max.y - geometry.boundingBox.min.y)
		size.z	= (geometry.boundingBox.max.z - geometry.boundingBox.min.z)
	
		// create the boundingBox if needed
		var boundingBox	= new THREE.Mesh(new THREE.CubeGeometry(1,1,1), new THREE.MeshBasicMaterial({
			wireframe	: true
		}))
		boundingBox.visible	= false
		boundingBox.scale.copy(size)
		mesh.add(boundingBox)	
		
		// build the underline
		var underlineH	= size.y / 6;
		var deltaY	= size.y / 8;
		var underline	= new THREE.Mesh(new THREE.CubeGeometry(size.x, underlineH, size.z), material)
		underline.position.y	+= - deltaY - underlineH/2
		underline.visible	= false
		mesh.add(underline)
		
		domEvents.bind(boundingBox, 'click', function(event){
			domElement.src	= rootUrl;
		});

		// bind 'mouseover'
		domEvents.bind(boundingBox, 'mouseover', function(event){
			document.body.style.cursor	= 'pointer';
			material.color.set('blue')
			underline.visible	= true
		}, false)

		// bind 'mouseout'
		domEvents.bind(boundingBox, 'mouseout', function(event){
			document.body.style.cursor	= 'default';
			material.color.set('cyan')
			underline.visible	= false
		}, false)
	})()	

	//////////////////////////////////////////////////////////////////////////////////
	//		watching button							//
	//////////////////////////////////////////////////////////////////////////////////
	;(function(){
		var material	= new THREE.MeshPhongMaterial({
			color	: 'cyan'
		})
		var mesh	= new THREEx.Text('Play')
		mesh.material	= material
		mesh.scale.multiplyScalar(1/20)
		mesh.position.x	= +0.125
		mesh.position.y	= 0.02
		mesh.position.z	= 0.25
		tvSet.object3d.add(mesh)

		// compute geometry size
		var geometry	= mesh.geometry
		geometry.computeBoundingBox();
		var size	= new THREE.Vector3();
		size.x	= (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
		size.y	= (geometry.boundingBox.max.y - geometry.boundingBox.min.y)
		size.z	= (geometry.boundingBox.max.z - geometry.boundingBox.min.z)
	
		// create the boundingBox if needed
		var boundingBox	= new THREE.Mesh(new THREE.CubeGeometry(1,1,1), new THREE.MeshBasicMaterial({
			wireframe	: true
		}))
		boundingBox.visible	= false
		boundingBox.scale.copy(size)
		mesh.add(boundingBox)	
		
		// build the underline
		var underlineH	= size.y / 6;
		var deltaY	= size.y / 8;
		var underline	= new THREE.Mesh(new THREE.CubeGeometry(size.x, underlineH, size.z), material)
		underline.position.y	+= - deltaY - underlineH/2
		underline.visible	= false
		mesh.add(underline)

		
		domEvents.bind(boundingBox, 'click', function(event){
			gotoWatching()
		});

		// bind 'mouseover'
		domEvents.bind(boundingBox, 'mouseover', function(event){
			document.body.style.cursor	= 'pointer';
			material.color.set('blue')
			underline.visible	= true
		}, false)

		// bind 'mouseout'
		domEvents.bind(boundingBox, 'mouseout', function(event){
			document.body.style.cursor	= 'default';
			material.color.set('cyan')
			underline.visible	= false
		}, false)
	})()	
})()
