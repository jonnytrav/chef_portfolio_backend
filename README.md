# backend

Proposal

- What problem does your app solve?

The app will enable users to easily share recipes and upload photos in a dedicated professional environment.


- Be as specific as possible; how does your app solve the problem?

This app contains two user types. A professional chef (who has the ability to log in) and a single user (no need to log in so no need for user data to be persisted on this user type) who can view portfolios.

- What is the mission statement?

A professional website that will enable chefs to easily share their work.
Features

- What features are required for your minimum viable product?

-Onboarding process for a professional chef. Include their location and contact info for people to reach them.

-Login Page - After a user logs in, they'll be directed to their portfolio page where they can view what they have posted. They can also click to edit or delete posts.

-Create Post Page - Allows a user to come in and create a post of a new recipe. Each post needs to have an image, and fields for title, meal type (breakfast, lunch, dinner, snack, dessert), ingredients, and instructions.  (You can hard code the image in for MVP-no need to upload photos for MVP. Stretch goals will include image uploading and the use of Cloudinary API etc. )

-Home Page for non-logged in users - Navigating to the home page users can view posts of different chefs laid out in a single format. (see foodgawker.com for example) Users can click on a single post to read the instructions for the recipe. They can filter by recipe title, meal type,  chef, and ingredients.

- What features may you wish to put in a future release?

-Build an image uploader into the site to allow users the ability to upload their own pictures.
-Comments  
-Faster load time
-Remove styled components 

- What do the top 3 similar apps do for their users?

-Allow users to comment of post
-Some has a section for a shopping list for users 
-Users can like certain posts
-Option to share posts in social media
Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using?

-Helmet
-Cors
-Morgan
-JWT
-Bcrypt
-Knex/Express
-Jest
-For front end React, Redux

- Do APIs require you to contact its maintainer to gain access?

No

- Are you required to pay to use the API?

No

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)

N/A
For Data Scientists


- Describe the Established data source with at least rough data able to be provided on day 1. 
- You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.
- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)
- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

Target Audience

- Who is your target audience? Be specific.

Chefs who are looking for a centralized professional website where to keep their work and share it with audience.

- What feedback have you gotten from potential users?

None

- Have you validated the problem and your solution with your target audience? How?

No

Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.

-Design the DB tables
-Create github repo

Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.


