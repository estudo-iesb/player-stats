function formatData(dataNoFormatoOriginal) {
    const data = new Date(dataNoFormatoOriginal);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }
  
  export default formatData