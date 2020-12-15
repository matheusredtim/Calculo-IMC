import { Injectable } from '@angular/core';
import { IImcService } from 'src/interfaces/IImcService';
import { Imc } from 'src/models/Imc';
import {HttpClient} from '@angular/common/http'
@Injectable({
    'providedIn':'root'
})

export class ImcService implements IImcService{
    constructor(private _httpCliente: HttpClient){

    }

    calcularImc(imc: Imc): number {
        if(!imc.altura) throw new Error ("preencha o campo altura corretamente")
        if(!imc.peso) throw new Error ("preencha o campo peso corretamente")
        imc.resultado = imc.peso/Math.pow(imc.altura,2)
        imc.resultado = parseFloat(imc.resultado.toFixed(2))
        //console.log(imc.resultado)
        //console.log(typeof(imc.resultado))
       // alert(imc.resultado)
        return imc.resultado

     // document.getElementById('res').innerHTML = String(imc.resultado)

       throw new Error('Tudo Certo!');
        
    }
    
    
}