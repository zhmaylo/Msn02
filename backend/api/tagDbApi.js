const Tag = require("../models/Tag");


// const tagsConst = "таракан,стена,подъезд,жильцы,шахта,час,вопрос";
const tagsConst = "таракан";
/////////
// розкоментируй createTask
/////////

const tagsToTable = (tags) => {
    tags = tagsConst;
    tags = prepareTags(tags);
    tagAddToDB(tags[0]);
    findAllTags();
    
}
const findAllTags = async () =>{
    const tags = await Tag.findAll()
    console.log("🚀 ~ file: tagDbApi.js ~ line 19 ~ tags", tags);
}

const tagAddToDB = async (tag) => {
    let itemDB = await findOrCreateTag(tag);
    itemDB = countIncrease({itemDB});
    updateTagToDB(itemDB);
}

const updateTagToDB = async (itemDB) => {
    Tag.update(
        { count: itemDB.count },
        { where: { value: itemDB.value } }
    ).catch(err => console.err("🚀 updateTagToDB() ~  err  ", err));
}

const countIncrease = ({itemDB}) => {
    itemDB.count++;
    return itemDB;
}

const findOrCreateTag = async (value) => {
    const itemDB = await Tag.findOrCreate({
        where: { value: value },
        defaults: {
            value: value,
            count: 0,
        }
    }).catch(err => console.err("🚀 findOrCreate() ~  err  ", err));
    if (itemDB[1]) {
        console.log("🚀 createTag - Ok  ", itemDB)
    };
    return itemDB[0].dataValues;
}

const prepareTags = (tags) => {
    tags = tagsToArray(tags)
    tags = tagsTrim(tags)
    tags = removeEmptyTags(tags)
    return tags;
}

const tagsToArray = (tags) => {
    return tags.split(',');
}

const tagsTrim = (tags) => {
    tags.forEach(item => {
        item = item.trim();
    })
    return tags;
}

const removeEmptyTags = (tags) => {
    const tagsWithoutEmptyItem = [];
    tags.forEach(item => {
        if (item.length > 0) tagsWithoutEmptyItem.push(item);
    })
    return tagsWithoutEmptyItem;
}


module.exports = {
    tagsToTable,
}