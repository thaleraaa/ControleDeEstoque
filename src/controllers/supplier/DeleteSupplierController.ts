import { Request, Response } from "express";
import { DeleteSupplierService } from "../../services/supplier/DeleteSupplierService";

class DeleteSupplierController {
    async handle (request: Request, response: Response) {
        const supplier_id = request.query.supplier_id as string;
        const deleteSupplierService = new DeleteSupplierService();
        const deletedSupplier = await deleteSupplierService.execute({supplier_id});
        return response.json(deletedSupplier);
    }
}

export { DeleteSupplierController }