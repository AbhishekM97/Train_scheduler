
/*  1.create function to collect values from input form.
    same function stores the values into fire base.
    2.Create function that uses the given information to append
    a new table row of data and displays to html page.
*/

var firebaseConfig = {
    apiKey: "AIzaSyB3dJ_Z82BPXUdl34OzZZbfOL4XbYVAAqM",
    authDomain: "trainschedule-2f5f8.firebaseapp.com",
    databaseURL: "https://trainschedule-2f5f8.firebaseio.com",
    projectId: "trainschedule-2f5f8",
    storageBucket: "",
    messagingSenderId: "141419451540",
    appId: "1:141419451540:web:55d307c7ab50b48c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var name;
var Destination;
var FirstT;
var Frequency;

function CollectValues(){
    //Getting all the values from the input form
    name = $("#TrainName").val();
    Destination = $("#Destination").val();
    FirstT = $("#FirstTrain").val();
    Frequency = $("#Frequency").val();

    // calling function to store data in fire base.
    dataStore();
}   

function dataStore(){
    database.ref(name).set({
        Destination: Destination,
        FirstTrain: FirstT,
        Frequency: Frequency
    });
}

$("#info").on('click', CollectValues());