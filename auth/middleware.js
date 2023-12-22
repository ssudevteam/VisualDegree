
// isAuthenticated
// User is authenticated, proceed to the next middleware/route
// User is not authenticated, redirect to login
function isAuthenticated(req, res, next) {
    console.log(req.session.userData);
    if (req.session && req.session.userData) { 
      return next(); 
    }
    res.redirect('/login'); 
  }

  module.exports  = isAuthenticated;