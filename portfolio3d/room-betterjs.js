;(function(){
	var origin	= new THREE.Vector3(0,0,-2)
	//////////////////////////////////////////////////////////////////////////////////
	//		main site							//
	//////////////////////////////////////////////////////////////////////////////////
	
	var mixerPlane	= addPage({
		url		: 'http://betterjs.org',
		position	: origin.clone().add(new THREE.Vector3(0,2.5,-2)),
	})
	mixerPlane.scale.multiplyScalar(3)

	//////////////////////////////////////////////////////////////////////////////////
	//		youtube video of the why					//
	//////////////////////////////////////////////////////////////////////////////////
	
	var mixerPlane	= addPage({
		url		: 'http://www.youtube.com/embed/K8VTbyUe6_0?html5=1',
		position	: origin.clone().add(new THREE.Vector3(5,1.5,3)),
		mixerPlaneOpts	: {
			elementW: 420,
			planeW	: 1, 
			planeH	: 315/420,
		},
	})
	mixerPlane.scale.multiplyScalar(2)

	//////////////////////////////////////////////////////////////////////////////////
	//		i love Javascript						//
	//////////////////////////////////////////////////////////////////////////////////
	

	var htmlEmbedTweet	= '<blockquote class="twitter-tweet" lang="en"><p>&quot;This is the last thing you gonna see if you mess with javascript!&quot; - <a href="http://t.co/H8Iqm6M8Jh">pic.twitter.com/H8Iqm6M8Jh</a></p>&mdash; Jerome Etienne (@jerome_etienne) <a href="https://twitter.com/jerome_etienne/statuses/333203103472046080">May 11, 2013</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
	var mixerPlane		= addPageEmbedTweet(htmlEmbedTweet, {
		position	: origin.clone().add(new THREE.Vector3(-8,2.3,0)),
		mixerPlaneOpts	: {
			elementW: 500,
			planeW	: 1, 
			planeH	: 610/500,
		},
	})
	mixerPlane.scale.multiplyScalar(2)

	var htmlEmbedTweet	= '<blockquote class="twitter-tweet" lang="en"><p>i love javascript THIIIIISSS much ! <a href="http://t.co/gbse9nq4od">pic.twitter.com/gbse9nq4od</a></p>&mdash; Jerome Etienne (@jerome_etienne) <a href="https://twitter.com/jerome_etienne/statuses/333195407620452352">May 11, 2013</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
	var mixerPlane		= addPageEmbedTweet(htmlEmbedTweet, {
		position	: origin.clone().add(new THREE.Vector3(-4,1,0)),
		mixerPlaneOpts	: {
			elementW: 500,
			planeW	: 1, 
			planeH	: 505/500,
		},
	})
	mixerPlane.scale.multiplyScalar(0.9)
	
	var htmlEmbedTweet	= '<blockquote class="twitter-tweet" lang="en"><p>&quot;Javascript fell from heaven!&quot; - <a href="http://t.co/PLvEU3XvVm">pic.twitter.com/PLvEU3XvVm</a></p>&mdash; Jerome Etienne (@jerome_etienne) <a href="https://twitter.com/jerome_etienne/statuses/333200144570929152">May 11, 2013</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
	var mixerPlane		= addPageEmbedTweet(htmlEmbedTweet, {
		position	: origin.clone().add(new THREE.Vector3(-4,3,0)),
		mixerPlaneOpts	: {
			elementW: 500,
			planeW	: 1, 
			planeH	: 505/500,
		},
	})
	mixerPlane.scale.multiplyScalar(0.9)

	var htmlEmbedTweet	= '<blockquote class="twitter-tweet" lang="en"><p>Double Thumbs UP for JavaScript <a href="http://t.co/iWJPqJQmcP">pic.twitter.com/iWJPqJQmcP</a></p>&mdash; Jerome Etienne (@jerome_etienne) <a href="https://twitter.com/jerome_etienne/statuses/333196354044178432">May 11, 2013</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
	var mixerPlane		= addPageEmbedTweet(htmlEmbedTweet, {
		position	: origin.clone().add(new THREE.Vector3(-8,1,5)),
		mixerPlaneOpts	: {
			elementW: 500,
			planeW	: 1, 
			planeH	: 505/500,
		},
	})
	mixerPlane.scale.multiplyScalar(0.9)
	
	var htmlEmbedTweet	= '<blockquote class="twitter-tweet" lang="en"><p>Javascript is Number ONE! <a href="http://t.co/b4mvbXRnAW">pic.twitter.com/b4mvbXRnAW</a></p>&mdash; Jerome Etienne (@jerome_etienne) <a href="https://twitter.com/jerome_etienne/statuses/333196061046886400">May 11, 2013</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
	var mixerPlane		= addPageEmbedTweet(htmlEmbedTweet, {
		position	: origin.clone().add(new THREE.Vector3(-8,3,5)),
		mixerPlaneOpts	: {
			elementW: 500,
			planeW	: 1, 
			planeH	: 505/500,
		},
	})
	mixerPlane.scale.multiplyScalar(0.9)
})()