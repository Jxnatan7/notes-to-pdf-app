let sequencial = -1;

export const getNoteName = () => {
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, "0");
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const ano = dataAtual.getFullYear();
  const hora = String(dataAtual.getHours()).padStart(2, "0");
  const minutos = String(dataAtual.getMinutes()).padStart(2, "0");

  const nomeNota = `minha-nota-${String(sequencial).padStart(
    2,
    "0",
  )}_${dia}-${mes}-${ano}_${hora}_${minutos}`;

  sequencial++;

  return nomeNota;
};
