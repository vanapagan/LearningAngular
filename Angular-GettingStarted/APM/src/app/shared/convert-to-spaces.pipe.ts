import { Pipe, PipeTransform } from "@angular/core";
import { PipeTypesOrFactory } from "@angular/core/src/render3/interfaces/definition";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}