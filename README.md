# CH-Plan-A-Visit
An application that uses the Cooper Hewitt api to facilitate visits to the museum by checking exhibitions and locating artwork or objects in the collection ahead of time. This project is part of the WDI/NYC-TTP Fellowship requirements.

Index
-------------------------------------
- [Application briefing](#appkication-briefing)
- [Wireframes](#wireframes)
- [Technical spec](#technical-specifications)
- [User storeis](#user-stories)
- [Time-priority matrix](#time-priority-matrix)
- [Project board](#project-board)

Application briefing
-------------------------------------

Visitor Planner is an application to facilitate and enhance a museum visitor's experience by allowing them to program their visit ahead of time.

The application provides the user with means to query the museum's current exhibitions and artworks in view so that they can select specific items from the query result and add them to a list planner. From this list planner, the user keep track of the items she/he means to see during the visit to the museum, allowing them to have a more meaningful experience.

This list of all selected artworks displays an image and the title of the art piece, along with delete and view single items functionalities for a more flexible and personalized record tracking. The view single functionality displays an image, a description, and a field to write personal memos/notes about the experience, the artwork specifications, or any other information.

This application is in development phase, and the project is part of the WDI curriculum requirements for the GA/NYC-TTP fellowship. Technologies used are node, express, and react.

Wireframes
----------
![Wireframe](https://github.com/FelipeAtGA/Project4-Museum-visitor-planner/blob/master/readme_images/wireframes.png)

Technical specifications
------------------------
Visitor Planner makes use of the MVC web application architectural pattern. It starts with a Node.js bedrock, an Express.js backend, and a React.js front-end. The database uses PostgreSQL, and an API Key from the Cooper Hewitt Smithsonian Design Museum in New York City.

User stories
------------
>As a museum and travel fan, I want to have an app that helps me to be more efficient when visiting a museum during a short vacation.


>I would like for this app to let me search the museum's current exhibitions and add them to a list in a todo list kind of style so that I can keep track of what I've seen.


>I want to be able to keep a memo about any type of information regarding a particular artwork, including a sharable post describing the experience.


> The app should also have a delete and edit button to personalize my entries, along with a folder that holds that particular visit.


>As a user, I'd like to create a network of museum fans so that we can share this posts detailing our experiences or planning a trip to the museum

Time-priority matrix
--------------------
![Tiem-priority matrix](https://github.com/FelipeAtGA/Project4-Museum-visitor-planner/blob/master/readme_images/time-priority-matirx.png)

MVP
-------------
* ~~Utilizing a third party API~~
* Full ReST/CRUD performance
* CSS styling

Post MVP
-------------
* User Auth Docs
* Build a visit album
* Include museum map
* Print users' posts

Project board
-------------
| Taks                          | Date  | Estimated time| Actual | Notes |
| -------------                 |:-----:| :------------:|:------:|:-----:|
| API: find, read Docs, and Test| 10/06 | 3hrs          |On time |       |
| Create GitHub Repo w/ read.me | 10/06 | 2hrs          |3hrs    |       |
| Express/React review Docs     | 10/07 | 4hrs          |4hrs    |       |
| express skeleton              | 10/07 | 2hrs          |1hr     |
| React skeleton                | 10/07 | 2hrs          |1hr     |
| Build DB                      | 10/08 | 2hrs          |1hr     |
| Create Search form, using API | 10/08 | 3hrs          |2.5hrs  |
| Build add-one funct. and page | 10/08 | 3hrs          |2.5hrs  |
| Build delete-one funct. + page| 10/08 | 3hrs          |        |
| Build update-one funct. + form| 10/08 | 3hrs          |        |
| Create showAll component      | 10/09 | 1hr           |2.5hrs  |difficulty on updating state |
| Create list-one component     | 10/09 | 1hr           |        |
| Create update/edit form       | 10/09 | 1hr           |        |
| Debbuging                     | 10/09 | 4hrs          |        |
| Auth Docs                     | 10/10 | 8hrs          |        |
