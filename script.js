let nombre=document.querySelector("button[type='submit']");

nombre.addEventListener('click', function(evt){
    evt.preventDefault();
    let val1 = parseInt(document.getElementById('input1').value);
    let val2 = parseInt(document.getElementById('input2').value);
    let total = "La somme est égale à : " + (val1 + val2);
    let dive = document.createElement('div');
    document.querySelector('form').appendChild(dive);
    let resultattxt = document.createTextNode(total);
    dive.appendChild(resultattxt);
  });
