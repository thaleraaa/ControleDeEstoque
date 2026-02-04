import prismaClient from "../../prisma";

class ListCategoryService {
    async execute () {
        // buscar todas as categorias do nosso banco de dados
        const allCategories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        });

        return allCategories;
    }
}

export { ListCategoryService }