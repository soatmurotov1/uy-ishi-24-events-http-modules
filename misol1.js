import fs, { writeFileSync } from "fs"
import  writeFile  from "fs"
import  readFile  from "fs"


export function writeNumbers(filename) {
    let number = ""
    for(let i =0; i< 100; i++){
        const random = Math.floor(Math.random() * 1000)
        number += random + "\n"

    }
    writeFileSync(__filename, number, "utf8")
    console.log(`${filename} faylga son qushildi `);
    
}
export function readNumber(filename) {
    const data = readFile()
}
