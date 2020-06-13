// requiring the mongo driver

const mongo = require('mongodb').MongoClient;
const io = require('socket.io').listen(4000).sockets;

// Connect to mongodb locally

mongo.connect('mongodb://localhost/mongochat', { useNewUrlParser: true }, (err,client) => {

   var db = client.db('mongochat');
    if (err) {
        throw err;
    }
    else {
        console.log('MongoDB Connected.....');
    };  // here 'mongochat' is the database name which can be referenced by db

    // waiting for the connection to socket.io from the client

    io.on('connection', function (socket) {

        // creating a collection in the database db
        let chat = db.collection('chats');

        //create function to send the status
        sendStatus = function (s) {
            socket.emit('status', s);
        }

        //Get the chats from the mongo collection
        chat.find().limit(100).sort({ _id: 1 }).toArray(function (err, res) {
            if (err) {
                throw err;
            }
            //Emit the messages
            socket.emit('output', res);

        });

        // handle the input events from clients

        socket.on('input', function (data) {
            let name = data.name;
            let message = data.message;

            //check for name and message

            if (name == '' || message == '') {
                //send error status
                sendStatus('Please enter the name and the message');
            } else {
                // Insert the message into the database
                chat.insert({ name: name, message: message }, function () {

                    // emmitting the output back to the client
                    io.emit('output', [data]);

                    //send status object

                    sendStatus({
                        message: 'Message Sent',
                        clear: true
                    });
                });
            }

        });

        // Handle the clear button

        socket.on('clear', function (data) {

            // Remove all the chats from the collection
            chat.remove({}, function () {

                // Emit cleared
                socket.emit('cleared');
            });
        });
    });

});

