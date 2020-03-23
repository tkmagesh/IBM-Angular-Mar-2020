
function Logger({startsWith, endsWith}) : any {
    return function(target, methodName, descriptor){
        var orginialFn = descriptor.value;
        descriptor.value = function(...args){
            console.log(`${methodName} ${startsWith} `, args);
            const result = orginialFn(...args)
            console.log(`${methodName} ${endsWith} ${result}`);
            return result;
        };
    }
}



class MyClass{
    @Logger({
        startsWith : 'invoked with',
        endsWith : 'completed with'
    })
    m1(){
        console.log('m1 is invoked');
    }

    @Logger({
        startsWith: 'starts with',
        endsWith: 'ends with'
    })
    m2(){
        console.log('m2 is invoked');
    }
}




export class MyMath{
    @Logger({
        startsWith: 'invoked with',
        endsWith: 'completed with'
    })
    add(x : number, y : number) : number{
        return x + y;
    }

    @Logger({
        startsWith: 'starts with',
        endsWith: 'ends with'
    })
    subtract(x : number, y : number) : number {
        return x - y;
    }
}