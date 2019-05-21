/**
 * Membuat Object berdasarkan Array yang di kasih.
 * @dataArray ['ayam', 'bebek', 'angsa']
 *
 * @return sebuah @Object
 */
function ambilInfoArray(dataArray) {
   const dataObject = [dataArray]; //membuat variabel Object

  //tempat coding disini
  var panjangData = dataArray.length;
  var dataTest = {"data": dataArray,
"panjangData" : panjangData};
  
  return dataObject, dataTest;
}
