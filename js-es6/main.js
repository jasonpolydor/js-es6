$(() => {
    document.getElementById("myBtn").addEventListener("click", () => document.getElementById("demo").innerHTML = "Hello World");


    // let resultForDocument21 = searchResult.filter(function(result) {
    // 	return result.document.id === 21;
    // });
    // let resultForDocument21 = searchResult.find(result => result.document.id === 21);
    // console.log(resultForDocument21);
    // let resultForDocument21 = searchResult.filter(result => result.document.id === 21);
    // console.log(resultForDocument21);


    const searchResult = [
    {
            "id": 123,
            "pagination": "C1",
            "page": 1,
            "highlight": "Curabitur id ex eget augue varius <strong>hendrerit vitae at el</strong> Donec pretium imperdiet rhoncus...",
            "image": {
                "thumbnail": "/documents/21/assets/images/thumbnail/simple/1.jpg"
            },
            "document": {
                "id": 21,
                "title": "My Document Title 21",
                "link": "/render/21/release"
            },
            "isCurrentDocument": true
        },
        {
            "id": 124,
            "pagination": "10",
            "page": 12,
            "highlight": " varius <strong>hendrerit vitae at el</strong> Donec isis at, dignissim vitae arcu...",
            "image": {
                "thumbnail": "/documents/21/assets/images/thumbnail/simple/12.jpg"
            },
            "document": {
                "id": 21,
                "title": "My Document Title 21",
                "link": "/render/21/release"
            },
            "isCurrentDocument": true
        },
        {
            "id": 125,
            "pagination": "20",
            "page": 22,
            "highlight": "Curabitur id ex eget augue varius <strong>hendrerit vitae at el</strong> Donec pretium imperdiet rhoncus. Nam ex nisi, commodo a facilisis at, dignissim vitae arcu.",
            "image": {
                "thumbnail": "/documents/21/assets/images/thumbnail/simple/22.jpg"
            },
            "document": {
                "id": 21,
                "title": "My Document Title 21",
                "link": "/render/21/release"
            },
            "isCurrentDocument": true
        },
        {
            "id": 200,
            "pagination": "C1",
            "page": 1,
            "highlight": " varius <strong>hendrerit vitae at el</strong> Donec isis at, dignissim vitae arcu...",
            "image": {
                "thumbnail": "/documents/22/assets/images/thumbnail/simple/1.jpg"
            },
            "document": {
                "id": 22,
                "title": "My super long title for document 22",
                "link": "/render/22/release"
            },
            "isCurrentDocument": false
        },
        {
            "id": 201,
            "pagination": "20",
            "page": 22,
            "highlight": "Curabitur id ex eget augue varius <strong>hendrerit vitae at el</strong> Donec pretium imperdiet rhoncus. Nam ex nisi, commodo a facilisis at, dignissim vitae arcu.",
            "image": {
                "thumbnail": "/documents/22/assets/images/thumbnail/simple/22.jpg"
            },
            "document": {
                "id": 21,
                "title": "My super long title for document 22",
                "link": "/render/21/release"
            },
            "isCurrentDocument": false
        }
    ];
    // const searchResultRendering = [];
    // searchResult.forEach((result) => {
    // 	searchResultRendering.push({
    // 		pagination : result.pagination,
    // 		img : result.image.thumbnail
    // 	});
    // });

    const searchResultRendering = searchResult.map((result) => {
		return {
    		pagination : result.pagination,
    		img : 'http://ps4.dev/'+result.image.thumbnail
    	};
    });

	const helperDom = (item) => {
		//Create li
		let liElement = document.createElement('li');
		// create p element
		let pElement = document.createElement('p');
		//create image and set src attribute
		let imageElement = document.createElement('img');
		imageElement.setAttribute('src', item.img);
		//add node text to p
		pElement.appendChild(document.createTextNode(item.pagination));
		liElement.appendChild(imageElement);
		liElement.appendChild(pElement);

		return liElement;
	};

	const wrapper = document.querySelector('#wrapper');
	searchResultRendering.forEach(result => wrapper.appendChild(helperDom(result)));

});






















