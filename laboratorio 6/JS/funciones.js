var aleatorio=prompt("cuanto numeros desea?");

function aleatorios() {
    return Math.round(Math.random()*10);
  }
  
  var orden=[aleatorios];

  function ordenamiento(){
    var n, i, k, aux;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (orden[i] > orden[i + 1]) {
                aux = orden[i];
                orden[i] = orden[i + 1];
                orden[i + 1] = aux;
            }
        }
  }


  for(i=0;i<aleatorio;i++){
    document.write(aleatorios());
    document.write("<br>");  
  }
  document.write(ordenamiento());