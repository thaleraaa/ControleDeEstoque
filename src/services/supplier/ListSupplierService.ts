import prismaClient from "../../prisma";

class DetailSupplierService {
    async execute () {
        const supplier = await prismaClient.supplier.findMany();
        return supplier;
    }
}

export { DetailSupplierService }