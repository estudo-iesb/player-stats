// import React from 'react';
// import { View, Text, Linking, ScrollView, Button } from 'react-native';
// import { Avatar, IconButton } from 'react-native-paper';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';

// const formatURL = (url) => {
//   // Função para formatar a URL se necessário
//   // ...
//   return url;
// };

// const PlayerDetails = ({ jogador, marco }) => {
//   const ItemCarousel = ({ item }) => {
//     // Implemente a renderização dos itens do carousel aqui
//     // ...
//   };

//   const exportToPDF = async (playerData) => {
//     const htmlContent = `
//       <div>
//         <h1>${playerData.strPlayer}</h1>
//         <p>Twitter: ${formatURL(playerData.strTwitter)}</p>
//         <p>Instagram: ${formatURL(playerData.strInstagram)}</p>
//         <p>Facebook: ${formatURL(playerData.strFacebook)}</p>
//         <h2>Marcos de carreira</h2>
//         <ul>
//           ${marco.map((item) => `<li>${item}</li>`).join('')}
//         </ul>
//       </div>
//     `;

//     const options = {
//       html: htmlContent,
//       fileName: 'player_info',
//       directory: 'Documents',
//     };

//     try {
//       const pdfFile = await RNHTMLtoPDF.convert(options);
//       console.log(pdfFile.filePath); // Caminho do arquivo PDF gerado
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <ScrollView>
//       {/* Seu código de renderização do jogador aqui */}
//       {/* ... */}
//       <Button title="Exportar para PDF" onPress={() => exportToPDF(jogador)} />
//     </ScrollView>
//   );
// };

// export default PlayerDetails;
