import { Request, Response} from "express"
import { SupplierRequest } from "../../models/interfaces/supplier/SupplierRequest"
import { CreateSupplierService } from "../../services/supplier/CreateSupplierService"

class CreateSupplierController {
    async handle(request: Request, response: Response){
        const { name }:SupplierRequest = request.body;
        const user_id = request.user_id;
        const createSupplierService = new CreateSupplierService();
        const newSupplier = await createSupplierService.execute({name, user_id});
        return response.json(newSupplier);
    }
}

export { CreateSupplierController }