const passport = require('passport')
const AdminTbl = require('../models/adminschema');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {} 
// step - 1 (googole per thi)
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'hemanshi';

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
        try{
            let User = await AdminTbl.findOne({id : jwt_payload.payload.id});
            // console.log(User);
           if(User){
                done(null,User);
           }else{
                done(null,false)
           }
        }catch(err){
            console.log(err);
            return false;
        }
}));

module.exports = passport;