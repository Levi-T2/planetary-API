import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetService.js";


export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }

    async getPlanets(request, response, next) {
        try {
            const planets = await planetService.getPlanets()
            return response.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(request, response, next) {
        try {
            const planetData = request.body
            const userInfo = request.userInfo
            planetData.creatorId = userInfo.id
            const planet = await planetService.createPlanet(planetData)
            return response.send(planet)
        } catch (error) {
            next(error)
        }
    }
}