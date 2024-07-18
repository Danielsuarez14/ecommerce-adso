import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new Schema(
    {
        description: { type: String, required: true, default: '' },
        images: [{ type: String },],
        inStock: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        sizes: [
            {
                type: String,
                enum: {
                    values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                    message: '{VALUE} This is not a valid size',
                },
            },
        ],
        slug: { type: String, required: true, unique: true },
        tags: [{ type: String }],
        title: { type: String, required: true, },
        types: [
            {
            type: String,
            enum: {
                values: ['T-Shirt', 'Hoodie', 'Cap', 'Pants'],
                message: '{VALUE} This is not a valid type'
            },
            default: 'T-Shirt',
            },
        ],
        gender: {
            type: String,
            enum: {
                values: ['Man', 'Woman', 'Unisex'],
                message: '{VALUE} This is not a valid gender'
            },
            default: 'Man',
        },
    }, {
    timestamps: true
}
);
const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema)

export default Product