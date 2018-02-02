function randomGenerator(scope) {
    return Math.floor(Math.random() * (scope - 1)) + 1; // 1 ~ 9
}

function operationDivision(expressType) {
    var a = randomGenerator(100);
    var bType = randomGenerator(3);
    if (bType === 1) {
        var b = 5;
    } else {
        b = 25;
    }
    var operand = [];
    operand[0] = a;
    operand[1] = b;
    if (expressType === 1) {
        console.log("problem", a + " divided by " + b);
    } else {
        console.log("problem", a+" / "+b);
    }
    var ans = a / b;
    console.log("answer: ", ans);
    return [operand, ans];
}

operationDivision(1);
