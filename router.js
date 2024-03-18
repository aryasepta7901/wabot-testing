const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.daftarProduk"), [BotController, "product"]);
router.menu(f("menu.listProduk2"), [BotController, "listProduk2"]);
router.keyword("*", [BotController, "introduction"]);



module.exports = router;