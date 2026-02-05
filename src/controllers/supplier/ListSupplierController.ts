import { Request, Response } from "express";
import { DetailSupplierService } from "../../services/supplier/ListSupplierService";

class DetailSupplierController {
    async handle(request: Request, response: Response) {
        const detailSupplierService = new DetailSupplierService();
        const supplier = await detailSupplierService.execute();
        return response.json(supplier);
    }
}

export { DetailSupplierController }