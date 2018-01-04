/**
 * Serviço responsável para as operações da Calculadora
 * @author Marcio P.Alves <marciopalves89@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
  //Define constantes para identificar as operações de calculo
  static readonly SOMA: String ='+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: String = '*';
  static readonly DIVISAO: String= '/';
  static readonly NENHUM_VALOR: Number = 0;

  constructor() { }

/**
 * Método que calcula uma operação matemática dado dois números.
 * Suporta operações de soma, subtração, divisão e multilpicação
 * @param num1 number
 * @param num2 number
 * @param operacao string operação a ser executada
 * @return number resultado da operação
 */

  calcular(num1: number, num2:number, operacao: String): number {
    let resultado: number;//armazena resultado da operação

    switch(operacao){
    case CalculadoraService.SOMA:
      resultado = num1 + num2;
      break;
    case CalculadoraService.SUBTRACAO:
      resultado = num1 - num2;
      break;
    case CalculadoraService.MULTIPLICACAO:
      resultado = num1 * num2;
      break;
    case CalculadoraService.DIVISAO:
      resultado = num1 / num2;
      break;
    default:
      resultado= 0;
    }
    return resultado;
  }
}
