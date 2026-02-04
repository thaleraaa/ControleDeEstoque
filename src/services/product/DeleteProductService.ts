import prismaClient from "../../prisma";
import { DeleteProductRequest } from "../../models/interfaces/product/DeleteProductRequest";

class DeleteProductService {
    async execute ({product_id}:DeleteProductRequest) {
        if(!product_id){
            throw new Error ("The product id was not founded!")
        }
        const deletedProduct = await prismaClient.product.delete({
            where: {
                id: product_id
            }
        });
        return deletedProduct;
    }
}

export { DeleteProductService }