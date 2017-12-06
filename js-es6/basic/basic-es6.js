$(() => {

    let name = "John";

    if(true) {
        let name = "jason";
    }

    var anonymous = () => {
        let name = "sophie";
        console.log('Inside anonymous function');
        console.log(name);
    }

    function namedFunction(){
        let name = "Jean Paul";
        console.log('Inside named function');
        console.log(name);
    }

    //note 'let' is not accessible outside it's declared block scope
    console.log(name);

    //not anonymous function who is declared with var is not override but if declared with 'let' you will get an error
    anonymous();
    namedFunction();

    //conclusion always use let


    function namedFunction(){
        let name = "Jean Paul II";
        console.log('Inside overriding function');
        console.log(name);
    }

    var anonymous = () =>{
        let name = "Tommy";
        console.log('Inside not overriding anonymous function');
        console.log(name);
    }

    var anonymous2 = () => {
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
        console.log('outside for loop');
        console.log(i);

        // for (let i = 0; i < 10; i++) {
        //     console.log(i);
        // }
        // console.log('outside for loop');
        // console.log(i);

        //no for the loop declare with let i will not be accessible outside the loop
    }

    anonymous2();
});
