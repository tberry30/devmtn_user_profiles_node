var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];


module.exports = {

  login: function(req, res, next) {
    var found = false;
    users.forEach(function(user) {
      if (user.name === req.body.userName && user.password === req.body.password) {
        req.session.currentUser = user;
        found = true;
        // return res.send({ userFound : found });
      }
    });
    return res.send({ userFound : found });
    next();
  }




};
