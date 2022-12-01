exports.isAuthenticated = async(req, res, next) => {
    const { loggedIn } = req?.session;

    if(loggedIn) next();
    else res.redirect('/user/login/');
};

exports.isGuest = async(req, res, next) => {
    const { loggedIn } = req?.session;

    if(!loggedIn) next();
    else res.redirect('/user/');
};