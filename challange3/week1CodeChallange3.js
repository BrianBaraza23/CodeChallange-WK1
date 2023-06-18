//prompt the user to input their net salary and total benefits

// Prompt the user to input their basic salary and total benefits
let x = prompt("What is your basic salary");
let y = prompt("What are your total benefits");

let basic = parseInt(x);
let benefits = parseInt(y);

// Calculate gross salary
function calculateGrossPay() {
  let calcGross = basic + benefits;
  return calcGross;
}

// Calculate NSSF deductions
function calculateNSSF() {
  let totalNSSF = calculateGrossPay() * 0.06;
  return totalNSSF;
}

// Calculate payee 
function calculatePayee() {
  if (calculateGrossPay() < 24000) {
    return calculateGrossPay() * 0.1;
  } else if (calculateGrossPay() >= 24001 && calculateGrossPay() <= 32333) {
    return calculateGrossPay() * 0.25;
  } else {
    return calculateGrossPay() * 0.3;
  }
}

// Calculate NHIF deductions
function calculateNHIF() {
  switch (true) {
    case calculateGrossPay() <= 5999:
      return 150;
    case calculateGrossPay() > 5999 && calculateGrossPay() < 7999:
      return 300;
    case calculateGrossPay() > 8000 && calculateGrossPay() < 11999:
      return 400;
    case calculateGrossPay() > 12000 && calculateGrossPay() < 14900:
      return 500;
    case calculateGrossPay() > 15000 && calculateGrossPay() < 19999:
      return 600;
    case calculateGrossPay() > 20000 && calculateGrossPay() < 24999:
      return 750;
    case calculateGrossPay() > 25000 && calculateGrossPay() < 29999:
      return 850;
    case calculateGrossPay() > 30000 && calculateGrossPay() < 34999:
      return 900;
    case calculateGrossPay() > 35000 && calculateGrossPay() < 39999:
      return 950;
    case calculateGrossPay() > 40000 && calculateGrossPay() < 44999:
      return 1000;
    case calculateGrossPay() > 45000 && calculateGrossPay() < 49999:
      return 1100;
    case calculateGrossPay() > 50000 && calculateGrossPay() < 59999:
      return 1200;
    case calculateGrossPay() > 60000 && calculateGrossPay() < 69999:
      return 1300;
    case calculateGrossPay() > 70000 && calculateGrossPay() < 79999:
      return 1400;
    case calculateGrossPay() > 80000 && calculateGrossPay() < 89999:
      return 1500;
    case calculateGrossPay() > 90000 && calculateGrossPay() < 99999:
      return 1600;
    case calculateGrossPay() > 100000:
      return 1700;
  }
}

// Calculate net salary
function calculateNetPay() {
  let calcNet = calculateGrossPay() - calculateNSSF() - calculateNHIF() - calculatePayee();
  return calcNet;
}

// Output gross pay and net pay
document.write("Your Gross monthly salary is: " + calculateGrossPay() + " but your net salary is: " + calculateNetPay());