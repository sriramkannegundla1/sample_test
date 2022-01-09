import mysql from "mysql";
const db = mysql.createConnection({
    user: "root",
    host : "localhost",
    password : "root",
    database : "users"
});
function getViewCount(){
    db.query("select viewCount from counts",
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    }
    );
}