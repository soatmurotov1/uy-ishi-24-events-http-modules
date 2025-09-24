


import { log } from "console"
import fs from "fs/promises"
import path from "path"


async function main() {
    try {
        const patdir = path.join(".", "my_nodejs_files")
        await fs.mkdir(patdir, { recursive: true })
        console.log("Katolog yaratildi");
        
        const patfile = path.join(patdir, "hello_world.txt")
        await fs.writeFile(patfile, "Hello world", "utf8")
        console.log("File yaratildi va yozildi");
        


        const text = await fs.readFile(patfile, "utf8")
        console.log("File mazmuni: ", text);
        
    } catch (err){
        console.error("xatolik", err)
        
    }




}


main()