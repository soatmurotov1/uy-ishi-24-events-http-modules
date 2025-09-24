






import fs from "fs/promises"
async function listFile() {
    let fold = "files"
    try {
        await fs.access(file)
        let file = await fs.readdir(fold)

        console.log(file);
        
    }
    catch (err) {
        console.error("Fs operation failed");

        
    }
}

listFile()