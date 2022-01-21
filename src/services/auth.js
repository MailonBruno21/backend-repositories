// import bcryptjs from "bcryptjs";

import bcrypt from "bcryptjs"

export const createPasswordHash = async (password) => {
    
    const hash = bcrypt.hashSync(password, 8)
    // console.log(hash + ' password inside hash code Output')
    return hash
}

export const checkPassword = (user, password) => {
    // console.log(password + ' password inside hash code Input')
    
    return bcrypt.compareSync(password, user.password)
        
    // console.log(user.password + ' password inside hash code Output')
}