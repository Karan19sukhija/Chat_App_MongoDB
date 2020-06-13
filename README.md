# Real Time Chat - App (MongoDB)  


Simple chat Application created with Node.js Run time Enviroment, Web Sockets which uses socket.io library, MongoDB
(which stores the chat history), and Boostrap 4 ( To make the application responsive )

## Table of Contents

  - Features
  - Installation 
  - Technologies
  - Screenshots
  
  ## Features
  
    The real time chat application allows the users to interact with each other.  The communication is bi directional and 
    because these web sockets are always open and this allows the real time data flow. All the different clients
    have their own web sockets connection with the same common server. The thing to note here is that these communications 
    are taking place in real time and the client is not making any AJAX request to the server for the data. 
    
  #### Server
    The client will be running on another server (port: 5500) ( live server ) and will be able to communicate with the
    server hosting the socket.io application (having socket.io setup on port 3000)
    
  #### MongoDB
    We will be making use of MongoDB to store the chats in the real time environment. You need to install MongoDB locally and
    run the shell prompt as in order to connect your application to the local mongoDB database, make sure that your mongo shell 
    is running locally. When you run your application and if you refresh the page, the chat will stay as these 
    are persistent to mongoDB. 
    This application get connected to the local mongoDB database using the mongodb driver. This application is 
    not the production level application. 
  
   #### IIFE
   We made use of the IIFE( Immediately invoked function expression ) to run the front-end java script code which is responsible
   for making the socket connection with the server and emitting and recieving messages with the server.
   IIFE is basically a function which is independent of all other functions and run soon as the script it loaded. The syntax
   of IIFE is like this --->  (function(){})()
  
   #### CODE OPTIMIZATION
   The code is written in the most optimized manner where the same code ( if it occurs somewhere else ) is written as
   a function so that it can be used by some other part in the program
   
   #### RESPONSIVE
   
   The application adjust pretty well in all the screens such as Phone, tablet and laptops. 
  
  
  ## Installation 
  
    Real time chat App requires `Node.js` to run.
    
    Install the Dependencies and start the server.The below following dependencies were installed on the local
    environment using npm manager
    Thing to note here is that socket.io was imported at both the front end and the back end. We used npm manager to
    install the socket library at the server side and socket CDN was used at the client side.
    
    
  #### To install: 
  
   ```sh
    npm i nodemon --save-dev (only needed in the development environment )
    npm i socket.io --save ( At the server side )
    npm install mongodb ( MongoDB driver )
    
   ```
   Place this CDN as the script tag on the front end: [Socket.io](https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.dev.js)
   #### Running the Development Server: 
   
   ```sh
    $ npm start
   ```
   
  
   ## Technologies 
   
   - The application was coded in the Visual Studio code IDE. 
   - The application was created using latest versions of Node.js(v10.15.3)
   - The appication uses the latest version of MongoDB driver (^3.5.9)
   - The application uses the socket.io library both at the front end and the back end
   - Acoording to the recent update with the application, it does store the chat in a MongoDB database locally. 
     And the chat will be removed if you click the clear button as this button is initiating the chat collection
     in the database to get empty (chat.remove({},callback)
   
   ## Screenshots
   
   - Two users starting to chat
   ![Alt text](/Screenshots/Output_1.png?raw=true "Working of Web Sockets")
   
   - Both the users are able to chat with each other ( also the message sender recieves the status of 'Message Sent' on the top
   ![Alt text](/Screenshots/Output_2.png?raw=true "Working of Web Sockets")
   
   - Application behaves responsive on the smaller screen
   ![Alt text](/Screenshots/Output_4.png?raw=true "Working of Web Sockets")
   
   - Application behaves responsive on the bigger screen ( width greater than or equal to 768px )
   ![Alt text](/Screenshots/Output_3.png?raw=true "Working of Web Sockets")
