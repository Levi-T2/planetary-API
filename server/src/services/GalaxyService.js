import { dbContext } from "../db/DbContext.js"

class GalaxyService {
    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }
}

export const galaxyService = new GalaxyService()