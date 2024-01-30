import fs from "fs"

export async function parseJASM(filename) {
    var data = fs.readFileSync(filename);

    return data.toString().replace(/  +/g, " ").replace(/[\r]/g, "")
        .split("\n")
        .map(l => l.split(",")
            .map(tok => tok.split(" ")
                .filter(e => e != ""))
        )

}
