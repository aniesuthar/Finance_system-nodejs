const User = require('../models/user');

module.exports.list = async function(req,res){
    try {
        let user = await User.findById(req.user._id);
        if(user){
            console.log(user);
            res.render('statistics',{
                "page-title":"statistics",
                "user_info":user
            });

        }
        else{
            console.log(`user not found`)
        }
    } catch (error) {
        console.log(error);
        res.redirect('back')
    }

}