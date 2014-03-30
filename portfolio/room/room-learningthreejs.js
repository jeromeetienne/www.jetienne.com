;(function(){
	// addPage({
	// 	url		: 'http://jeromeetienne.github.io/threex/',
	// 	position	: new THREE.Vector3(3,1,2),
	// })

	// addPage({
	// 	url		: 'http://www.threejsgames.com/index2d.html',
	// 	position	: new THREE.Vector3(-3,1,2),
	// })

	//////////////////////////////////////////////////////////////////////////////////
	//		blog Homepage - super slow					//
	//////////////////////////////////////////////////////////////////////////////////
	
	var mixerPlane	= addPage({
		url		: 'http://learningthreejs.com/',
		position	: new THREE.Vector3(0,3,0),
		mixerPlaneOpts	: {
			elementW: 1024,
		},
	})
	mixerPlane.scale.multiplyScalar(4)

	//////////////////////////////////////////////////////////////////////////////////
	//		@learningthreejs timeline					//
	//////////////////////////////////////////////////////////////////////////////////
	
	var htmlText	= '<body style="margin: 0px; padding: 0px; background-color: #bbbbbb; overflow: hidden;">'
		+ '<a class="twitter-timeline" href="https://twitter.com/LearningThreejs" data-widget-id="436470909931507712">Tweets by @LearningThreejs</a>'
		+ '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'
	var mixerPlane	= addPageHTML(htmlText, {
		position	: new THREE.Vector3(-3.6,1.3,6),
		mixerPlaneOpts	: {
			elementW: 512,
			planeW	: 1, 
			planeH	: 600/512,
		},
	})
	// mixerPlane.scale.multiplyScalar(2)

	//////////////////////////////////////////////////////////////////////////////////
	//		procedural city							//
	//////////////////////////////////////////////////////////////////////////////////
	
	var mixerPlane	= addPage({
		url		: 'http://learningthreejs.com/blog/2013/08/02/how-to-do-a-procedural-city-in-100lines/',
		position	: new THREE.Vector3(6,2,2),
		mixerPlaneOpts	: {
			elementW: 1024,
		},
	})
	mixerPlane.scale.multiplyScalar(2.5)

	
})()