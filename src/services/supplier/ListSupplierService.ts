import prismaClient from "../../prisma";

class DetailSupplierService {
    async execute () {
        const supplier = await prismaClient.supplier.findMany({
            select: {
                id: true,
                name: true,
                created_at: true,
                updated_at: true,
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        return supplier;
    }
}

export { DetailSupplierService }