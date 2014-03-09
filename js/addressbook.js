/* wrap everything in an anonymous function to contain the variables */
(function(){
    
    /* JSON object with address book data */
    var contacts = {
        "addressBook" : [
            {
                "name": "hamy",
                "email": "hamypham@me.com"
            },
            {
                "name": "daenerys",
                "email": "daenerys@HBO.com"
            },
            {
                "name": "jon",
                "email": "JSnow@HBO.com"
            },
            {
                "name": "khal",
                "email": "khal@HBO.com"
            },
            {
                "name": "tyrion",
                "email": "tyrion@HBO.com"
            },
            {
                "name": "joffrey",
                "email": "joffrey@HBO.com"
            },
            {
                "name": "eddard",
                "email": "eddard@HBO.com"
            },
            {
                "name": "sansa",
                "email": "sansa@HBO.com"
            },
            {
                "name": "arya",
                "email": "arya@HBO.com"
            }
        ]
    };
    
    /* define the DOM elements and common variables you'll need */
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        count = contacts.addressBook.length,
        target = document.getElementById("output");
    
    /* define address book methods */
    var addr = {
        
        search : function(event){
            
            // save the input value, contacts length and i to variables
            var searchValue = searchField.value,
                i;
            
            // stop the default behavior
            event.preventDefault();
            
            // clear the target area just incase there's something in it.
            target.innerHTML = "";
            
            // check the count
            if(count > 0 && searchValue !== ""){
            
                // loop through the contacts
                for(i = 0; i < count; i = i + 1) {

                    // look through the name value to see if it contains the searchterm string
                    var obj = contacts.addressBook[i],
                        isItFound = obj.name.indexOf(searchValue);

                    // anything other than -1 means a match
                    if(isItFound !== -1) {
                        target.innerHTML += '<p><a href="mailto:' + obj.email + '">'+ obj.name +'</a><p>';
                    } // end if

                } // end for loop

            } // end count check

        },
        
        setActiveSection : function(){
        
            // add a class of "active" the wrapping div
            this.parentNode.setAttribute("class", "active");
        
        },
        removeActiveSection : function(){
        
            // remove the class from the wrapping div
            this.parentNode.removeAttribute("class");
        
        },
        addHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.setAttribute("class", "hovering");
        
        },
        removeHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.removeAttribute("class");
        
        }
    
    } // end addr object
    
    // activate auto complete on keyUp
    searchField.addEventListener("keyup", addr.search, false);
    
    // set active section on focus of the form field
    searchField.addEventListener("focus", addr.setActiveSection, false);
    
    // remove active section on blur of the form field
    searchField.addEventListener("blur", addr.removeActiveSection, false);
    
    // add hover class on mouse over of the form field
    searchForm.addEventListener("mouseover", addr.addHoverClass, false);
    
     // remove hover class on mouse out of the form field
    searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
    
    // activate search on form submit
    searchForm.addEventListener("submit", addr.search, false);
    
})(); // end anonymous function
