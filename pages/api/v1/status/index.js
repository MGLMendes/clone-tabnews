function status(request, response) {
  response.status(200).json({
    chave: "Deu bão dnv",
  });
}

export default status;
