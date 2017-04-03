app.service('AuthService', function ($http, $q) {
  return {
    getStatus: function () {
      return new Promise(function (resolve, reject) {
        $http.get("/me").then(function (data) {
          resolve(data.data);
        })
      });
    },
    login: function (email, pass) {
      return new Promise(function (resolve, reject) {
        $http.post("/signin", { email: email, pass: pass }).then(function (data) {
          resolve(data.data);
        }, function (err) {
          reject(err.data);
        });
      })

    },
    logout: function () {
      return new Promise(function (resolve, reject) {
        $http.get("/logout").then(function() {
          resolve();
        })
      });
    }

  }
});