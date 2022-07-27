//TODO: Funcion verifica si palabras son polindromos
function palindromeChecker(str){
    const newStr = str.replace(/[\W_]/g,'').toLowerCase();
    const strReversed = newStr.split('').reverse().join('');
  
    return  newStr === strReversed ? 'es palindromo' : 'no es palindromo'
  
  }
  
  console.log(palindromeChecker('empresa'))
  console.log(palindromeChecker('somos')) 
  console.log(palindromeChecker('araña')) 
  console.log(palindromeChecker('oso')) 
  