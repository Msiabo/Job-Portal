import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
    try {

        //Create svix instance with clerk webhook secret
        const hook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Verify headers
        await hook.verify(JSON.stringify(req, res), {

            "svix-id": req.headers["svix-id"],
            "svix-signature": req.headers["svix-signature"],
            "svix-timestamp": req.headers["svix-timestamp"]
        })

        //Get data from request body
        const { data, type } = req.body

        //Switch cases for different events
        switch (type) {
            case 'user.created': {

                const userData = {
                    id: data.id,
                    name: data.first_name + "" + data.last_name,
                    email: data.email_addresses[0].email_address,
                    image: data.image_url,
                    cv: ''
                }
                await User.create(userData)
                res.JSON({})
                break;
            }
            case 'user.updated': {
                const userData = {
                    
                    name: data.first_name + "" + data.last_name,
                    email: data.email_addresses[0].email_address,
                    image: data.image_url
                    
                }
                await User.findByIdAndUpdate(data.id ,userData)
                res.JSON({})
                break;

            }
            case 'user.deleted': {
                await User.findByIdAndDelete(data.id ,userData)
                res.JSON({})
                break;

            }

            default:
                break;
        }

    } catch (error){
console.log(error.message)
res.JSON({success : false ,message:'Webhooks error'})

    }
}


