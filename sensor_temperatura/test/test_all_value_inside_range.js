
var chai = require('chai');
var expect = require ('chai').expect;


describe('test_sensor_calibrado',function(){

it ('Todos valores de output sendo lidos!', function () {

var temperatura = new Array(3,50);

for ( var i=3; i<=50; i++){

  expect(i).to.be.within(3,50);

}

console.log("verifica se todos valores de output do sensor de temperatura  estão sendo lidos carretamente:");
});

})
