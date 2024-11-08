





function GradeCalculator(grade){
    if(grade > 80 && grade < 100){
        console.log("O -> EXCELLENT");
    }
    if(grade > 60 && grade < 80){
        console.log("A -> GOOD");
    }
    if(grade > 40 && grade < 60){
        console.log("B -> DO BETTER NEXT TIME");
    }
    if(grade < 30){
        console.log("C -> POOR");
    }
}


GradeCalculator(66);




