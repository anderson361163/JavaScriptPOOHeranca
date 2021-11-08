export class SistemaAutenticacao{
    static login(funcionario, senha){
        //na verdade aqui estava criando um atributo dinamicamente na instancia
        //return funcionario.senha == senha;
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            //dessa vez ele procura uma variavel que tenha a função autenticar
            return auticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        /*
        procura na memória se o objeto autenticavel possui uma "chave" chamada autenticar 
        (já que tudo no javascript é armazenado por chave e valor)
        */
        return "autenticar" in autenticavel &&
        //verifica se a propriedade autenticar é uma função
        autenticavel.autenticar instanceof Function
    }
}