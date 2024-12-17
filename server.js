
import "dotenv/config";
import app from "./src/app.js";


app.listen(3000, (err)=>{
    if (err)
        console.error(err.code)
    console.log("Listening on port 3000")
})