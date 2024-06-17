import { describe, it, expect } from "vitest"
import { createMnemonic,bip39 } from "./index"
describe("12 words",()=>{
    it('array',()=>{
        const mnemonic = createMnemonic();
        expect(mnemonic.split(" ").length).toBe(12)
    })
})