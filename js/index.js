window.onload = function(){
  let numeros = ['=','+','AC','.',0,'-',3,2,1,'/',6,5,4,'*',9,8,7,];
  let clases = ['igual','suma','ac','punto','cero','resta','tres','dos','uno','dividir','seis','cinco','cuatro','multi','nueve','ocho','siete'];
  let numbers;
  numeros.reverse();
  clases.reverse();
  let valores = [];
  const calcu = document.querySelector('#calcu');
 
  // Colocacion de numeros , signos y sus clases.
  for(let i= 0; i < numeros.length ; i++){
    let btn = document.createElement('input');
    btn.classList.add('btn');
    btn.setAttribute('type','button');
    btn.classList.add('class', clases[i]);
    btn.onclick = write
    btn.value = numeros[i] ;
    calcu.appendChild(btn);
  }
  // Escribir numero o caracter menos el = y el ac.
  function write(){
    const display = document.querySelector('#display');
    if(this.value !== '=' && this.value !== 'AC' && this.value !== '<-'){
       // valores.push(this.value);
     valores = display.innerText += this.value;
     //display.innerText += this.value;
     
    }
  }
  
  //funcion de borrar
  /*let borrar = document.querySelector('.borrar');
  borrar.addEventListener('click', atras);
  function atras(){
    borrado = [];
    for(i =0; i < valores.length; i++){
    borrado.push(valores[i]);
      
      
    }
    borrado.pop();
      display.innerText = borrado.join('')
  }*/
  
 //funcion para btn igual 
  let igual = document.querySelector('.igual');
  function resultado(){
      let resul = eval(valores);
      if(resul != undefined){
        display.innerText = resul;
      }
  }
  igual.addEventListener('click', resultado);
  
  //funcion para AC
  let ac = document.querySelector('.ac');
  ac.addEventListener('click', clear)
  function clear(){
    valores = '';
    display.innerText = '';
  }
 
 
  
  
};