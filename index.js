// add solution here
function theBeatlesPlay(musician, instrument){
  var bar = []
  for(var i = 0; i <= musician.length(); i++){
    var concat = musician[i] + instrument[i]
    bar = bar.push(concat)
  }
  return bar
}
