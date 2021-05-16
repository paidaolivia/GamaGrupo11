console.log('Javascript carregado');

function validaCPF(cpf) {

    console.log(cpf.length);
    if (cpf.length !=11) 
    {
    return false
    } 
    else {
        return true
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
