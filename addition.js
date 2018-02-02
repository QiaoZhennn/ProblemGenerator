function randomGenerator(scope) {
    return Math.floor(Math.random() * (scope - 1)) + 1; // 1 ~ 9
}

function operationAdd(numOfAdd, isFullPair) {
    var scope = 10;
    if (isFullPair === true) {
        if (numOfAdd % 2 !== 0) throw "must input even number of adds";
        var operands = [];
        var pair = numOfAdd / 2;
        for (var i = 0; i < pair; i++) {
            var a = randomGenerator(scope);
            var b = scope - a;
            operands[2 * i] = a;
            operands[2 * i + 1] = b;
        }
    } else {
        if (numOfAdd % 2 === 0) throw "must input odd number of adds";
        pair = Math.floor(numOfAdd / 2);
        operands = [];
        for (i = 0; i < pair; i++) {
            a = randomGenerator(scope);
            b = scope - a;
            operands[2 * i] = a;
            operands[2 * i + 1] = b;
        }
        operands[2 * i] = randomGenerator(scope);
    }

    // calculate ans
    var ans = 0;
    for (i = 0; i < numOfAdd; i++) {
        ans += operands[i];
    }
    var problemStr = "";
    for (i = 0; i < numOfAdd; i++) {
        problemStr += operands[i];
        if (i !== numOfAdd - 1) problemStr += " + ";
    }
    console.log("problem: ", problemStr);
    console.log("answer: ", ans);

    return [problemStr,ans];
}
operationAdd(5,false);