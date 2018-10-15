const chai = require ('chai');
const calc = require ('./calc');
const expect = chai.expect;


let num = [6,3,3];

calc.averageAsync(num,(result)=> {
    
    console.log (result)
})

describe ("Test maths function",  ()=> {
    
    it ("Check if 2+2 = 4", () => {
        
        expect (calc.sum(2,2)).to.be.equal (4);
    })
    
    it ("Check if average is working" , () => {
         
         expect (calc.average(num)).to.be.equal (4)
        
    });
    

    
    
})