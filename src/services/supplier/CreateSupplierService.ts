import prismaClient from "../../prisma";
import { SupplierRequest } from "../../models/interfaces/supplier/SupplierRequest";

class CreateSupplierService {
    async execute({ name, user_id}:SupplierRequest){
        if(name === "" || !name || name === null){
            throw new Error ("The Supplier name is invalid");
        }

        const newSupplier = await prismaClient.supplier.create({
            data: {
                name: name,
                user_id: user_id
            },
            select: {
                id: true,
                name: true
            }
        })

        return newSupplier;
    }
}

export { CreateSupplierService }