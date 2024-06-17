import { sha256 } from "@noble/hashes/sha256";
const fs = require("fs");

export let bip39 = fs.readFileSync("./bip39.txt", "utf8").split("\n");

const entropy = new Uint8Array(16);
crypto.getRandomValues(entropy);
export const bits = Uint8Array.of(...entropy, sha256(entropy)[0]);

function mnemonicFromBits(bits) {
	const bitString = Array.from(bits, (byte) =>
		byte.toString(2).padStart(8, "0")
	).join("").slice(0, 132);

	return bitString
		.match(/.{1,11}/g)
		.map((bits) => bip39[parseInt(bits, 2)])
		.join(" ");
}

export function createMnemonic(){
    return mnemonicFromBits(bits);
}