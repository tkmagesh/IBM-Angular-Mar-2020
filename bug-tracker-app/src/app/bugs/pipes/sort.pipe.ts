import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
    (item1: any, item2: any): number
}

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    private getComparerFor(attrName : string, isDesc : boolean = false ) : Comparer {
        const comparer =  function(item1 : any, item2 : any) : number {
            if (item1[attrName] < item2[attrName]) return -1;
            if (item1[attrName] > item2[attrName]) return 1;
            return 0;
        }
        return isDesc ? this.getDescendingComparerFor(comparer) : comparer;
    }
    private getDescendingComparerFor(comparer : Comparer) : Comparer{
        return function(item1 : any , item2 : any) : number {
            return comparer(item1, item2) * -1;
        }
    }
    transform(list : any[], attrName : string, isDesc : boolean = false) : any[] {
        console.info('sort.transform triggered');
        if (!list || !list.length || !attrName) return list;
        const comparer : Comparer = this.getComparerFor(attrName, isDesc);
        return list.sort(comparer);
    }
}