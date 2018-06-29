import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addMetas'
})
export class AddMetasPipe implements PipeTransform {
  constructor( ) {}

  transform(value: any, args: any[] = []): any {
      args.forEach(metadata => {
        value = value.replace( '<metadata ' + metadata._id + '/>' , 
          ' <app-metadata-displayer ' +
          '    [link]="' + metadata.link + '"> ' +
          ' </app-metadata-displayer> '
        )
      });
    return value;
  }

}
