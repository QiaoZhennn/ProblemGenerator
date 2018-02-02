function randomGenerator(scope) {
    return Math.floor(Math.random() * (scope - 1)) + 1; // eg.scope = 10, result is 1 ~ 9
}

function operationMultiplication() {
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

    console.log("problem", a+" x "+b);
    var ans = a * b;
    console.log("answer: ", ans);
    return [operand, ans];
}

operationMultiplication();