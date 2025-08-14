import User from '../models/userModel.js';

const createUser = async(req, res)=>{

    try{

        const user = await User.create(req.body);
        res.redirect('/form'); 
    }catch(error){
        res.status(500).json({
            succeded:false,
            error,
        });
    }
};

export{createUser};
