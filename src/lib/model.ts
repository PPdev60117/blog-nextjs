import mongoose ,{Schema} from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:String
    }
}, { strict: false })

const PostSchema = new mongoose.Schema({
    header:{
        type:String,
        require:true,
    },
    describe:{
        type:String,
    },
    author:{
        name:{
            type:String,
            require:true,
            unique:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true
        },
        image:{
            type:String
        }
    },
    content:Schema.Types.Mixed,
    type:[
        {name:String}
    ],
    like:[
        {user:{
            type:String,
            require:true
        }}
    ]
    
    
},{timestamps:true,strict: false })

const TypesSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    }
})

export const User = mongoose.models?.User || mongoose.model('User',UserSchema)
export const Post = mongoose.models?.Post || mongoose.model('Post',PostSchema)
export const Types = mongoose.models?.Types || mongoose.model('Types',TypesSchema)