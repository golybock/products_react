import JsCookie from "js-cookie";

class Cookie{
    static setToken = (token) => {
        JsCookie.set('token', token);
    }

    static getToken = () => {
        return JsCookie.get('token');
    }

    static removeToken = () => {
        JsCookie.remove('token');
    }
}



export default Cookie