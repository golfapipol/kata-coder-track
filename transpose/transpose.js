const transposeMap = {
    "C": "D",
    "Dm": "Em",
    "Em": "F#m",
    "F": "G",
    "G": "A",
    "Am":"Bm"
}
const transpose = (songs) => songs.split("\n")
    .map((song) => song.split(" ")
                       .map((note) => transposeMap[note]).join(" ")
    ).join("\n")
module.exports = transpose