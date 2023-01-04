let calGrades = (scores) => {
    if (scores >= 80){
        console.log("A")
    }
    else if (scores >= 70 && scores < 79){
        console.log("B")
    }
    else if (scores >= 60 && scores < 69){
        console.log("C")
    }
    else if (scores >= 50 && scores < 59){
        console.log("D")
    }else{
        console.log("F")
    }
}

calGrades(75);
calGrades(83);
calGrades(65);
calGrades(51);
calGrades(49);