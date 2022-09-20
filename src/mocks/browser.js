import { setupWorker, rest } from "msw";
import { products } from "./data";

export const worker = setupWorker(
    rest.get('/produtos', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([...products])
        )
    }),

    rest.get('/produtos/:id', (req, res, ctx) => {
        const id = req.params.id;

        return res(
            ctx.status(200),
            ctx.json({...products[1][id]})
        )
    })
)