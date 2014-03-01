;(function(){
	var mixerPlane	= addPage({
		url		: 'http://betterjs.org',
		position	: new THREE.Vector3(0,1.4,6),
	})
	mixerPlane.scale.multiplyScalar(2)

	var htmlEmbedTweet	= '<blockquote class="twitter-tweet" lang="en"><p>Javascript is Number ONE! <a href="http://t.co/b4mvbXRnAW">pic.twitter.com/b4mvbXRnAW</a></p>&mdash; Jerome Etienne (@jerome_etienne) <a href="https://twitter.com/jerome_etienne/statuses/333196061046886400">May 11, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
	addPageEmbedTweet(html, {
		position	: new THREE.Vector3(-5,1,6),
	})
	// addPage({
	// 	url		: 'tweetiframe.html',
	// 	position	: new THREE.Vector3(-5,1,6),
	// 	mixerPlaneOpts	: { elementW : 500, planeW: 1, planeH: 705/500 }
	// })
})()