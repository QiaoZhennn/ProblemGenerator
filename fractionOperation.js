function randomGenerator(scope) {
    return Math.floor(Math.random() * (scope - 1)) + 1; // 1 ~ 9
}

function operationFraction(op, unit) {
    var scope = 10;
    var a = fractionGenerator(scope, unit);
    var b = fractionGenerator(scope, unit);
    var equation = [];
    equation[0] = a[0];
    equation[1] = '/';
    equation[2] = a[1];
    equation[4] = b[0];
    equation[5] = '/';
    equation[6] = b[1];
    if (op === 1) {
        equation[3] = '+';
    } else {
        equation[3] = '-';
    }
    var problemStr = equation[0];
    for (var j = 1; j < equation.length; j++) {
        problemStr += equation[j];
    }
    console.log("problem: ",problemStr);

    //calculate
    //find smallest common multiple of denominator of a and b
    for (var i = 1; i <= a[1] * b[1]; i++) {
        if (i % a[1] === 0 && i % b[1] === 0) {
            break;
        }
    }
    var aUp = a[0] * (i / a[1]);
    var aDown = i;
    var bUp = b[0] * (i / b[1]);
    var bDown = i;
    if (op === 1) {
        var ansUp = aUp + bUp;
    } else {
        ansUp = aUp - bUp;
    }
    var ansDown = i;
    if (ansUp % ansDown !== 0) {
        var ans = ansUp+"/"+ansDown;
    } else {
        ans = ansUp/ansDown;
    }
    console.log("answer: ",ans);

    return [equation, ans];
}

function fractionGenerator(scope, unit) {
    if (unit === 1) {
        // unit = 1 means 1/n, unit = 2 means a/b
        var numerator = 1;
        var denominator = randomGenerator(scope);
    } else {
        numerator = randomGenerator(scope);
        denominator = randomGenerator(scope);
    }
    return [numerator, denominator];
}

// first para is op: 1 means +, 2 means -
// second para is unit: 1 means 1/n, 2 means a/b
operationFraction(randomGenerator(3), 2);