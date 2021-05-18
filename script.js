console.log('Javascript carregado');

function validaCPF(cpf) {
    console.log(cpf.length);
    if (cpf.length !=11) 
    {
    return false
    } 
        
        function validaCPF(cpf) {
            console.log(cpf.length);
            if (cpf.length !=11) {
            return false 
            } else {
            var numeros = cpf.substring(0, 9);
            var digitos = cpf.substring(9);
            
            var soma = 0;
            for (var i = 10; i > 1; i--) {
            soma += numeros.charAT(10 - i) * i;
            }
            return true
            }
        }
            }
    

function validacao () {
    console.log('iniciando validação de cpf');
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
    }