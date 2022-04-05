
(function(win,doc){
//Eventos.
'use strict';

  function getRandomIntInclusive(min, max) {
    var max = 50
    var min = 1
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
ligEvent('[data-js="girar"]','click',function(){
  doc.querySelector('[data-js="select"]').value =  Number(getRandomIntInclusive())
})

function ligEvent(element,event,callBackfunc){
doc.querySelector(element).addEventListener(event,callBackfunc,false);
}

//if(doc.querySelector('[data-js="select"]').value = doc.querySelector('[data-js="inputUser"]').value)
//alert('Voce ganhou');
})(window,document)

