type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    if (Array.isArray(obj)) {
        return obj.length === 0
    } else if (typeof(obj) === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    } else {
        return true
    }
};