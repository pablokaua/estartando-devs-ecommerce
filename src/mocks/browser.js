import { setupWorker, rest } from "msw";
import { products } from "./data";

const categories = {
    design: 'Design UX',
    frontend: 'Front-end',
    backend: 'Back-end'
}

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
    }),

    rest.get('/produtos/categorias/:category', (req, res, ctx) => {
        const path = req.params.category;
        const categoryList = products[1].filter((product) => product.category === categories[path]);
        console.log(path)

        return res(
            ctx.status(200),
            ctx.json([...categoryList])
        )
      })

)