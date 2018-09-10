/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var onee = preferences[i];
    var two = preferences[onee-1];
    var three = preferences[two-1];
    var final = three - 1;
    if ((i == final) && (onee!=two && (two!= three)) ) { count++; preferences[i]=0; preferences[onee-1]=0; preferences[two-1]=0; }
   
  } return count;
  // your implementation
};
