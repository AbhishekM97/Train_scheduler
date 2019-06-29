/* take input from the form in the html page.
    Store into varaibles everytime submit is clicked.
    from those variables create new table data that is displayed into the webpage.
    Store arrival and departure data for each train.
    Utilize Moment.js to manipulate information.
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

var database = firebaseConfig.database();

var name;
var Destination;
var FirstT;
var Frequency;
