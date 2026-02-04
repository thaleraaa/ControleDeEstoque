import { Request, Response} from "express"
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest"
import { EditCategoryService } from "../../services/category/EditCategoryService";

class EditCategoryController {
    async handle (request: Request, response: Response) {
        const { name }: EditCategoryRequest = request.body;
        const category_id = request.query.category_id as string;
        const editCategoryService = new EditCategoryService();
        const categoryEdited = await editCategoryService.execute({name, category_id})
        return response.json(categoryEdited);
    }
}

export { EditCategoryController }