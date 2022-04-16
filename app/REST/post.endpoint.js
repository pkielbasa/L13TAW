import business from '../business/business.container';
import applicationException from "../service/applicationException";
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/post/:id', async (request, response, next) => {
        try {
            let result = await business.getPostManager().get(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};
export default postEndpoint;
