

const err = () =>  {res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })}

module.exports = {
    err,
}