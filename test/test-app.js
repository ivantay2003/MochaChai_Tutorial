let chai = require ('chai');
let chaiHttp = require ('chai-http');
let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use (chaiHttp);

let server = "http://rest-weather-api.herokuapp.com/api/v1";

let latt, lngt;

describe ("Check for 'default greetings'" , () => {
    
     let expectedResult = "Welcome to restful API mock test data by Ivan";
    
     let param = "/greetings";
    
     it ("Should have greetings as default in '/'" , (done) => {
        
        chai.request(server).get(param).end((err,res) => {
            
            res.should.have.status(200);
            (res.body.message).should.be.equal(expectedResult);
            done();
        });
    });
    
     it ("Add param to greetings and it failed", (done) => {
        
        
        chai.request(server).get('/ddd').end((err,res) => {
            
            res.should.have.status(404);
            done();
        })
    })
    
});


describe ("Find list of countries" , ()=> {
    
      it ("Get the total list of countries name " , (done) => {
        let param = '/getListCountriesNames';
        
        chai.request(server).get(param).end ((err,res) => {
            
            res.should.have.status(200);
           
            //console.log("res.body: " + JSON.stringify (res.body[1]))
            done();
        })
    });
    
});



describe ("Get country particulars", () => {
    
     let param = "/getLatLng/";
    
     it ("Get London particulars ", (done)=> {
         
        let countrySearch = "London";
         
          chai.request(server).get (param + countrySearch).end((err,res) => {
            
            
            res.should.have.status(200);
            (res.body.city).should.be.equal("London");
            (res.body.country).should.be.equal (" United Kingdom");
            (res.body.latitude).should.be.equal ("51.507222");
            (res.body.longitude).should.be.equal ("0.1275");
            
            assert.typeOf(res.body.longitude, 'string', 'This is a string not a float')
            assert.typeOf(res.body.longitude, 'string', 'This is a string not a float')
            
            lngt = parseFloat(res.body.longitude);
            latt = parseFloat(res.body.latitude);
            done();
        });
    
         
     });
});









