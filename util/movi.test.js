import { reg_init } from "../src/register.js"
import { parseJASM } from "../src/buffer.js";
import tokenizer from "../src/tokenizer.js"
import movi from "./movi.js"
console.log("\n\x1b[42m:: running movi.test.js ::\x1b[0m\n")


global.regs = reg_init(16);
global.asm = new Set();
asm.add("movi");
regs.set("r1", 5)
//console.log(regs)

const JASM = await parseJASM('test.jasm')

movi("r10", "r1")
movi("r2", 15)

tokenizer(JASM)

//console.log(JASM);

console.log("Registers", regs);