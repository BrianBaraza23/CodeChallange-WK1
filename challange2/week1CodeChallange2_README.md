# Speed Detector

The Speed Detector is a small program designed to calculate and output the total number of demerit points a driver receives for exceeding the speed limit of 70 km/h.

## Instructions

To use the program, follow these steps:

1. The program will prompt you to input your current speed.
2. If your speed is below 70 km/h, the program will return "OK."
3. If your speed exceeds 70 km/h, the program will allocate         demerit point for every 5 km/h over the speed limit.
4. The program will then return the total number of demerit points  accumulated if the speed is exceeded 70km.
5. If a driver exceeds 12 demerit point, they will get an aditional message, alerting them that their licence has been suspended.

#Measurement Scale

The demerit point allocation is based on the following measurement scale:

1. If the speed is below 70 km/h, the program will return "OK."
2. If the speed exceeds 70 km/h, 1 demerit point will be added for every 5 km/h exceeded.
3. If demerite point exceed 12, licence will be suspended

#Language used

The program is built using JavaScript and HTML.

#How it works

The program utilizes an if-else statement to determine the appropriate output. Here is an overview of how it functions:

1. The program prompts the user to input their speed.
2. The first statement checks if the speed is below 70 km/h. If it is, the program returns the phrase "OK" and exits the statement, effectively closing the program.
3. If the speed exceeds 70 km/h, the program proceeds to the else statement.
4. In the else statement, the program calculates the total number of demerit points based on the speed exceeding the limit and returns this value to the user via the web interface.
5. An additional if statement is excecuted if the total demerit point exceed 12. in this case an additional massage is added to the output of total emerited points, alerting the drver that their licence has been suspended.


#Requirements

This program can run on any modern web browser since it utilizes standard HTML and JavaScript. There are no special installations required.

##Support

For further information on the program you can contact the developer via email: brian.baraza@moringaschool.com

#Contribution

This project is open source, and the code is available for any developer interested in updating or exploring the project further.

