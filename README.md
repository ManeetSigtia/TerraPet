# TerraPet
Terra-Pet is a fitness web app that uses the Terra API to collect health-related data from users and help them stay committed to their fitness goals. The app rewards users for achieving their weekly goals by growing a virtual pet, which improves as the user becomes healthier and more active.

## Running On Your Machine
```
git clone https://github.com/ManeetSigtia/TerraPet.git
cd TerraPet
npm start
```

## Table of Contents
* [Project Details](#project-details)
  * [Team Name](#team-name)
  * [Challenge](#challenge)
  * [Members Names](#members-names)
  * [Technologies Used](#technologies-used)
  * [How the Project was Implemented](#how-the-project-was-implemented)
  * [Mentor Name](#mentor-name)
  
* [Project Description](#project-description)
  * [The Problem](#the-problem)
  * [The Solution](#the-solution)
  * [Benefits](#benefits)
  * [Market Potential](#market-potential)
* [Features and Extensibilty](#features-and-extensibility)

## Project Details
### Team Name
* TerraPet

### Challenge
* Build a project that uses the Terra API

### Members Names
Hari Rathod - K22002783  
Harshraj Patel - K22018200  
Maneet Sigtia - K22006576  
Neel Nair - K22028768

### Technologies Used
* Terra API
* React.js
* Python
* CSS3

### How the Project was Implemented
##### The project is a web application, built using React.js
* The getData.py file retrieves the data from the user's account, using the Terra API. 
* This python script then extracts the steps_walked and activity_seconds fields from the JSON generated, and creates a JSON file (data.json). 
* The App.js script parses the data.json file, and displays the data on the web page, when the user presses _'Load data from 'Fitness Device'.'_
* The user can also manually enter data. This data is stored in App.js using 'state'. The data is displayed as a list, and the user can remove data if they mistype, for example.
* Once the number of steps reaches 10000, 20000, etc., the App.js script updates the size of the pet.

### Mentor Name
Eduard Ragea - K20067643
  
## Project Description
### The Problem
Sedentary lifestyles are leading to increasing rates of obesity and other health problems.

### The Solution
Terra – Pet encourages physical activity and healthy habits by making fitness fun and engaging.

### Market Potential
- The global health and fitness app market is expected to reach $14.64 billion by 2026.
- The market for virtual pet games is also growing, with games like Nintendogs and Tamagotchi selling millions of copies worldwide.

### Benefits
- Encourages physical activity and healthy habits.
- Appeals to a wide audience, including both children and adults.
- Can be monetized through in-app purchases and sponsorships.

### Features and Extensibility
- Currency is going to be called PetCoins. equation to calculate PetCoins: (0.25 x activity seconds + 0.75 x steps walked)/100
- When a new egg is purchased, it takes time to hatch it and create the pet. The user should be able to either use steps to speed up the process, or actual money to hatch the egg instantly.
- As of now, only the steps walked contribute to calculating PetCoins. In the future, we envision this app to be able to use data from other activities such as swimming and cycling for example.
- Fitness streak that record the consecutive days a user has met their goal. 
- Target steps entered by the user.
