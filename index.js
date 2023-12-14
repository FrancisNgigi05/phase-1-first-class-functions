function receivesAFunction(cb) {
    cb();
}

receivesAFunction(function(){
    console.log("Call me back!");
});


function returnsAnAnonymousFunction() {
    return (function () {
        console.log("I am anonymous");
    });
}

function returnsANamedFunction () {
    const namedFunction = () => {
        console.log("I am a named funciton");
    }
    return (namedFunction);
}
