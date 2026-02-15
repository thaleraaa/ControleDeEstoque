import prismaClient from "../../prisma";
import { EditProductRequest } from "../../models/interfaces/product/EditProductRequest";
import { EditSupplierRequest } from "../../models/interfaces/supplier/EditSupplierRequest";

class EditSupplierService {
    async execute ({supplier_id, name}:EditSupplierRequest) {
        if (supplier_id){
            const editedSupplier = await prismaClient.supplier.update({
                where: {
                    id: supplier_id
                },
                data: {
                    name: name
                }
            });
            return editedSupplier;
        }
    }
}

export { EditSupplierService }