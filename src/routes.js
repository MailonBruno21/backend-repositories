import { Router } from "express";

import auth from "./middlewares/auth"

import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController";
import RepositoriesControllers from "./controllers/RepositoriesControllers";

const routes = new Router()



routes.post('/sessions', SessionsController.create)

routes.use(auth)

//Rotas user
routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show)
routes.post('/users', UsersController.create)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.destroy)

//Rotas repositories

routes.get('/users/:user_id/repositories',RepositoriesControllers.index)
routes.post('/users/:user_id/repositories',RepositoriesControllers.create)
routes.delete('/users/:user_id/repositories/:id', RepositoriesControllers.destroy)


export default routes