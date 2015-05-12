//prework challenge #5

function testString(str){

    str = str.split('');
    var newString = [];

    str.forEach(function(s){
        if(s === s.toUpperCase()){
          s = s.toLowerCase();
          newString.push(s);
        } else {
           s = s.toUpperCase();
           newString.push(s);
        }
    });
    newString = newString.join('');
    return newString;
}
var string = "Life is 10% what happens to you, and 90% of how you REACT to it";
var result = testString(string);

console.log('result: ', result);
