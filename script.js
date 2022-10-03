var app = new Vue({
  el: '#app',
  data: {
    contador: 0,
    message: 'Hola Vue',
    mostrarBoton: false,
    codigoHtml: '<h1>Título de la página</h1>',
    estaChequeado: false,
    listaDeElementos: []
  }
})

setTimeout(() => {
  app.codigoHtml = '<h3>No te duermas</h3>'
}, 20000);

setTimeout(() => {
  app.codigoHtml = '<h1>Titulo de la página </h1>'
}, 4000);

//app.listaDeElementos.push('Argentina');
//app.listaDeElementos.push('Perú');
//app.listaDeElementos.push('Canadá');

app.listaDeElementos.push({texto: "Argentina", aclaracion: "argentino", codigoArea: "+54"})
app.listaDeElementos.push({texto: "Uruguay", aclaracion: "uruguayo", codigoArea: "+55"})

for (let item of app.listaDeElementos) {
  console.log(item);
}