//jQuery

$(document).ready(function () {

var addr = {

	//define method
	search : function(event){

		//stop the default behavior
			event.preventDefault();	

		//get data from JSON file
		$.getJSON('data/contacts.json', function (data) {

			//save the input value, contacts length and data to variables
			var searchValue = $('#q').val().toLowerCase(),
				addrBook = data.addressBook,
				count = addrBook.length;

			//clear the target area incase there's something in it
			$('#output').empty();

			//check the count
			if(count > 0 && searchValue !== ""){

				//loop through the contacts
				$.each(addrBook, function (i , obj) { 	

					//look through the name value to see if contains the search term string
					var isItFound = obj.name.toLowerCase().indexOf(searchValue);

					//anything other than -1 means there is a match
					if(isItFound !== -1) {
						$('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a><p>');

					} //end if

				}); //end each 

			} //end count check

		}); //end ajax call	

	}, //end search

}; // end addr


		//events listeners

		$('#q').keyup(function(event) {
		addr.search(event);
	});

})(); //end document.ready
