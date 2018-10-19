jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");
$.validator.addMethod( "alphanumeric", function( value, element ) {
return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );
var $registrationForm = $('#registration');
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
          username: {
              required: true,
              alphanumeric: true
          },
          email: {
              required: true,
              customEmail: true
          },
          password: {
              required: true
          },
          confirm: {
              required: true,
              equalTo: '#password'
          },
          fname: {
              required: true,
              noSpace: true
          },
          lname: {
              required: true,
              noSpace: true
          },
          gender: {
              required: true
          },
          hobbies: {
              required: true
          },
          country: {
              required: true
          },
          address: {
              required: true
          }
      },
      messages:{
          username: {
              required: 'Please enter username!'
          },
          email: {
              required: 'Please enter email!',
              email: 'Please enter valid email!'
          },
          password: {
              required: 'Please enter password!'
          },
          confirm: {
              required: 'Please enter confirm password!',
              equalTo: 'Please enter same password!'
          },
          fname: {
              required: 'Please enter first name!'
          },
          lname: {
              required: 'Please enter last name!'
          },
          country: {
              required: 'Please select country!'
          },
          address: {
              required: 'Please enter address!'
          }
      },
      errorPlacement: function(error, element) 
      {
        if (element.is(":radio")) 
        {
            error.appendTo(element.parents('.gender'));
        }
        else if(element.is(":checkbox")){
            error.appendTo(element.parents('.hobbies'));
        }
        else 
        { 
            error.insertAfter( element );
        }
        
       }
  });
}