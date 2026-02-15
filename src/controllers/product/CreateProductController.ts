import { request, Request, response, Response } from "express"
import { ProductRequest } from "../../models/interfaces/product/ProductRequest"
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle (request: Request, response: Response) {
        const { name, price, description, banner, category_id, amount, supplier_id}: ProductRequest = request.body;
        const user_id = request.user_id;
        const createProductService = new CreateProductService();

        if(!request.file){
            throw new Error ("Error sending image");
        } else {
            const { originalname, filename: banner} = request.file;
            const product = await createProductService.execute({
                name, 
                price, 
                description, 
                banner, 
                category_id, 
                amount,
                user_id,
                supplier_id
            });
            response.json(product);
        }

    }
}

export { CreateProductController }