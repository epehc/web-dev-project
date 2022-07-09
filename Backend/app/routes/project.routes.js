module.exports = app => {
    const applicants = require('../controllers/project.controller.js');
    var router = require('express').Router();


    //create a new Applicant
    router.post('/', applicants.create);

    //retrieve all applicants
    router.get('/', applicants.findAll);

    //retrieve applicant by dpi
    router.get('/:id', applicants.findOne);

    //update an applicant by dpi
    router.put('/:id', applicants.update);

    //delete applicant with dpi
    router.delete('/:id', applicants.delete);

    //delete all applicants
    router.delete('/', applicants.deleteAll);


    app.use('/api/applicants', router);
}