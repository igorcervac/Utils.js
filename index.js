Array.prototype.unique = function() {
    const array = this.reduce((a,v) => {
        if (!a.includes(v)){
            a.push(v);
        }
        return a;
    }, []);
    return array;
}

Array.prototype.insert = function(index, value) {
    const array_part = this.slice(0, index);
    const array_part2 = this.slice(index);
    return [...array_part, value, ...array_part2];
}

Array.prototype.random = function(){
    if (this.length > 0){
        let index = Math.floor(Math.random()*this.length);
        return this[index];
    }
    return null;
}

String.prototype.capitalize = function(){
    if (this.length > 0){
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    return this.toString();
}

const ut = {

    parseBoolean(stringValue){
        if (!(stringValue === undefined || stringValue === null || typeof stringValue === 'string')){
            throw new TypeError('invalid argument');
        }
    
        let result;
        try {
            result = JSON.parse((stringValue || 'false').toLowerCase());
    
            if (typeof result === 'number'){
                result = result > 0;
            }
        }
        catch{
            result = false;
        }
    
        return result;
    },
    
    memoize(func){
        const cache = {};
    
        return function(...args){
            const key = JSON.stringify(args);
    
            if (key in cache){
                result = cache[key];
            }
            else {
                result = func.apply(this, args);
                cache[key] = result;
            }
    
            return result;
        }
    }    
}

module.exports = ut;

