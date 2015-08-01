$(document).ready(function() {

  //Get the value from the #loan-id input field and create a variable "id"
  $("#loan-id").keyup(function() {
    var id = $("#loan-id").val();

    //Insert the value from the #loan-id input field into the form's action attribute
    $('input[type="hidden"').attr("value", id);

    //If the input field has contents, enable the submit button, otherwise disable the submit button
    var empty = false;
      $("#loan-id").each(function() {
        if ($(this).val().length === 0) {
          empty = true;
        }
      });

      if (empty) {
        $('button[type="submit"]').attr('disabled', 'disabled').attr('title', 'Paste in a loan ID first');
      } else {
        $('button[type="submit"]').attr('disabled', false).attr('title', 'Open the official loan details in a new browser tab');
      }
  })
  .keyup();
});