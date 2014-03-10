// enclose the plugin so no variables leak out
(function($){

	// define and name the plugin
    $.fn.addressPlugin = function(options) {  

    	// define default options, to be redefined by user
        var defaults = {
        	contactsURL: 'data/contacts.json',
			output: '#output'
		};

		// let options be customized by the user
        var options = $.extend(defaults, options);

        // loop through each element you're attaching the plugin to
        return this.each(function() {

        	var searchInput = $(this),
        		addr = {

				search : function(event) {

					// stop the default behavior
					event.preventDefault();

					//get data from JSON file
					$.getJSON(options.contactsURL, function (data) {

						//save the input value, contacts length and data to variables
						var searchValue = searchInput.val().toLowerCase(),
							addrBook = data.addressBook,
							count = addrBook.length;

						// clear the target area just in case there's something in it
						$(options.output).empty();

						//check the count
						if(count > 0 && searchValue !== ""){

							//loop through the contacts
							$.each(addrBook, function (i , obj) { 	

								//look through the name value to see if contains the search term string
								var isItFound = obj.name.toLowerCase().indexOf(searchValue);

								//anything other than -1 means there is a match
								if(isItFound !== -1) {
									$(options.output).append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a><p>');

								} //end if

							}); //end each 

						} //end count check

					}); //end ajax call	

				}, //end search

			}; // end addr

			// event listeners
			searchInput.keyup(function(event) {
				addr.search(event);
			});

		}); // end loop

	}; // end addressPlugin

})(jQuery); // end anonymous function

$(document).ready( function () {
    
    // attach address plug-in to the search field
    $('#q').addressPlugin({
        output: '#output'
    });

}); // close document. ready
      