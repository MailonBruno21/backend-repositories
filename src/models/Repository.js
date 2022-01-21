import  mongoose  from "mongoose";

const repositorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            
        },

        url: {
            type: String,
            required: true,
            unique: true
        },

        userID: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true  //coloca data de atualizcao no registro sem mandar pela aplicacao
    }
)

export default mongoose.model('Repository', repositorySchema)