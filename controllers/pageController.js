const getIndexPage = (req, res) => {
    res.render('index');
};

const getGunesPage = (req, res) => {
    res.render('guneskremleri');
};
const getIcerikPage = (req, res) => {
    res.render('icerikler');
};
const getNemPage = (req, res) => {
    res.render('nemlendirici');
};
const getSerumPage = (req, res) => {
    res.render('serum');
};

const getFormPage = (req, res) => {
    res.render('form', {
        link:'/users'
    });
    
};

export {
    getIndexPage,
    getGunesPage,
    getIcerikPage,
    getNemPage,
    getSerumPage,
    getFormPage
};