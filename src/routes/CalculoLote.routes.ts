import { Router } from "express";
import { createCalculoLoteController } from "../modules/CreateCalculoLote";
import { deleteAllCalculoLoteController } from "../modules/DeleteAllCalculoLote";
import { deleteCalculoLoteController } from "../modules/DeleteCalculoLote";
import { getCalculoLoteController } from "../modules/GetCalculoLote";


const routerCalculoLote = Router();



routerCalculoLote.post("/", (req, res) => {
    return createCalculoLoteController.execute(req, res);
})


routerCalculoLote.get("/", (req, res) => {
    return getCalculoLoteController.execute(req, res);
})


routerCalculoLote.delete("/",
    (req, res) => {
        return deleteAllCalculoLoteController.execute(req, res);
    })



routerCalculoLote.delete("/:id",
    (req, res) => {
        return deleteCalculoLoteController.execute(req, res);
    })





export { routerCalculoLote };