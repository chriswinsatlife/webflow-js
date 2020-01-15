// 1) Call Mixitup

var imported1 = document.createElement('script');
imported1.src = 'https://code.jquery.com/jquery-3.4.1.slim.min.js';
document.head.appendChild(imported1);

var imported2 = document.createElement('script');
imported2.src = 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js';
document.head.appendChild(imported2);


	// 2) Reusable function to convert any string/text to css-friendly format
	  var conv = function (str) {
	    if (!str) {
		str = 'empty';
	    }  return str.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, ' ')
			.replace(/, /g, ",")
			.replace(/ /g, "-")
		    	.replace(/,/g, " ")
			.toLowerCase()
			.trim();
	};

	// 3) Creating dynamic elements classes from its categories for filtering:

		var catArray = document.querySelectorAll('.filter-category');
	    catArray.forEach( function(elem) {
		var text1 = elem.innerText || elem.innerContent;
		var text2 = conv(text1);
		    text2.split(' ').forEach(function(className) { 
		    elem.parentElement.parentElement.parentElement.parentElement.classList.add(className);
		    });
		});

	// Some Jetboost shit which can likely be deleted

	//  var catArray = document.querySelectorAll('.jetboost-list-item-hide');
	//    catArray.forEach( function(elem) {
	//    elem.parentElement.classList.add('jetboost-list-item-hide');
	//  });


	// 4) Creating custom data-date attributes from blog dates:
	//  var sortArray = document.querySelectorAll('.w-dyn-item .sort-category');
	//  sortArray.forEach( function(sortElem) {
	//    var sortText = sortElem.innerText || sortElem.innerContent;
	//    sortElem.parentElement.parentElement.parentElement.setAttribute('data-date', sortText);
	//  });

	// 4.5) to add filtering on paginated items
	 const moveItems = document.querySelectorAll('.to-be-moved');
	    moveItems.forEach( function(move) {
		document.getElementById('target-container').appendChild(move);
	    });

	// 5) Set the reference to the container. Use the class-name of your Collection List or ID of the Collection List

	  var containerEl = document.querySelector('.mixitup');

	// As targets are filtered in and out, they will fade between
	// opacity 1 and 0 and transform between translateZ(-100px) and
	// translateZ(0).

	var mixer = mixitup(containerEl, {
	    animation: {
		enable: false,
		effects: 'fade',
		nudge: false,
		reverseOut: false,
		applyPerspective: false,
		animateResizeContainer: false,
		clampHeight: false,
		clampWidth: false,
		duration: 200
	    }
	});


