import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";
import prismaClient from "../../prisma";

class EditCategoryService {
    async execute ({ name , category_id }:EditCategoryRequest) {
        if (name === "" || name === null || !name) {
            throw new Error ("The Category name is invalid")
        }
        if (category_id === "" || category_id === null || !category_id){
            throw new Error ("The Category ID is not found")
        }

        const categoryEdit = await prismaClient.category.update({
            where: {
                id: category_id
            },
            data: {
                name: name
            }
        });

        return categoryEdit;
    }
}

export { EditCategoryService }