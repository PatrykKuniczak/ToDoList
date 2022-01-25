import {DeleteResult, UpdateResult} from "typeorm";

export function checkResult(result: DeleteResult | UpdateResult){
    if (result.affected === 0) {
        return 404;
    } else {
        return 200;
    }
}

// @ts-ignore
String.prototype.toTitle = function() {
    return this.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

// @ts-ignore
String.prototype.fullTrim = function () {
    return this.replace(/\s\s+/g, ' ').trim()
}
