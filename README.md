# 05 Third-Party APIs: Work Day Scheduler

This is a simple calendar application that allows users to save events for each hour of the day. The application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

The application uses the Day.js library to work with date and time. The user can add important events to a daily planner to manage their time effectively.

Getting Started
To use this application, you can simply download or clone the repository and open the index.html file in your browser.

How to Use
When the application loads, the current day and time will be displayed at the top of the page.

The user can scroll down to see the timeblocks for each hour of the day, starting from 9AM to 5PM.

Each timeblock is color-coded to indicate whether it is in the past, present, or future. Grey indicates the past, red indicates the present, and green indicates the future.

To add an event to a timeblock, the user can click on the block and type in their event.

The user can save their event by clicking the save button located to the right of the timeblock.

The event will be saved to local storage and will persist even if the page is refreshed or closed.

Technologies Used
HTML
CSS
JavaScript
jQuery
Day.js

Authors
This application was created by Marcy Rappaport as a homework assignment for the [UTA-VIRT-FSF-PT-Bootcamp].

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the Challenge instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
