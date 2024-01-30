import movi from "../util/movi.js"

export default function(JASM) {
    const sz = JASM.length;
    if(!sz) return;

    console.log(asm);
    for (let i = 0; i < sz; i++) {
        let ln = JASM[i];
        let lx = ln.length;
        for (let j = 0; j < lx; j++) {
            console.log("\x1b[34m", "JASM :: ij", i, j, ln[0], "\x1b[34m:: JASM\x1b[0m")
            //console.log("method", ln[0][0])
            // if (asm.has(ln[0][0])) execute(ln[0][0], )
        }
        if (asm.has(ln[0][0])) {
            execute(ln[0][0], ln[0][1], ln[1][0])
        }

        console.log("\n")
    }

    // JASM.forEach(el => {
    //     console.log(el);
    // })
}

export function execute(token,...args) {
    switch (token) {
        case "movi":
            console.log("called movi")
            movi(args)
            break;
    
        default:
            break;
    }
}