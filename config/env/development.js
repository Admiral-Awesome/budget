/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  FIREBASE: {
    apiKey: "AIzaSyChMlNO15tMBP_CTDCi94CilUl0lgPsw1A",
    authDomain: "red-girder-150110.firebaseapp.com",
    databaseURL: "https://red-girder-150110.firebaseio.com",
    storageBucket: "red-girder-150110.appspot.com",
    messagingSenderId: "942196655048"
  }
  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

};
