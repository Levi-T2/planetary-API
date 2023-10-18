import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async getPlanets() {
        const planets = await dbContext.Planets.find().populate('galaxy')
        return planets

    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        await planet.populate('galaxy')
        return planet
    }
    async getPlanetsByGalaxyId(galaxyIdFromParameters) {
        const planets = await dbContext.Planets.find({ galaxyId: galaxyIdFromParameters }).populate('galaxy')
        return planets
    }

}

export const planetService = new PlanetService()