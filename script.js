function Escondertxt() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.display = 'none';
  }
  
  function Mostrartxt() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.display = 'block';
  }
  
  function Cambiarcolor() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.color = 'red';
  }
  
  function Regresarcolor() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.color = 'black';
  }
  
  function aumentartext() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.fontSize = '50px';
  }
  
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function Scrolldown() {
    const alturaTotal = document.body.scrollHeight;
  
    window.scrollTo({
      top: alturaTotal,
      behavior: 'smooth'
    });
  }
  
  function Esconderbtn() {
    var botonesScroll = document.querySelectorAll('.btn-scroll');
  
    botonesScroll.forEach(function(boton) {
      boton.style.display = 'none';
    });
  }
  