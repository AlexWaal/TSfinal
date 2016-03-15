angular.module('todo', ['todoController', 'todoService', 'myAppWithSceDisabledmyApp']);

/*
function validate(){
  var elems = document.getElementsByClassName( 'inputbox' );
  var allgood = true;

  //Loop through all elements with this class
  for( var i = 0; i < elems.length; i++ ) {
    if( !elems[i].value || !elems[i].value.length ) {
      elems[i].className += " error";
      allgood = false;
    } else {
      elems[i].className = "item_text_area item_name inputbox";
    }
  }

  //If any element did not meet the requirements, prevent it from being submitted and display an alert
  if( !allgood ) {
    alert( "Please fill in all the required fields." );
    return false;
  }

  //Otherwise submit the form
  return true;
}
*/