//Challenge 2: Speed Detector (Toy Problem)
/*Write a program that takes as input the speed of a car e.g 80. 
If the speed is less than 70, it should print “Ok”. Otherwise, 
for every 5 km/s above the speed limit (70), it should give the
driver one demerit point and print the total number of demerit points.*/


let speed = 0;
speed = parseInt(window.prompt("What is your speed"));
let demeritPoints = ((speed - 70) / 5);

if (speed < 70) {
  document.write("OK");
} 

else {
  document.write("Your total demerit points: " + demeritPoints + " Points");

if (demeritPoints > 12) {
    document.write(" License suspended");
  }
}