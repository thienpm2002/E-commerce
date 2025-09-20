import adminRoute from './admin.route.js'

const routes = (app) => {
    app.use('/api/v1',adminRoute);
}

export default routes;