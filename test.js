




function Asserter(val){
    this.val = val;
}

Asserter.prototype =  {
    getValue(){
        return this.val;
    },
    object(){

    },
    number(){
        //-Infinity and +Infinity considered numbers.
        return isFinite(this.val);
    },
    string(x){
        return typeof Object(x).valueOf() === 'string'
    },
    greaterThan(x){
        return this.val > x;
    },
    lessThan(x){
        return this.val < x;
    },
    equalTo(x){
        return this.val == x;
    },
    strictEqualTo(x){

    },
    sameReference(x){

    },
    sameStructure(x){
        
    },
    sameStructureLeniant(x){

    }
}


function expect(val){
    var handler = {};
    var p = new Proxy(new Asserter(val), handler);
    handler.get = function(obj, prop) {
        return prop in obj ? obj[prop] : p;
    }
    return p;
}

const x = new Asserter(10);

console.log(expect(10).to.be.an.object())

