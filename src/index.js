
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (Array.isArray(matrix) && matrix.length != 0){
let arrNew =[]; 
let arrNewer =[]; 
let strNew='';
for(let i=0; i<matrix.length; i++){
i % 2 == 0 ?  strNew+= matrix[i].join(',') +',' : strNew+= matrix[i].reverse().join(',') +',';
}
arrNew = strNew.split(',');
for(let i = 0; i<arrNew.length-1; i++){
arrNewer[i]=+arrNew[i];
}
return arrNewer;
}
else return [] 
}
