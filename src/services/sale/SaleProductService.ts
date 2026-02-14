import prismaClient from "../../prisma";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";

class SaleProductService {
    async execute ({ product_id, amount}:SaleProductRequest) {
        if (!product_id || !amount){
            throw new Error ("Dados incorrect!")
        }

        const queryProduct = await prismaClient.product.findFirst({
            where: {
                id: product_id
            }
        });

        if (!queryProduct) {
            throw new Error ("The product id is invalid")
        }

        if (queryProduct?.amount > amount && amount > 0) {
            const newAmount = (queryProduct?.amount - amount);
            const saveSale = await prismaClient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    amount: newAmount
                },
                select: {
                    id: true,
                    name: true,
                    amount: true
                }
            });
            return saveSale;
        } else {
            throw new Error ("Amount is insufficent");
        }

    }
}

export { SaleProductService }