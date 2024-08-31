import NextAuth, { CredentialsSignin } from "next-auth"
import Google from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { connectDb } from "@/utils/mongo";
import { userSchema } from "@/utils/schema";
 

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google({
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.clientSecret

  }),
  CredentialProvider({
    name:"credentials",
    credentials:{
        username:{
            type:"text",
            label:"username"
        },
        password:{
            type:"password",
            label:"Password"
        },
    },
   authorize:async(credentials)=>{
        const username = credentials.username ;
        const password = credentials.password ;

        if(!username || !password) throw new CredentialsSignin({cause:"Enter both "})
        connectDb();

        const user= await userSchema.findOne({username})
        if(!user) throw new CredentialsSignin({cause:"No user Founfd"})

            if(user.password!==password) throw new CredentialsSignin({cause:"Password is wrong"})

        return { name:username,id:user._id}
    }
  })
],
})