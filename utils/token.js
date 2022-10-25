const atob = require('atob');

export class TokenUtil {
    static accessToken = null;
    static refreshToken = null;
    static username = null;
    static password = null;
    static isBought = null;

    static loadToken() {
        if (typeof window === "undefined") {
            return;
        }

        const accessToken = localStorage.getItem('access_token');
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        const isBought = localStorage.getItem('isBought');

        if (accessToken) {
            TokenUtil.setAccessToken(accessToken);
        }

        if (username) {
            TokenUtil.setUsername(username);
        }

        if (password) {
            TokenUtil.setPassword(password);
        }

        if (isBought) {
            TokenUtil.setIsBought(isBought);
        }
    }

    static persistToken() {
        if (TokenUtil.accessToken != null) {
            localStorage.setItem('access_token', TokenUtil.accessToken);
        } else {
            localStorage.removeItem('access_token');
        }
    }

    static persistIsBought() {
        if (TokenUtil.isBought != null) {
            localStorage.setItem('is_bought', TokenUtil.isBought);
        } else {
            localStorage.removeItem('is_bought');
        }
    }

    static setAccessToken(accessToken) {
        TokenUtil.accessToken = accessToken;
    }

    static setUsername(username) {
        TokenUtil.username = username;
    }

    static setPassword(password) {
        TokenUtil.password = password;
    }

    static setIsBought(isBought) {
        TokenUtil.isBought = isBought;
    }

    static clearAccessToken() {
        TokenUtil.accessToken = null;
    }

    static decodedToken() {
        if (TokenUtil.accessToken) {
            return JSON.parse(atob(TokenUtil.accessToken.split('.')[1]));
        }
        return {}
    }
}
