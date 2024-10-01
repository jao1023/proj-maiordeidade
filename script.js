function checkEligibility() { 
  //obteno o ano
    const currentYear = new Date().getFullYear();

    const birthYear = parseInt(document.getElementById('birth-year').value);
    const name = document.getElementById('name').value;

    const age = currentYear - birthYear;

    const resultElement = document.getElementById('result');
    
    if(age >= 18) {
        resultElement.textContent = "Aluno(a) maior de idade pode continuar com o cadastro.";
    }   else if (age >= 14 && age < 18) {
        resultElement.textContent = "Aluno(a) deve solicitar a assinatura dos pais ou responsáveis"
    } else if (age < 14) {
        resultElement.textContent = "Só serão aceitos alunos(as) com 14 anos ou mais neste curso"
    } else{
        resultElement.textContent = "Idade Inválda";
    }




}