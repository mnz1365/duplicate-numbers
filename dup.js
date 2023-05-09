
var numbers = [2,35,22,43,54,23,44,33,42,22,1,43,2,11];
var non_dupli = [];
var duplicate = false;

for(var i=0;i<numbers.length;i++){
    for(var j=0;j<numbers.length;j++){
        if(j != i){
            if(numbers[i] == numbers[j]) {
                duplicate = true;
            }
        }
    }
    if(duplicate == false) {
        non_dupli.push(numbers[i]);
    }
    else{
        duplicate = false;
    }
}



console.log(non_dupli);