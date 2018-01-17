$(document).ready(function () {
  $('.parallax').parallax();
  Materialize.updateTextFields();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
});


var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
uname = unescape(temp[1]);
document.getElementById("uname_o").innerHTML = uname;
document.getElementById("first_name").value = uname;

temp = parameters[1].split("=");
phone_number = unescape(temp[1]);
document.getElementById("phone_number_o").innerHTML = phone_number;

temp = parameters[3].split("=");
email = unescape(temp[1]);
document.getElementById("email_o").innerHTML = email;

temp = parameters[4].split("=");
booking_date = unescape(temp[1]);
document.getElementById("booking_date_o").innerHTML = booking_date;

temp = parameters[5].split("=");
event_date = unescape(temp[1]);
document.getElementById("event_date_o").innerHTML = event_date;

temp = parameters[7].split("=");
ubalance = unescape(temp[1]);
document.getElementById("balance_o").innerHTML = ubalance;

var adv = document.getElementById('advance').value;
var bal = document.getElementById('balance').value;
var pack = "";
function total_amount() {
  
  var ext = document.getElementById('rooms').value;

  if (document.getElementById('lower').checked) {
    var packing ="You Choosed Lower Event Space";
    var total = 5000 + (ext * 500);
    document.getElementById('total').value = total;
    adv = document.getElementById('advance').value;
    document.getElementById('balance').value = total - adv;
    
  }
  else if (document.getElementById('upper').checked) {
    var  packing = "You Choosed Upper Event Space";
    var total = 10000 + (ext * 500);
    document.getElementById('total').value = total;
    adv = document.getElementById('advance').value;
    document.getElementById('balance').value = total - adv;
    
  }
}

document.getElementById("uname").innerHTML = uname;