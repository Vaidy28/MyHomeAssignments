let score=87
switch (true){
    case(score>=90):
    console.log('Your Grade is A')
    break;
    case(score<90 && score>=80):
    console.log('Your Grade is B')
    break;
    case(score<80 && score>=70):
    console.log('Your Grade is C')
    break;
    case(score<70 && score>=60):
    console.log('Your Grade is D')
    break;
    case(score<60):
    console.log('Your Grade is F')
    break;
    default:
    console.log('Default')
}
