import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetService.js";


export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGalaxy)
    }


    async getGalaxies(request, response, next) {
        try {
            const galaxies = await galaxyService.getGalaxies()
            return response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(request, response, next) {
        try {
            const galaxyData = request.body
            const userInfo = request.userInfo
            galaxyData.creatorId = userInfo.id
            const galaxy = await galaxyService.createGalaxy(galaxyData)
            return response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
    async getPlanetsByGalaxyId(request, response, next) {
        try {
            const galaxyId = request.params.galaxyId
            const planets = await planetService.getPlanetsByGalaxyId(galaxyId)
            return response.send(planets)
        } catch (error) {
            next(error)
        }
    }
}
