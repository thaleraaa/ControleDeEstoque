import { Request, Response } from "express";
import { EditSupplierService } from "../../services/supplier/EditSupplierService";
import { EditSupplierRequest } from "../../models/interfaces/supplier/EditSupplierRequest";

class EditSupplierController {
    async handle (request: Request, response: Response) {
        const { name }:EditSupplierRequest = request.body;
        const supplier_id = request.query.supplier_id as string;
        const editSupplierService = new EditSupplierService();
        const editedSupplier = await editSupplierService.execute({name,supplier_id});
        return response.json(editedSupplier);
    }
}

export { EditSupplierController }