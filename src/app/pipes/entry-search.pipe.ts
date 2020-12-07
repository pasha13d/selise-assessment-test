import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'entrySearch'
})

export class EntrySearchPipe implements PipeTransform {
    transform(items: any[], postSearch: string){
        if (items && items.length){
            return items.filter(item =>{
                if (postSearch && item.PostTitle.toLowerCase().indexOf(postSearch.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
    }
}