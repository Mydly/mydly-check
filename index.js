
/**
 * check object
 * @param {*} object 
 */
function isArray (object){ return object && typeof object==='object' && Array === object.constructor }
function isArrayOfString(obj){
    if(!isArray(obj)) return false;
    for (var item in obj){
        if(!isString(item))return false;
    }
    return true;
}

function isInArray( ele, arr){
    if( !arr || !ele || !isArray(arr) ){
        return false;
    }
    for(var aa in arr){
        if( arr[aa] == ele ){
            return true;
        }
    }
    return false;

}


function isFunction (obj){ return obj && typeof obj === 'function' && Function === obj.constructor}

/**
 * check String
 * @param {*} obj 
 */
function isString (obj){ return obj && typeof obj==='string' && String === obj.constructor }
function isStringOfNumber(obj){ 
    return isString(obj) && /^\-?\d*\.?\d+$/.test(obj);
}


/**
 * check number
 * @param {*} obj 
 */
function isNumber(obj) { return !isNaN(obj) && typeof obj==='number'}
function isInt (obj){ return isNumber(obj) && ( parseFloat(obj) === obj)}
function isFloat(obj){ return isNumber(obj) && (parseFloat(obj) !== obj) }


exports = {
    isArray:isArray,
    isArrayOfString:isArrayOfString,
    isInArray:isInArray,
    isFunction:isFunction,
    isString:isString,
    isStringOfNumber:isStringOfNumber,
    isNumber:isNumber,
    isInt:isInt,
    isFloat:isFloat
}