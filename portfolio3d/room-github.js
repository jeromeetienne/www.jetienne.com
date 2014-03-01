;(function(){
	var origin	= new THREE.Vector3(0,0,0)


	//////////////////////////////////////////////////////////////////////////////////
	//		comment								//
	//////////////////////////////////////////////////////////////////////////////////
	
	var mixerPlane	= addPage({
		url	: 'http://githubbadge.appspot.com/jeromeetienne',
		position: origin.clone().add(new THREE.Vector3(-4,1.5,-2)),
		mixerPlaneOpts	: {
			elementW: 200,
			planeW	: 1, 
			planeH	: 108/200,
		},
	})
	mixerPlane.scale.multiplyScalar(2)



	//////////////////////////////////////////////////////////////////////////////////
	//		comment								//
	//////////////////////////////////////////////////////////////////////////////////
	

	var htmlEmbedTweet	= '<blockquote class="twitter-tweet" lang="en"><p>I have been ranked #8 most active on github! They got more than 3millions users, i take that as an great honor. <a href="http://t.co/ZA3yEOEef6">pic.twitter.com/ZA3yEOEef6</a></p>&mdash; Jerome Etienne (@jerome_etienne) <a href="https://twitter.com/jerome_etienne/statuses/439690466527698944">March 1, 2014</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
	var mixerPlane		= addPageEmbedTweet(htmlEmbedTweet, {
		position	: origin.clone().add(new THREE.Vector3(1,1.75,4)),
		mixerPlaneOpts	: {
			elementW: 500,
			planeW	: 1, 
			planeH	: 528/500,
		},
	})
	mixerPlane.scale.multiplyScalar(1.5)


})()