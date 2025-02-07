import { Webhook } from "svix";
import User from '../models/User.js'

export const clerkWebhooks = async (req,res) => {
    try {
        //Create a svix instance with clerk webhook secret
        const hook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        //Verify headers
        await hook.verify(JSON.stringify(req,body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })
        //Get data from request body
        const {data,type} = (req,body);

        //Switch case for different events
        switch (type){
            case 'user.created' : {
                const userData ={
                    id : data.id ,
                    name : data.first_name + "" + data.last_name,
                    email : data.email_addresses[0].email_address ,
                    cv : "" ,
                    image : data.image_url
                }
                await User.create(userData)
                res.json({})
                break;

            }
            case 'user.updated' : {
                const userData ={ 
                    name : data.first_name + "" + data.last_name,
                    email : data.email_addresses[0].email_address ,
                    image : data.image_url
                }
                await User.findByIdAndUpdate(data.id,userData)
                res.json({})
                break;

            }
            case 'user.deleted' : {
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;

            }
            default : 
            break;
        }
        
    } catch (error) {
        console.log(error.message)
        res.json({success:false ,message:'Webook error'})
        
    }
}