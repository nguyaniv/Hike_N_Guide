const fs = require('fs')
const utilService = require('./util.service.js')
const toys = require('../data/toys.json')


function query(filter) {
    var toysToReturn = toys;

    if (criteria.name) {
        toysToReturn = toysToReturn.filter(toy =>
            toy.name.toLowerCase().includes(criteria.name.toLowerCase()))
    }
    if (criteria.type) {
        toysToReturn = toysToReturn.filter(toy => toy.type === criteria.type)
    }
    if (criteria.inStock) {
        toysToReturn = toysToReturn.filter(toy =>
            (criteria.inStock === 'true') ? toy.inStock : !toy.inStock)
    }
    return Promise.resolve(toysToReturn);
}

function getById(toyId) {
    const toy = toys.find(toy => toy._id === toyId)
    return Promise.resolve(toy);
}

function remove(toyId) {
    const idx = toys.findIndex(toy => toy._id === toyId)
    toys.splice(idx, 1);
    return _saveToFile();
}

function save(toy) {
    if (toy._id) {
        const idx = toys.findIndex(currToy => currToy._id === toy._id)
        toy.updatedAt = new Date().toISOString();
        toys[idx] = toy;
    } else {
        toy._id = utilService.makeId(6);
        toy.createdAt = new Date().toISOString();
        toy.inStock = true;
        toys.unshift(toy);
    }
    return _saveToFile().then(() => toy)
}

module.exports = {
    query,
    getById,
    remove,
    save
}

function _saveToFile() {
    return new Promise((resolve, reject) => {
        const str = JSON.stringify(toys, null, 2);
        fs.writeFile('data/toys.json', str, function (err) {
            if (err) {
                console.log('Had Problems', err)
                return reject(new Error('Cannot update toys file'));
            }
            resolve()
        });
    });
}
