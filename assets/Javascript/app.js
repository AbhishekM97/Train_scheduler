
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
var destination;
var FirstT;
var Frequency;

function CollectValues(){
    //Getting all the values from the input form
    name = $("#TrainName").val();
    destination = $("#Destination").val();
    FirstT = $("#FirstTrain").val();
    Frequency = $("#Frequency").val();
    // calling function to store data in fire base.
    dataStore();
}   


function dataStore(){
    var NewTrain = {
        Name: name,
        Destination: destination,
        FirstTrain: FirstT,
        Frequency: Frequency
    }
    database.ref().push(NewTrain);
    $("#TrainName").val("");
    $("#Destination").val("");
    $("#FirstTrain").val("");
    $("#Frequency").val("");
    
}

database.ref().on("child_added",function(childSnapshot){
    console.log(childSnapshot.val());

    var name = childSnapshot.val().Name;
    var destination = childSnapshot.val().Destination;
    var FirstT = childSnapshot.val().FirstTrain;
    var Frequency = childSnapshot.val().Frequency;

    var FirstArrivalConverted = moment(FirstT, "HH:mm").subtract(1,"years");

    var currentTime = moment();

    var timeDifference = moment().diff(moment(FirstArrivalConverted),"minutes");

    var tRemainder = timeDifference%Frequency;

    var minutesTillNextTrain = Frequency - tRemainder;

    var nextTrain = moment().add(minutesTillNextTrain,"minutes");

    var newRow = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(Frequency),
        $("<td>").text(nextTrain),
        $("<td>").text(minutesTillNextTrain)
    );

    $("#TrainInfo> tbody").append(newRow);
});

$("#info").on('click', function(event){
    event.preventDefault();
    CollectValues();
});