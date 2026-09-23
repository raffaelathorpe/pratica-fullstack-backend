const Feitico = require("../models/Feitico");

async function listarFeiticos(req, res) {
  try {
    const feiticos = await Feitico.find();
    res.json(feiticos);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarFeitico(req, res) {
  try {
    const feitico = await Feitico.findById(req.params.id);
    if (!feitico) {
      return res.status(404).json({ mensagem: "Feitiço não encontrado" });
    }
    res.json(feitico);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarFeitico(req, res) {
  try {
    const feitico = await Feitico.create(req.body);
    res.status(201).json(feitico);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarFeitico(req, res) {
  try {
    const feitico = await Feitico.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!feitico) {
      return res.status(404).json({ mensagem: "Feitiço não encontrado" });
    }
    res.json(feitico);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirFeitico(req, res) {
  try {
    const feitico = await Feitico.findByIdAndDelete(req.params.id);
    if (!feitico) {
      return res.status(404).json({ mensagem: "Feitiço não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarFeiticos,
  buscarFeitico,
  criarFeitico,
  atualizarFeitico,
  excluirFeitico
};