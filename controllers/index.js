class Controller {
    static async login(req, res) {
        console.log("Ini buat controller login")
    }
    static async register(req, res) {
        res.send("ini page register")
    };
};

module.exports = Controller;