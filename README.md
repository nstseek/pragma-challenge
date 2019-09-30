# This repository was made for a project that solves the challenge made by DBServer/Pragma

Code Challenge

Meet Shane. He works at dbBeer, a boutique micro brewery based in a rural area of Australia and creator of 6 unique beer varieties. Shane is responsible for driving the large transport truck, delivering goods from the brewery to a number of pubs across metropolitan Sydney each week.

Each beer has its own specific refrigeration needs while being transported:

- Beer 1 (Pilsner) - 4°C - 6°C

- Beer 2 (IPA) - 5°C - 6°C

- Beer 3 (Lager) - 4°C - 7°C

- Beer 4 (Stout) - 6°C - 8°C

- Beer 5 (Wheat beer) - 3°C - 5°C

- Beer 6 (Pale Ale) - 4°C - 6°C

The refrigerated truck is loaded with multiple containers with beer bottles inside, each set to a specific temperature and each containing a thermometer sensor.

While driving, Shane is alerted if any of the containers fall outside of the temperature range. Unfortunately, this is common due to factors such as opening the doors to unload, the heat of the Sydney summer or sometimes due to forgetting the container doors ajar.

Instructions

Develop a solution that allows Shane to be aware of the current temperature of each container and notifies him when the temperatures are outside the correct range.

1. We would prefer that you complete this code challenge using JavaScript technology for at least part of the solution. If you have strong reasons to use another technology to better demonstrate your engineering skills, please have a chat about it with us first and add that explanation in your readme file.

2. Use your time to deliver a solution that showcases your coding skills and the level of quality you expect (but no need to gold plate it).

3. In a real-life scenario, you would ask questions to clarify any doubts but for this challenge, document the questions you would ask and provide your own answers.

4. The solution is not required to use a database server, if needed mock the data you will need internally in any of the application layers.

5. The solution must be implemented with an acceptable level of automated tests.

6. Once complete, send us a link where we can download the package from,

7. Make sure your package contains a readme file with any relevant information necessary to run your project, including:

- What are the highlights of your logic/code writing style?

- What could have been done in a better way? What would you do in version 2.0?

- What were the questions you would ask and your own answers/assumptions?

- Any other notes you feel relevant for the evaluation of your solution

## To run the back-end, follow the steps below:

- Change your working directory to BackEnd;

- Run npm install;

- Run npm run script:compile;

- Run npm start (This will run the server and a script that generates values doing requests to set the beer temperatures on server);

- If you want, you can use npm run test to run tests;

## To run the front-end, follow the steps below:

- Change your working directory to FrontEnd;

- Run npm install;

- Run npm start;

- If you want, you can use npm run test to run tests;

## To run both and open the webpage, follow the steps below:

- Change your working directory to the project root (/);

- Run npm start;

- If you want, you can use npm run test to run all tests in this project;

This steps only work in Linux, they do not work in Windows.

This project was tested in Linux Mint 19.1 (tessa), it was not tested in Windows and I do not assure compatibility with it.

If you choose to not use the script in the root folder to run the project, you should run back-end first then front-end, always using the version available in master branch.

If you want to see the front-end working with mocks, skipping back-end, go to mock-frontend-version branch and run the steps to run only front-end.

## My code highlights

- Separating everything in folders and modules to keep a solid organized structure, to make maintenance easier

- Testing everything I thought was relevant for the project

- Using SCSS to keep a colour pattern through the project, using the same colors and making it easy to replace colors

- Evaluating the need to use each package in the project, to make the web app as light as possible

- Always typing everything with TypeScript to prevent errors and failures through the project and making it easy to maintenance, since the developer can know what a route is expecting on the body of a request or what the client expects on the response

- Creating Shell Scripts to make it easy to run and test for new developers

- Implementing a linter to keep a pattern in the code generated in this project

## What is coming next on version 2.0

- Login/Accounts

An account is a good idea on this project, you can save your personal settings with it to persist through devices, but the most important, you can save different beers and temperatures in each account, making possible to implement this in a company with hundreds, thousands of drivers delivering beers around the country or even the world! Implementing this would make me re-evaluate if using Redux can be a good idea, still not sure about it since the project is very small, with just one component.

- Better folder structure on back-end

I was not convinced about the MVC-like architeture I used in this back-end nor about the routes, maybe I could create a /save-temp route that receives the beer name on body and save it, I'm still thinking about it

- Mobile app

Inserting this in the Code Challenge context, I think a mobile app would be great, the driver can look at temperatures anywhere using his phone or tablet, I could use React Native and it would be easy and fast, similar to React, very easy and useful, certainly will come in a future version.

- Add beer/change beer

The possibility to add a new beer and change existent beers, change it's max and min temperatures and name, even deleting it if it was needed.

- Change colour scheme

Being able to change the colour scheme is cool, customize your environment is really cool for me, I always change my surroundings to fit my taste, just as I like, whenever it is possible, I'll do. I do not have any problems working out of my comfort zone, besides that, I'm always doing this when I learn something new, and I try to do this everyday as I always say, I just try to customize my environment so I can learn more about it, knowing how everything works makes it all easier. You won't learn much by just changing the colour scheme with some buttons on a website, but more future customizations can come, improving at each update.

# Questions

## Back-end

- Q. How can I test the routes in each folder, besides the general test, mocking what is need when I need it?

A. Well, with some effort, I figured out a solution using second order callbacks, a function that returns another function. With this I was able to use a variable provided in the first call on the second call. This was very useful for express and jest since express pass 2 or 3 arguments to the route callback and I needed to mock some properties in Jest. I guess there are other workarounds for this, but this was the first one I thought, so, I implemented it.

- Q. Which architeture should I use to separate files and folders in my project?

A. I talked with some colleagues and came to an end using a MVC-like pattern, with models but without controllers, controllers would be "routes", but I prefer the name "routes" than "controllers" for a back-end

- Q. Should I use TypeScript in such a small project?

A. TypeScript can difficult thing sometimes, primarily the configuration, but I really think it is very useful, it does make all the difference in JavaScript, so, it slowed the process a little bit and required more configuration time, but it was worth it.

- Q. Should I create a backend-values-generator-script for presentation purposes?

A. The code challenge didn't mention it was necessary, I even talked with who proposed me this challenge if I should present it working, I could use a script to populate values in the back-end, but they told me it wasn't necessary, but I thought to myself it was essential to emulate the system and see it working, so, I made it anyway and now you can sucessfully emulate the project with a simple command on this project's root folder by running "npm start"

## Front-end

- Q. How can I select and test HTML elements in Jest using React?

A. I tried to use document.querySelector but figured out that was better to use a library called react-testing-library, it could do everything I needed and a little bit easier. It does make my project heavier, but since it is a development-only package installed using --save-dev, then it will only make a difference in my project when developing it, won't make it heavier to load in production, so I installed and learnt how to use it, it is very simple and helped me a lot.

- Q. How can I mock a class method before instanciating it?

A. I already did this in a project developed in Angular at DBServer, I needed to mock a method called in constructor before instanciating it, if I didn't, the test would break, so, I used the class prototype, the small problem in this project was an arrow function; I was using an arrow function to declare a method, so, I could not mock the function using the prototype as I did in the past since the JavaScript would assign the arrow function declared as an assignment inside the class to the variable when building the object, just converting the arrow function to a simple method solved my problem.

- Q. Do I need other packages like React-Redux/Redux-Thunk?

A. I did not think it was necessary since it is a simple web application, it does not require a login neither has many components to manage state between them all, so, it would only make my project heavier in production and I concluded it was not necessary.