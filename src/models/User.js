import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true  //coloca data de atualizcao no registro sem mandar pela aplicacao
    }
)

export default mongoose.model('User', userSchema)