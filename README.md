# TerraPet

## Table of Contents
* [Project Details](#project-details)
  * [Team Name](#team-name)
  * [Challenge](#challenge)
  * [Members Name](#members-name)
  * [Mentor Name](#mentor-name)
* [Project Description](#project-description)
  * [What Is TerraPet](#what-is-terrapet)
  * [The Problem](#the-problem)
  * [The Solution](#the-solution)
  * [Features](#features)
  * [Benefits](#benefits)
  * [Market Potential](#market-potential)
* [Presentation Link](#presentation-link)
* [Future Extensions](#future-extensions)


when you purchase an egg, it takes time to hatch it. for extensibility purposes: you can either use steps to speed up the process, or you could use money to hatch the egg instantly.

## Project Details
### Team Name
TerraPet

### Challenge
Terra API

## Members Name


### Libraries
#### tkinter
An OOP GUI library offering multiple features relevant to this application like Buttons, Dropdowns and EntryBoxes.

#### ttk
A GUI module providing widgets e.g. table widget, that is absent in the original library.

#### tkinter.font
A module used to increase application aesthetics.

#### pickle
Used for serializing and de-serializing objects. Since the application uses an object array, a binary file was used to store it. This module was used to read and write data from and to this file.

#### PIL – (ImageTK, Image)
An image processing package used to add images to screens and improve aesthetics.

Note: This library is no longer used in this project. In the original version of the project, it was used to display the company's logo at the top of the application as shown in the video. Because of potential bugs in the PIL library, this feature has been removed from the application.

#### datetime, timedelta
Used to process date and time arithmetic.

#### re
Short for regular expression. A special order of characters that assist in string pattern matching.


## Features
#### User Authentication
1. Creation and validation of users in a login page.

#### Creation of Courses, Schedules, and Students
2. Creation of new courses.
3. Creation of new schedules.
4. Creation of new students.

#### Enrollment
5. Registration of students against courses and schedules.
6. Automatic term generation once a registration is successful.
7. Editing and deleting terms.
8. Automatic “next term” generation once payment status changes from “Pending” to “Paid”.

#### Reports
9. Sorted term report based on search criteria of course, student and status.
10. Detailed report for students, courses and schedules.
11. Save functionality to export reports in a csv file.

#### Common Functionality
12. Validation checks on the entered data.
13. Verification check that ask for confirmation before irreversible activities are carried out.
14. The ability to return to home page through the use of a Back button.


## Design Overview
The "Planning and Design" Folder has the document depicting the planning phase of the system with various diagrams to structure the logical flow of the application.


## Video Demonstration
The following is 7-minute video demonstrating all of the features of the application:

[![Demo Video](Screenshot/thumbnail.png)](https://vimeo.com/manage/videos/794941050)


## Setup

1. Clone the repository to your local machine using the following command:

    ``git clone https://github.com/ManeetSigtia/course-registration-system.git``

2. Navigate to the project directory:
    
    ``cd course-registration-system``
  
3. Run the main script by executing the following command:

    ``python main.py``
 
4. You should now see a login window pop-up appear.

 
## Project Status
Project is: _complete_


## Room for Improvement
- An additional field can be added during Course Creation stage that segregates the courses into two, “Regular Courses” and “Holiday Camps”. Based on this, further operations can be done for each category.

- As of now, the users must choose from a fixed number of Course names. In the future, as the academy grows, they may have more names to offer. Thus a feature that allows them to add, delete and edit course names to the current list could be included.

- Along with generation of reports in the form of text files, PDF reports can be generated. These could be treated as certificates for students that indicate they have completed a course. Moreover, the application could provide the ability to connect to a printer and print reports as and when required by the user.

Eduard Ragea - k20067643


## Acknowledgements
Many thanks to
- the director of Genius Assembly for giving me an opportunity to develop this sytem
- my dad, my best friend, and my high school computer science teacher for providing valuable feedback and excellent resources to learn technologies that were used to build this application.


## Contact
My email address is sigtiamaneet@gmail.com - feel free to contact me!
