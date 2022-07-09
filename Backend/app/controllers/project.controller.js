const db = require('../models');
const Applicant = db.applicants;
const Op = db.Sequelize.Op;

//Create and save a new Tutorial
exports.create = (req, res) => {
    //validate request
    if(!req.body.dpi){
        res.status(400).send({
            message: "El contenido no puede estar vacio."
        });
        return;
    }

    //create applicant
    const applicant = {
        dpi: req.body.dpi,
        nombreCompleto: req.body.nombreCompleto,
        genero: req.body.genero,
        telefono: req.body.telefono,
        celular: req.body.celular,
        correo: req.body.correo,
        fechaNacimiento: req.body.fechaNacimiento,
        puestoAlQueAplica: req.body.puestoAlQueAplica,

        estudiosMasAltos: req.body.estudiosMasAltos,
        otrosEstudios: req.body.otrosEstudios,

        doctoradoInstitucion: req.body.doctoradoInstitucion,
        doctoradoEstudio: req.body.doctoradoEstudio,
        doctoradoGrado: req.body.doctoradoGrado,

        maestriaInstitucion: req.body.maestriaInstitucion,
        maestriaEstudio: req.body.maestriaEstudio,
        maestriaGrado: req.body.maestriaGrado,

        licenciaturaInstitucion: req.body.licenciaturaInstitucion,
        licenciaturaEstudio: req.body.licenciaturaEstudio,
        licenciaturaGrado: req.body.licenciaturaGrado,

        tecnicoInstitucion: req.body.tecnicoInstitucion,
        tecnicoEstudio: req.body.tecnicoEstudio,
        tecnicoGrado: req.body.tecnicoGrado,

        colegioInstitucion: req.body.colegioInstitucion,
        colegioEstudio: req.body.colegioEstudio,
        colegioGrado: req.body.colegioGrado,


        empresa1: req.body.empresa1,
        empresa1FechaInicio: req.body.empresa1FechaInicio,
        empresa1FechaFin: req.body.empresa1FechaFin,
        empresa1Telefono: req.body.empresa1Telefono,
        empresa1Direccion: req.body.empresa1Direccion,
        empresa1Puesto: req.body.empresa1Puesto,
        empresa1Jefe: req.body.empresa1Jefe,
        empresa1JefeTelefono: req.body.empresa1JefeTelefono,
        empresa1Salario: req.body.empresa1Salario,
        empresa1MotivoSalida: req.body.empresa1MotivoSalida,
        empresa1Responsabilidades: req.body.empresa1Responsabilidades,

        
        empresa2: req.body.empresa2,
        empresa2FechaInicio: req.body.empresa2FechaInicio,
        empresa2FechaFin: req.body.empresa2FechaFin,
        empresa2Telefono: req.body.empresa2Telefono,
        empresa2Direccion: req.body.empresa2Direccion,
        empresa2Puesto: req.body.empresa2Puesto,
        empresa2Jefe: req.body.empresa2Jefe,
        empresa2JefeTelefono: req.body.empresa2JefeTelefono,
        empresa2Salario: req.body.empresa2Salario,
        empresa2MotivoSalida: req.body.empresa2MotivoSalida,
        empresa2Responsabilidades: req.body.empresa2Responsabilidades,

        
        empresa3: req.body.empresa3,
        empresa3FechaInicio: req.body.empresa3FechaInicio,
        empresa3FechaFin: req.body.empresa3FechaFin,
        empresa3Telefono: req.body.empresa3Telefono,
        empresa3Direccion: req.body.empresa3Direccion,
        empresa3Puesto: req.body.empresa3Puesto,
        empresa3Jefe: req.body.empresa3Jefe,
        empresa3JefeTelefono: req.body.empresa3JefeTelefono,
        empresa3Salario: req.body.empresa3Salario,
        empresa3MotivoSalida: req.body.empresa3MotivoSalida,
        empresa3Responsabilidades: req.body.empresa3Responsabilidades,

        
        empresa4: req.body.empresa4,
        empresa4FechaInicio: req.body.empresa4FechaInicio,
        empresa4FechaFin: req.body.empresa4FechaFin,
        empresa4Telefono: req.body.empresa4Telefono,
        empresa4Direccion: req.body.empresa4Direccion,
        empresa4Puesto: req.body.empresa4Puesto,
        empresa4Jefe: req.body.empresa4Jefe,
        empresa4JefeTelefono: req.body.empresa4JefeTelefono,
        empresa4Salario: req.body.empresa4Salario,
        empresa4MotivoSalida: req.body.empresa4MotivoSalida,
        empresa4Responsabilidades: req.body.empresa4Responsabilidades, 
    };

    //save applicant to database
    Applicant.create(applicant)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al crear un nuevo candidato."
      });
    });
};

exports.findAll = (req, res) => {
    const dpi = req.query.dpi;
    var condition = dpi ? { dpi: { [Op.iLike]: `%${dpi}%` } } : null;
  
    Applicant.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error cargando la lista de candidatos"
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Applicant.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se Puede encontrar un candidato con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Se produjo un error cargando al candidato con id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Applicant.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El candidato fue actualizado exitosamente"
          });
        } else {
          res.send({
            message: `Imposible actualizar al candidato con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar al candidato con id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Applicant.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Candidato eliminado exitosamente"
          });
        } else {
          res.send({
            message: `Se produjo un error al eliminar al candidato con id=${id}. Es posible que el candidato no exista`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Se produjo un error al intentar eliminar al candidato con id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Applicant.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} candidatos fueron eliminados exitosamente.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al eliminar a todos los candidatos."
        });
      });
  };


