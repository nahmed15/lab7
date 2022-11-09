function init() {
  //add your javascript between these two lines of code
  function Functionalert() {
    var input = document.getElementById('entryinput').value;
    var output = document.getElementById('textoutput');
    alert("Nadia Ahmed: " + input.value);
    textoutput.innerHTML = input;
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', Functionalert)

}
window.addEventListener('load', init)
