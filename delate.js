


import fs from "fs/promises"



async function remove() {
    try {
        await fs.access("fileToRemove.txt")
        await fs.unlink("fileToRemove.txt")
        console.log("File uchirildi");

        
    }
    catch (err) {
        throw new Error("Fs operation failed")
    }
}

remove()