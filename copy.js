



import fs from "fs/promises"


async function rename() {

    try {
        await fs.access("wrongFilename.txt")


        await fs.access("properFilename.md")
        throw new Error("Fs operation failed")
    }
    catch (err) {
        console.error("xatolik", err);
        
    }
    await fs.rename("wrongFilename.txt", "properFilename.md")
    console.log("file nomi uzgardi");
    

}
rename()