
const getDateFromSequelizeFormat  = (dateSequelizeFormat) => {
    return dateSequelizeFormat.split("T")[0];
};

const getTimeFromSequelizeFormat  = (dateSequelizeFormat) => {
    return dateSequelizeFormat.split("T")[1].split("Z")[0].split(".")[0];
}
    
module.exports = {
    getDateFromSequelizeFormat,
    getTimeFromSequelizeFormat,
}