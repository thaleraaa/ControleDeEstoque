import prismaClient from "../../prisma";

class ListProductsService {
    async execute () {
        const allProducts = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                amount: true,
                supplier: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        })
        return allProducts;
    }
}

export { ListProductsService }