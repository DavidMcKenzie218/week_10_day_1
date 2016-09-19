var firstName = function(){
  return "David";
}

var lastName = function(){
  return "McKenzie";
}

var age = function(month, year){
  var age = 2016 - year;
  var month = 9 - month;
  if (month < 0){
    return Math.abs(age-1);
  }else{
  return Math.abs(age);
}
}

var name = function(firstName, secondName, age, month, year){
  console.log(firstName() + " " + secondName() + " and you are " + age(month, year));
}

name(firstName, lastName, age, 11, 1993);