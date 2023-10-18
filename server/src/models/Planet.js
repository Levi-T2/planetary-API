import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 35 },
        biome: { type: String, required: true, maxLength: 40 },
        atmosphere: { type: Boolean, required: true, default: false },
        galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)


PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})