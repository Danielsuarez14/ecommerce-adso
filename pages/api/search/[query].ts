import type { NextApiRequest, NextApiResponse } from 'next'
import {Product} from '../../../models'
import {db} from '../../../database'
import { IProduct } from '../../../interfaces';

type Data = {name: string} | IProduct[]

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET' :
            return searchProduct(req,res);
        default:
        return res.status(400).json({
            name: 'Bad request'
        });
    }
}

const searchProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
        let {query = ''} = req.query
        query = query.toString().toLowerCase();

        if (query.length === 0 ) {
            return res.status(400).json({
                name: 'you must specify the search'
            })
        }

        await db.connect();
        const products = await Product.find({
            $text: {$search: query}
        }).select('title images price inStock slug -_id').lean()
        await db.disconnect();

        return res.status(200).json(products)


    }
