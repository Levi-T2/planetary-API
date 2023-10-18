import { Schema } from "mongoose";

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 35 },
        stars: { type: Number, required: true, min: 1, max: 100000 },
        type: { type: String, required: true, maxLength: 35 },
        imgUrl: { type: String, required: true, maxLength: 380 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)
