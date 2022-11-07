const label = document.getElementById('resultado')
const cantidad = document.getElementById('cantidad')

var form = document.forms['form'];
form.onsubmit = function(e){
    e.preventDefault();
    var select = document.form.desplegable.value;

    switch (select) {
      case "Estudiante" :
        label.value = `Total a pagar: $ ${cantidad.value * 40}`
        break;
      case "Trainee" :
        label.value = `Total a pagar: $ ${cantidad.value * 100}`
        break;
      case "Junior" :
        label.value = `Total a pagar: $ ${cantidad.value * 170}`
        break;
      default:
        console.error();
        break;
    }
    }
   
  
  
    