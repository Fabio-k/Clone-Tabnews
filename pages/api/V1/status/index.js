function status(request, response) {
  response.status(200).json({ chave: "resposta da api" });
}
export default status;
