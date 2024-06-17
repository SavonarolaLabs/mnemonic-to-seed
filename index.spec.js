import { describe, it, expect } from "vitest"
import { l } from "./index"
describe("12 words",()=>{
    it('array',()=>{
        expect(l.length).toBe(12)
    })
})