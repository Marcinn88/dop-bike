const postsServices = require('../services/posts.services')

const get = async (req, res, next) =>{
    try {
        const results = await postsServices.getAll();
        res.json({
            status: "succes",
            code: 200,
            data: {
                contacts:results,
            }
        })
    } catch (e) {
        console.error(e)
        next(e)
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await postsServices.getOne(id);
        res.json({
            status: "succes",
            code: 200,
            data: {
                contact:results,
            }
        })
    } catch (e) {
        console.error(e)
        next(e)
    }
};

const create = async (req, res, next) => {
    try {
        const { body } = req;
        const results = await postsServices.create(body);
        res.json({
            status: "succes",
            code: 200,
            data: {
                contact: results,
            },
        });
    } catch (e) {
        console.error(e)
        next(e)
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const results = await postsServices.update(id, body);
        res.json({
            status: "succes",
            code: 200,
            data: {
                contact:results,
            }
        })
}   catch (e) {
        console.error(e)
        next(e)
}};

const updateStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { favorite } = req.body;
        const results = await postsServices.updateStatus(id, favorite);
        if (!favorite) {
            return res.status(400).json({message: "missing field favorite"})
          }
        if (!results) {
            return res.status(404).json({message: "Not found"})
          }
        res.json({
            status: "succes",
            code: 200,
            data: {
                contact:results,
            }
        })
}   catch (e) {
console.error(e)
next(e)
}};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await postsServices.remove(id);
        res.json({
            status: "succes",
            code: 200,
            data: {
                id,
                data:{
                contact:results,
            }
        },
        })
}   catch (e) {
console.error(e)
next(e)
}};

module.exports = {
    get,
    getById,
    create,
    update,
    updateStatus,
    remove,
};