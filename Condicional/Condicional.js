function calculemedia(){
    var val1 = document.getElementById('valor-1').value;
    var val2 = document.getElementById('valor-2').value;
    var media = (parseInt(val1) + parseInt(val2))/2;
    
    if(media >=6)
    if(media==10)
        alert("O aluno atingiu a média " + media + " e foi aprovado com sucesso!");
        else
        alert("Parabéns, aprovado! Média " + media);
        else
        alert("Volta ano que vem!");
}
function comparar(){
    var val1 = document.getElementById('valor-1').value;
    var val2 = document.getElementById('valor-2').value;

    if(val1 == val2)
    if(val1 > val2)
        alert('Os valores são iguais')
    else
        alert('O valor 1 é maior que o valor 2')
    else
        alert('O valor 2 é maior que o valor 1')
}