export function reg_init(sz){
    let regs = new Map();
    for (let i = 0; i < sz; i++) {
        regs.set("r" + i, 0);
    }
    return regs;
}