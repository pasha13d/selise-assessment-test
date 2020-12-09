import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'entrySearch'
})

export class EntrySearchPipe implements PipeTransform {
    transform(items: any[], fromSearch: string, toSearch: string){
        if (items && items.length){
            return items.filter(item =>{
                if (fromSearch && item.From.toLowerCase().indexOf(fromSearch.toLowerCase()) === -1){
                    return false;
                }
                if (toSearch && item.To.toLowerCase().indexOf(toSearch.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            // return items;
            return "Not Found"
        }
    }
}