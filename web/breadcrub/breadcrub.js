var roomHumanNames	= {
	'threejsgames'		: 'Three.js Games',
	'github'		: 'GitHub',
	'learningthreejs'	: 'Leaning Three.js Blog',
	'betterjs'		: 'Better.js'
}

// update
;(function(){
	// build html for breadcrub depending on location.pathname
	if( location.pathname === '/' || location.pathname === '/index.html' ){
		var html	= "Home"
	}else if( location.pathname === '/portfolio/' ){
		var html	= [
			"<a href='/'>Home</a>",
			" > ",
			"Portfolio",
		].join('\n')
	}else if( location.pathname === '/portfolio/room/' ){
		var roomName	= location.hash.substr(1)
		var html	= [
			"<a href='/'>Home</a>",
			" > ",
			"<a href='/portfolio'>Portfolio</a>",
			" > ",
			roomHumanNames[roomName]
		].join('\n')
	}else	console.assert(false, 'unknown roomName')
	
	// create the element and add it to the body
	var element	= document.createElement('div')
	element.setAttribute('id', 'breadscrub')
	element.innerHTML	= html
	document.body.appendChild(element)
})()
