import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVvClk9OcJhqbuMNz6V1xRq3doz-EOQMY",
    authDomain: "nba-full-72f70.firebaseapp.com",
    databaseURL: "https://nba-full-72f70.firebaseio.com",
    projectId: "nba-full-72f70",
    storageBucket: "nba-full-72f70.appspot.com",
    messagingSenderId: "697215190611",
    appId: "1:697215190611:web:073e1f2393215f02"
};
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })
    return data;
}
export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}
