
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
  }

  isLeapYear()

  const yearcheck = 2022;

  if(isLeapYear(yearcheck)){
    console.log(`${yearcheck} is a leap year`);
  }else{
    console.log(`${yearcheck} id not a leap year`)
  }