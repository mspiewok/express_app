module.exports.controller = (app) => {
    // get startpage
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express Index' });
    })
}