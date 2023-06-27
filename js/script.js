function calculo() {
  //getElementById foi usado para buscar os valores digitados nos inputs respectivos do html
  var a = parseFloat(document.getElementById('a').value)
  var b = parseFloat(document.getElementById('b').value)
  var c = parseFloat(document.getElementById('c').value)

  // Para fazer o algoritmo foram usados "ifs" aninhados
  if (a == 0) {
    var resultado = 'Esta é uma equação de 1º grau.'
    return resultado
  } else {
    if (b == 0 || c == 0) {
      var resultado = 'Equação de 2º grau incompleta.'
      return resultado
    } else {
      // Para chegar até o cálculo, primeiro foi verificado a não-existência de zeros nos campos a, b e c.
      var delta = parseFloat(b * b - 4 * a * c)
      if (delta > 0) {
        var x1 = parseFloat(((-b + Math.sqrt(delta)) / 2) * a)
        var x2 = parseFloat(((-b - Math.sqrt(delta)) / 2) * a)
        var resultado = 'Δ = ' + delta + '; X¹ = ' + x1 + '; X² = ' + x2 + '.'
        return resultado
      } else {
        if (delta == 0) {
          var x1 = parseFloat(((-b + Math.sqrt(delta)) / 2) * a)
          var resultado = 'Δ = ' + delta + '; X = ' + x1 + '.'
          return resultado
        } else {
          // Em último instância, caso o delta seja menor que zero, será exibida a mensagem Ɇ Raiz Real
          var resultado = 'Ɇ Raiz Real.'
          return resultado
        }
      }
    }
  }
}
