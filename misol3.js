import { log } from "console"
import fs from "fs"


fs.mkdir("my_nodejs_files", { recursive: true }, (err)=> {
    if (err) {
        console.error("Katolog yaratilmadi", err)
        return
    } 
    console.log("Katolog yaratildi");
    
})

fs.writeFile("hello_world.txt", "Hello world\n", (err) => {
    if(err) {
        console.error("Fayl yaratilmadi", err);
        
    }
    console.log("Fayl yaratildi");
})

fs.readFile("hello_world.txt", "utf8", (err) => {
    if (err) {
        console.error("Fayl uqilmadi", err)
    }
    console.log("fayl uqildi");
    
})

