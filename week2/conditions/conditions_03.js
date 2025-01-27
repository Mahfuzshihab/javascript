const getGrade = (score) => {
    if (score >= 90) {return "Grade A"}
    else if (score >=80 && score <= 89) {return "Grade B"}
    else {return "Grade C"};
};

console.log(getGrade(92));
console.log(getGrade(85));
console.log(getGrade(70));



const getGrade2 = (score) => {
    switch (true) {
        case score >= 90:
            return "Grade A";
        case score >= 80 && score <= 89:
            return "Grade B";
        default:
            return "Grade C";
    }
    }  ;

    console.log(getGrade2(92));
    console.log(getGrade2(85));
    console.log(getGrade2(70));

    