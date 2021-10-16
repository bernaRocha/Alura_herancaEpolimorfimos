/* 
Ser autenticado significa ter o método autenticar, pode ser funcionário ou cliente
*/

export class SistemaAutenticacao{
  static login(autenticavel, senha) {  // Retirei o funcionario, pois o cliente também é autenticável
      if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
      }
      return false
  }

  static ehAutenticavel(autenticavel){
    return "autenticar" in autenticavel && //verificar se a chava existe dentro deste objeto
    autenticavel.autenticar instanceof Function 
  }
}