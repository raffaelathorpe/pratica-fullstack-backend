const express = require("express");
const feiticoController = require("../controllers/feiticoController");

const router = express.Router();

router.get("/", feiticoController.listarFeiticos);
router.get("/:id", feiticoController.buscarFeitico);
router.post("/", feiticoController.criarFeitico);
router.put("/:id", feiticoController.atualizarFeitico);
router.delete("/:id", feiticoController.excluirFeitico);

module.exports = router;