import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import prismaClient from "../../prisma";

class CreateCategoryService {
    async execute ({ name, user_id }: CategoryRequest) {
        if (name === "" || name === null || !name){
            throw new Error ("The Category name is invalid")
        }

        const categoryExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if (categoryExists){
            throw new Error ("Category already exists")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name,
                user_id: user_id
            },
            select: {
                id: true,
                name: true
            }
        })

        return category

    }
}

export { CreateCategoryService }