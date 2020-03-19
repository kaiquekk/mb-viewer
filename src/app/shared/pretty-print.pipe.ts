import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prettyPrint'
})

export class PrettyPrintPipe implements PipeTransform {

    transform(value: Object){
        return JSON.stringify(value, null, null)
    }
}