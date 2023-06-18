//Challenge 1: Student Grade Generator (Toy Problem)
/*Write that prompts the user to input student marks. The input should be between 0 and 100. 
Then output the correct grade: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/


let a = window.prompt("Enter your marks:");
let yourMark = parseInt(a);

switch (true) {
  case yourMark >= 80 && yourMark <= 100:
    document.write("Grade A");
    break;

  case yourMark >= 60 && yourMark <= 79:
    document.write("Grade B");
    break;

  case yourMark >= 50 && yourMark <= 59:
    document.write("Grade C");
    break;

  case yourMark >= 40 && yourMark <= 49:
    document.write("Grade D");
    break;

  case yourMark < 40:
    document.write("Grade E");
    break;

  default:
    document.write("Mark Not Valid");
}