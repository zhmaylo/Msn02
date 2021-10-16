const Tag = require("../models/Tag");

const tagsToTable = async (tags) => {
    tags = prepareTags(tags);
    await tagsAddToDB(tags);
    await findAllTags();
}

const findMostPopularTag = async (amountTags = 7) => {
    const tags = await Tag.findAll({
        limit: amountTags,
        order: [
            ['count', 'DESC'],
        ],
    }).catch(err => console.error("🚀 findAllTaskAndSort()) ~ err  ", err));;
    return tags;
}


const findAllTags = async () => {
    const tags = await Tag.findAll()
    return tags;
}

const tagsAddToDB = async (tags) => {
    let i = 0;
    while (i < tags.length) {
        ((await tagAddToDB(tags[i])) && (i++));
    }
}

const tagAddToDB = async (tag) => {
    let itemDB = await findOrCreateTag(tag);
    itemDB = countIncrease({ itemDB });
    await updateTagToDB(itemDB);
    return true;
}

const updateTagToDB = async (itemDB) => {
    await Tag.update(
        { count: itemDB.count },
        { where: { value: itemDB.value } }
    ).catch(err => console.error("🚀 updateTagToDB() ~  err  ", err));
}

const countIncrease = ({ itemDB }) => {
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
    }).catch(err => console.error("🚀 findOrCreate() ~  err  ", err));
    if (itemDB[1]) {
        console.log("🚀 createTag - Ok  ")
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
    findMostPopularTag,
    findAllTags,
}