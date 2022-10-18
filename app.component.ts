import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './entidades/pessoa';
import { TipoSexoEnum } from './enums/tipo-sexo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
  sucesso = false; 

  
  nome= "";
  idade=0;
  
  
  pessoa: Pessoa = {
    nome:"",
    idade:0,
    sexo:TipoSexoEnum.VAZIO
  };

  tratarSexo(sexo:string): void {
    switch(sexo){
      case 'MASCULINO':
        this.pessoa.sexo = TipoSexoEnum.MASCULINO;
        break;
      case 'FEMININO':
          this.pessoa.sexo = TipoSexoEnum.FEMININO;
          break;
      case 'OUTROS':
        this.pessoa.sexo = TipoSexoEnum.OUTROS;
        break;
      default : 
        this.pessoa.sexo = TipoSexoEnum.VAZIO;
    }
  }

  salvar(): string {
    this.sucesso = true;
    console.log(this.pessoa);
    return "Cadastro Efetuado com Sucesso. ";
  }

  habilitarBotaoSalvar(): boolean {
    if (this.pessoa.nome && this.pessoa.idade && this.pessoa.sexo){
      return true;
    } 
    else{
      return false
    }
  }

  tratarObjetoNome(valor: string): void{
    this.pessoa.nome = valor;
  }

}
