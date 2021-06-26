
function formatDate(val) {
    
    let n = val;
    let year = n.getFullYear();
    let month = n.getMonth();
    let date = n.getDate();
    let hour = n.getHours();
    let minutes = n.getMinutes();
    let seconds = n.getSeconds();
    console.log(`${year}-${month}-${date}  ${hour}:${minutes}:${seconds}`);
}

var today = new Date();
var yesterday = new Date();
yesterday.setDate(today.getDate()-1);
formatDate(today);
formatDate(yesterday);
