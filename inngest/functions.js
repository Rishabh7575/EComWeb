import { inngest } from "./client";
import { prisma } from "@/lib/prisma";


//inngest function to sync user data from clerk to our database
export const syncUserCreation = inngest.createFunction(
    {id : "sync-user-create" },
    {
        event: "clerk/user.created",
    },
    async ({ event }) => {
        const { data} = event
        await prisma.user.create ({
            data : {
                id : data.id,
                email: data.email_addresses[0].email_addresses,
                name: `${data.first_name} ${data.last_name}`,
                image:data.image_url
            }
        })
    }
)

//inngest function to sync user data from clerk to our database on user update
export const syncUserUpdation = inngest.createFunction(
    { id : "sync-user-update" },
    {
        event:"clerk/user.updated",
    },
    async ({ event }) => {
        const { data } = event
        await prisma.user.update ({
             where : { id : data.id },
            data : {
                email: data.email_addresses[0].email_addresses,
                name: `${data.first_name} ${data.last_name}`,
                image:data.image_url
            }
        })
    }
)


export const syncUserDeletion = inngest.createFunction(
    { id : "sync-user-deletion"},
    {
        event:"clerk/user.deleted",
    },
    async ({ event }) => {
        await prisma.user.delete ({
            where : { id : event.data.id },
        })
    }
)