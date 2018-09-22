const transposeMap = {
    "C": "D",
    "Dm": "Em",
    "Em": "F#m",
    "F": "G",
    "G": "A",
    "Am":"Bm"
}

const transposeSong = (song) => {
    return song.split("[")
               .map((fragment) =>{ 
                    const [key, music] = fragment.split("]")
                    if (!music) {
                        return [key].join("]")
                    }
                    return [transposeMap[key], music].join("]")
               }).join("[")
}

module.exports = transposeSong
