/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.

*/
const array = [
   {
    image: '01.webp',
    tittle: 'image1',
    descrizione : 'image1'
   },
   {
    image: '02.webp',
    tittle: 'image2',
    descrizione : 'image2'
   },
   {
    image: '03.webp',
    tittle: 'image3',
    descrizione : 'image3 '
   },
   {
    image: '04.webp',
    tittle: 'image4',
    descrizione : 'image4 '
   },
   {
    image: '05.webp',
    tittle: 'image5',
    descrizione : 'image5 '
   },
];
for ( let i = 0; i < array.length; i++){
    console.log(array[i]);
};