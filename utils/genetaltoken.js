import jwt from "jsonwebtoken";

const generaltoen = ( id) =>{
    return jwt.sign({id}, "abc123")

}

export default generaltoen