function middleware(err, req, res, next){
    console.log(err);
    if (err.type === 'validation') {
        return res.status(400).json({message: err.message})
    }
    if (err.type === 'notFound') {
        return res.status(404).json({message: err.message})
    }

    return res.status(500).json({message: 'Internal Server Error', error: err.message})
}

module.exports = middleware
