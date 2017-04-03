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

module.exports = {
    authLogin : function(req, res) {
        if( !req.body.email || !req.body.pass ) {
            res.status(400).send({message: "bad paramaters"});
        }
       module.exports.login(req.body.email, req.body.pass, req, res);
    },
    addAdmin: function (email, pass) {
        db.ref("users").orderByChild('email').equalTo(email).once("value", function (user) {
            // console.log(user.numChildren());
            if (user.numChildren === 0) {
                var newUser = db.ref("users").push();
                newUser.set({
                    email: email,
                    password: pass,
                    isAdmin: true
                });
            } else {
                console.log(`${email} user is already exist`);
            }
        })

    },
    me : function(req, res) {
        res.send(req.session.user);
    },
    logout : function( req, res) {
        delete req.session.user;
        return res.send({message : "logged out"});
    },
    login : function(email, pass, req, res) {
        db.ref("users").orderByChild('email').equalTo(email).limitToFirst(1).once("value", function( users) {
            // console.log(users.numChildren())
            if ( users.numChildren() !== 1) {
                return res.status(400).send({message : `User with email ${email} not found`});
            }
            users.forEach( user => {
                var testUser = user.val();
                if ( testUser.password !== pass) {
                    return res.status(400).send({message : `Password is incorrect`});
                }

                if ( !testUser.isAdmin) {
                    return res.status(400).send({message : `User is not admin`});
            
                }
                req.session.user = testUser;
                return res.status(200).send({message : "logged in successfully"});    
            })
        });
    }
};

sails.on('lifted', function () {
    // module.exports.addAdmin("admin@admin", "1_1_1");
    // module.exports.login("admin@admin", "1");
    // module.exports.addAdmin("admin@admin", "1_1_1");
    // var ref = db.ref("users");
    // ref.once('value', function (snapshot) {
    //     snapshot.forEach(function (childSnapshot) {
    //         // ref.child(childSnapshot.key).remove();
    //         // console.log(childSnapshot.key, childSnapshot.val())

    //     });
    // });
});