/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var firebase = require('firebase');
var FIREBASE = require("../../config/env/development.js");
var app = firebase.initializeApp(FIREBASE.FIREBASE);
var db = app.database();
// var admin = require("firebase-admin");
// admin.initializeApp({
//     credential: admin.credential.cert(FIREBASE.FIREBASE),
//       databaseURL: FIREBASE.FIREBASE.databaseURL
// });
// var db = admin.database();
module.exports = {
    addAdmin: function (email, pass) {
         db.ref("users").orderByChild('email').equalTo(email).once("value",function(user) {
            console.log(user.numChildren());
        })
        // var newUser=  db.ref("users").push();
        // newUser.set({
        //     email: email,
        //     password: pass,
        //     isAdmin: true
        // });
    }
};

sails.on('lifted', function () {
    module.exports.addAdmin("admin@admin", "1_1_1");
    // module.exports.addAdmin("admin@admin", "1_1_1");
    var ref = db.ref("users");
    ref.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            // ref.child(childSnapshot.key).remove();
            // console.log(childSnapshot.key, childSnapshot.val())

        });
    });
});