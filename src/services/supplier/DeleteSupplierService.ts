import prismaClient from "../../prisma";
import { DeleteSupplierRequest } from "../../models/interfaces/supplier/DeleteSupplierRequest";

class DeleteSupplierService {
    async execute ({ supplier_id }: DeleteSupplierRequest) {
        if(supplier_id){
            const deletedSupplier = await prismaClient.supplier.delete({
                where: {
                    id: supplier_id
                }
            });
            return deletedSupplier;
        }
    }
}

export { DeleteSupplierService }