const { pool } = require('../database');

const registerUser = async (req, res) =>
{
    try 
    {
        console.log(req.body);
        let sql = "INSERT INTO user (user_id, name , last_name , email, photo, password)"+
                                        "values ('"+ req.body.user_id+ "','"+
                                                     req.body.name + "','"+
                                                     req.body.last_name +"','"+
                                                     req.body.email +" ',' "+
                                                     req.body.photo +"','"+
                                                     req.body.password+"')";

        console.log(sql);
        let [result] = await pool.query(sql)
        console.log(result);

        if(result.insertId)
            res.send(String(result.insertId))
        else
            res.send("-1")
    }
    catch (error)
    {
        console.log(error);
    }
}

module.exports = {registerUser};