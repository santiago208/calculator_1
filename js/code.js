
// escribir en pantalla 
function escribir(n){
    let caja = document.field.pantalla.value;
    document.field.pantalla.value = caja + n;
}
// calcular valores
function calcular(){
    let caja = document.field.pantalla.value;
    document.field.pantalla.value = eval(caja)
}