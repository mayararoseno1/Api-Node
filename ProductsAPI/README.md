## Project to practice CRUD with Node API 

Steps to Run in your local environment  
- First, clone the repository:  

        git clone https://github.com/LazaroKy/InitialNodeAPI

- Second, navigate to the repository path:  
Access the path of the repository

        cd ../InitialNodeAPI

- Third, navigate to the project folder:  
Access the path of the project

        cd ProductsAPI

- Fourth, run the application:  

        npm install
        npm start

- Fifth, test the API endpoints using Postman:  
\
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/39006660-0da559e5-20b6-47c6-8c30-d87fbdd603b9?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D39006660-0da559e5-20b6-47c6-8c30-d87fbdd603b9%26entityType%3Dcollection%26workspaceId%3D9a654f0b-9cd6-41ed-b648-635d9245c62c)  
\
Make requests to server `http://localhost:3000/api/products`, using the appropriate methods (GET, POST, PUT, DELETE) to test each endpoint (for example, adding a product, retrieving a product, updating, or deleting).   

---  
### To Create a Project Like This:

1. Create a Project Directory:

    First, create a folder to hold your project. For example:

        mkdir MyAPI
        cd MyAPI

2. Initialize a new Node.js project:

    Run the following command to initialize a new project and generate a `package.json` file:

        npm init -y

    This will automatically create the `package.json` file without any prompts.

3. Install the Express framework - used to create APIs:

    Install Express by running the command:

        npm install express

4. Create a `src` directory for your project:

        mkdir src

5. Create the main server file `app.js` or `server.js`:

    Inside the `src` folder, create the main file that will run your server. You can name it `app.js` or `server.js` (or any name you prefer).

6. Set up routing for your API:

    - Inside `src`, create a `routes` folder.
    - Inside the `routes` folder, create your route file
    - Define the routes for your API, such as `GET`, `POST`, `PUT`, and `DELETE` requests to handle different data operations.

7. Create a `models` folder inside `src` to define the structure of your data. This file can contain the logic to simulate database interactions 

8. Link everything in the `app.js` or `server.js`:

    - Require `express`, `routes`, and `models`.
    - Set up middleware, such as `express.json()`, to handle incoming request bodies.
    - Set up the routes to handle requests.

9. Run your application:

    To run your project, use the following command:

        node src/app.js

10. Test your API by running the server and using Postman or a similar tool to make requests to your local server.

---

### Requirements to run the project:

#### Install node  

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" width="90" height="70">   

#### Install Git  

<img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" width="80" height="80"/>