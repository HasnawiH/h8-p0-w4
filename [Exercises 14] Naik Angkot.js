function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var output = []
  for ( var i =0; i < arrPenumpang.length; i++){
    
      var obj ={}
        obj.penumpang = arrPenumpang[i][0],
        obj.naikDari =  arrPenumpang[i][1],
        obj.tujuan = arrPenumpang[i][2],
        obj.bayar
      

        for (var j =0; j < rute.length; j++){
          if(arrPenumpang[i][1] === rute[j]){
            var keberangkatan = rute.indexOf(rute[j])
          }

          if(arrPenumpang[i][2] === rute[j]){
            var tujuan2 = rute.indexOf(rute[j])
          }
        }
      obj.bayar = (tujuan2 - keberangkatan)* 2000
      output.push(obj)
  }
 
  return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]