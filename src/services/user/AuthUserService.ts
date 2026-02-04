import prismaClient from "../../prisma/index"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { AuthRequest } from "../../models/interfaces/user/auth/AuthRequest"

class AuthUserService {

    async execute ({email, password}: AuthRequest){


        if (!email){
            throw new Error ("You must provide an email")
        }

        if (!password){
            throw new Error ("You must provide an Password")
        }

        //Verificar no banco de dados se o email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Wrong username or password!");
        }

        //Verificar se a senha do usuario está correta
        const passwordMatch = await compare(password, user?.password);

        if(!passwordMatch){
            throw new Error ("Wrong username or password!");
        }

        const token = sign(
            {
                name: user?.name,
                email: user?.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "30d"
            }
        );

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token
        }
    }
}

export { AuthUserService }