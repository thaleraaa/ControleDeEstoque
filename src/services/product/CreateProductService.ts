import prismaClient from "../../prisma";
import { ProductRequest } from "../../models/interfaces/product/ProductRequest";

class CreateProductService {
    async execute ({name, price, description, banner, category_id, amount, user_id, supplier_id}:ProductRequest) {
        if (name === "" || name === null || !name){
            throw new Error ("The Product name is invalid")
        }
        if (price === "" || price === null || !price){
            throw new Error ("The Product price is invalid")
        }
        if (amount === null || !amount){
            throw new Error ("The Product amount is invalid")
        }
        if (supplier_id === "" || supplier_id === null || !supplier_id){
            throw new Error ("The Product price is invalid")
        }

        const productExists = await prismaClient.product.findFirst({
            where: {
                name: name
            }
        });

        if(productExists){
            throw new Error ("This product name already exists");
        }

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
                amount: +amount,
                user_id: user_id,
                supplier_id: supplier_id
            },
            select: {
                id: true,
                name: true,
                amount: true
            }
        })

        return product
    }
}

export { CreateProductService }
