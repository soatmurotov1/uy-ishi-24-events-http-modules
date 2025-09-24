


import fs from "fs/promises"
import path from "path"


async function createFile() {
    const patdir = path.join(".", "files")
    let patfile = path.join(patdir, "fresh.txt")



    try {
        await fs.mkdir(patdir, { recursive: true })


        await fs.writeFile(patfile, "I am fresh and young")
        console.log("File yaratildi");
        
    }
    catch (err) {
        console.log("Xatolik", err);
        
    }


}
createFile()