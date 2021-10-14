const Tag = require("../models/Tag");
// const { clearModel, sizeModelPrintToConsole } = require("./commonDbApi");


// const tagsConst = "таракан,стена,подъезд,жильцы,шахта,час,вопрос";
// const tagsConst = "авто,стена,авто,жильцы,авто";
// const tagsConst = "таракан";
/////////
// розкоментируй createTask
/////////

const tagsToTable = async (tags) => {
    console.log("🚀 ~ file: tagDbApi.js ~ line 19 ~ tags \n", tags);

    // tags = tagsConst;
    tags = prepareTags(tags);
    await tagsAddToDB(tags);
    // findAllTags().then((tags) => {
        // tagDBToConsole(tags);
        // sizeModelPrintToConsole();
    // });
}
const findAllTags = async () => {
    const tags = await Tag.findAll()
    return tags;
}

// const tagDBToConsole = (tags) => {
//     tags.forEach(item => {
//         if (!item.dataValues.value.indexOf("авто")) {
//             console.log("🚀 27 ~ tags id >> ", item.dataValues.id, " ");
//             console.log("🚀 28 ~ tags value >>", item.dataValues.value, " ");
//             console.log("🚀 29 ~ tags count >>", item.dataValues.count, " ");
//             console.log("🚀 30 ~ end >>>>>> \n");
//         }
//     })
// }


const tagsAddToDB = async (tags) => {
    let i = 0
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
    }).catch(err => console.err("🚀 findOrCreate() ~  err  ", err));
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
}