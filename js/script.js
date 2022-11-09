function init() {
  //add your javascript between these two lines of code
  function alertFunction() {
    var input = document.getElementById('entryinput').value;
    var output = document.getElementById('textoutput');
    alert("Nadia Ahmed: " + input.value);
    output.innerHTML = input;
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', alertFunction);

}
window.addEventListener('load', init)
