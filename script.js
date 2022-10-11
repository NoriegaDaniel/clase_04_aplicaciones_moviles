var app = new Vue({
  el: '#app',
  data: {
    contador: 0,
    message: 'Hola Vue',
    mostrarBoton: false,
    email:'',
    codigoHtml: '<h1>Título de la página</h1>',
    estaChequeado: false,
    listaDeElementos: []
    },
    enviar: function(){
      alert("Se está enviando");
    }
  }
})

setTimeout(() => {
  app.codigoHtml = '<h3>No te duermas</h3>'
}, 2000);

setTimeout(() => {
  app.codigoHtml = '<h1>Titulo de la página </h1>'
}, 3000);

//app.listaDeElementos.push('Argentina');
//app.listaDeElementos.push('Perú');
//app.listaDeElementos.push('Canadá');

app.listaDeElementos.push({ id: 1, texto: "Argentina", aclaracion: "argentino", codigoArea: "+54" })
app.listaDeElementos.push({ id: 2, texto: "Uruguay", aclaracion: "uruguayo", codigoArea: "+55" })

//Genera un nuevo elemento en listaDeElementos. ... descompone los elementos del objeto y agrega "enable: true"
app.listaDeElementos = app.listaDeElementos.map(item => {
  return({ ...item, enable: true });
})

for (let item of app.listaDeElementos) {
  console.log(item);
}