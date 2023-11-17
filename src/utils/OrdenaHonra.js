function ordenaHonra(honras) {
    // Função de comparação para ordenar os objetos com base em strSeason
    function compararTemporadas(a, b) {
        return parseInt(a.strSeason.split('-')[0]) - parseInt(b.strSeason.split('-')[0]);
    }

    // Ordenar as honras usando a função de comparação
    honras.sort(compararTemporadas);

    return honras;
}

export default ordenaHonra;