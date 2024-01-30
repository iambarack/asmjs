//refer to util/movi.test.js for dev
//this file needs revisions
import { reg_init } from "./src/register.js"
import { parseJASM } from "./src/buffer.js";
import movi from "./util/movi.js"
console.log("init")

global.regs = reg_init(16);

regs.set("r1", 5)
console.log(regs)

const JASM = await parseJASM('test.jasm')

console.log(JASM);

movi(regs, "r10", 15)



