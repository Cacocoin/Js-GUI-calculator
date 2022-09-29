let One = document.getElementById('One')
let Two = document.getElementById('Two')
let Three = document.getElementById('Three')
let Four = document.getElementById('Four')
let Five = document.getElementById('Five')
let Six = document.getElementById('Six')
let Seven = document.getElementById('Seven')
let Eight = document.getElementById('Eight')
let Nine = document.getElementById('Nine')
let Zero = document.getElementById('Zero')
let Plus = document.getElementById('Plus')
let Minus = document.getElementById('Minus')
let Multiply = document.getElementById('Multiply')
let Divide = document.getElementById('Divide')
let Point = document.getElementById('Point')
let Equals = document.getElementById('Equals')
let Delete = document.getElementById('Delete')
let Clear = document.getElementById('Clear')
let ClearEntry = document.getElementById('ClearEntry')
let Result = document.getElementById('Result')
let arrayOfValues = []


const valuesForArray = function(buttonValue){
 
    switch(buttonValue){
        case 'C':
            Result = document.getElementById('Result').innerHTML = '';
            arrayOfValues = []
            break
        case 1:
            //Result = document.getElementById('Result').innerHTML = 1;
            arrayOfValues+= 1
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 2:
            //Result = document.getElementById('Result').innerHTML = 2;
            arrayOfValues+= 2
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 3:
            //Result = document.getElementById('Result').innerHTML = 3;
            arrayOfValues+= 3
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 4:
            //Result = document.getElementById('Result').innerHTML = 4;
            arrayOfValues+= 4
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 5:
            //Result = document.getElementById('Result').innerHTML = 5;
            arrayOfValues+= 5
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 6:
            //Result = document.getElementById('Result').innerHTML = 6;
            arrayOfValues+= 6
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 7:
            //Result = document.getElementById('Result').innerHTML = 7;
            arrayOfValues+= 7
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 8:
            //Result = document.getElementById('Result').innerHTML = 8;
            arrayOfValues+= 8
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 9:
            //Result = document.getElementById('Result').innerHTML = 9;
            arrayOfValues+= 9
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case 0:
            //Result = document.getElementById('Result').innerHTML = 0;
            arrayOfValues+= 0
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case '.':
            //Result = document.getElementById('Result').innerHTML = '.';
            arrayOfValues+= '.'
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case '*':
            //Result = document.getElementById('Result').innerHTML = '*';
            arrayOfValues+= '*'
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case '/':
            //Result = document.getElementById('Result').innerHTML = '/';
            arrayOfValues+= '/'
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case '+':
            //Result = document.getElementById('Result').innerHTML = '+';
            arrayOfValues+= '+'
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case '-':
            //Result = document.getElementById('Result').innerHTML = '-';
            arrayOfValues+= '-'
            document.getElementById('Result').innerHTML += buttonValue;
            break
        case '=':
            //Result = document.getElementById('Result').innerHTML = '-';
            break
        default: 
            console.log('ValuesForArray defaulted')
    }

    return 
}

let finalResult
let clicked = function(){
    
    const returnFinalResult = (param) => {
        return finalResult = param
    }

    /*const returnFinalResult = function(result){
        finalResult = result
        return finalResult
    }*/

    for(i in arrayOfValues){

        switch(arrayOfValues[i]){
            case '*':
                let multiArray1 = arrayOfValues.slice(0,arrayOfValues.indexOf('*'));
                let multiArray2 = arrayOfValues.slice(arrayOfValues.indexOf('*'));
                let multiArray3 = [...multiArray1];
                let multiArray4 = [...multiArray2];
                multiArray4.shift();
                let multinumber1 = multiArray3.join('')
                let multinumber2 = multiArray4.join('')
               // let multiresult
                //let count = 0
                //for(z in arrayOfValues){
                  //  if (arrayOfValues[z] === '*'){
                    //    console.log('This is array z', arrayOfValues[z] )
                      //  count+=1}}    
                   // if(count>1){
                     //   multiresult = parseInt(finalResult) * parseInt(multinumber2)
                        
                       // console.log('This is multiresult', multiresult )
                       // console.log('This is multinumber', multinumber2 )
                       // console.log('This is finalresult', finalResult )
                //}

                //else{
                    multiresult = multinumber1 * multinumber2
                //}
                returnFinalResult(multiresult)

                document.getElementById('Result').innerHTML = multiresult;
            
                break     
            
           case '/':
                let divideArray1 = arrayOfValues.slice(0,arrayOfValues.indexOf('/'));
                let divideArray2 = arrayOfValues.slice(arrayOfValues.indexOf('/'));
                let divideArray3 = [...divideArray1]
                let divideArray4 = [...divideArray2]
                divideArray4.shift()
                let dividenumber1 = divideArray3.join('')
                let dividenumber2 = divideArray4.join('')
                let divideresult = dividenumber1 / dividenumber2
                document.getElementById('Result').innerHTML = divideresult
                finalResult = divideresult    
                break
            
            case '+':
                let plusArray1 = arrayOfValues.slice(0,arrayOfValues.indexOf('+'));
                let plusArray2 = arrayOfValues.slice(arrayOfValues.indexOf('+'));
                let plusArray3 = [...plusArray1]
                let plusArray4 = [...plusArray2]
                plusArray4.shift()
                let plusnumber1 = plusArray3.join('')
                let plusnumber2 = plusArray4.join('')
                let plusresult = parseFloat(plusnumber1) + parseFloat(plusnumber2)
                document.getElementById('Result').innerHTML = plusresult
                finalResult = plusresult    
                break

            case '-':
                let minusArray1 = arrayOfValues.slice(0,arrayOfValues.indexOf('-'));
                let minusArray2 = arrayOfValues.slice(arrayOfValues.indexOf('-'));
                let minusArray3 = [...minusArray1]
                let minusArray4 = [...minusArray2]
                minusArray4.shift()
                let minusnumber1 = minusArray3.join('')
                let minusnumber2 = minusArray4.join('')
                let minusresult = parseFloat(minusnumber1) - parseFloat(minusnumber2)
                document.getElementById('Result').innerHTML = minusresult   
                finalResult = minusresult 
                break

            default:
                console.log('Clicked defaulted')
                
    }

}
    
    
}