import { Request, Response} from "express"
import { RemoveCategoryRequest } from "../../models/interfaces/category/RemoveCategoryRequest"
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService";

class RemoveCategoryController {
    async handle (request: Request, response: Response) {
        const category_id = request.query.category_id as string;
        const removeCategoryService = new RemoveCategoryService();
        const removedCategory = await removeCategoryService.execute({category_id});
        return response.json(removedCategory);
    }
}

export { RemoveCategoryController }