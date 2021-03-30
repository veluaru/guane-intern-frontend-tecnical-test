
import api from './imageApi'
// const randomImage = "api/breeds/image/random"

export default {

    async getImage() {
        try {
            let data = await api.dogApi.get("api/breeds/image/random");
            let image = data.data.message;
            return image;
        } catch (error) {
            console.log(error);
            return {};
        }
    }
}