import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";
import { DeleteProductRequest } from "../../models/interfaces/product/DeleteProductRequest";

class DeleteProductController {
    async handle (request: Request, response: Response) {
        const product_id = request.query.product_id as string;
        const deleteProductService = new DeleteProductService();
        const deletedProduct = deleteProductService.execute({product_id});
        return response.json(deletedProduct);
    }
}

export { DeleteProductController }