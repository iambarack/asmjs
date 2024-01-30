export default function(rx, tok) {
    console.log("\x1b[32m", "JASM->movi [rx: ", rx, ", tok:", tok, "]", "\x1b[0m");
    if(Array.isArray(rx)) {
        tok = isNaN(rx[1]) ? rx[1] : rx[1];
        console.log(tok, "now")
        rx = rx[0];
    }
    else if(!regs.has(rx)) return
    if (isNaN(tok)) {
        console.log("NaN");
        if(regs.has(tok)) {
            regs.set(rx, regs.get(tok));
        }
    } else {
        regs.set(rx,tok)
    }
}

