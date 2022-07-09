
module.exports = (sequelize, Sequelize) => {
    const Applicant = sequelize.define("applicant", {
        dpi: {
            type: Sequelize.STRING
        },
        nombreCompleto: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        celular: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        fechaNacimiento: {
            type: Sequelize.STRING
        },
        puestoAlQueAplica: {
            type: Sequelize.STRING
        },

        //Studies
        estudiosMasAltos: {
            type: Sequelize.STRING
        },
        otrosEstudios: {
            type: Sequelize.STRING
        },

        //Phd
        doctoradoInstitucion: {
            type: Sequelize.STRING
        },
        doctoradoEstudio: {
            type: Sequelize.STRING
        },
        doctoradoGrado: {
            type: Sequelize.STRING
        },

        //Masters
        maestriaInstitucion: {
            type: Sequelize.STRING
        },
        maestriaEstudio: {
            type: Sequelize.STRING
        },
        maestriaGrado: {
            type: Sequelize.STRING
        },

        //Bachelors
        licenciaturaInstitucion: {
            type: Sequelize.STRING
        },
        licenciaturaEstudio: {
            type: Sequelize.STRING
        },
        licenciaturaGrado: {
            type: Sequelize.STRING
        },

        //
        tecnicoInstitucion: {
            type: Sequelize.STRING
        },
        tecnicoEstudio: {
            type: Sequelize.STRING
        },
        tecnicoGrado: {
            type: Sequelize.STRING
        },

        //School
        colegioInstitucion: {
            type: Sequelize.STRING
        },
        colegioEstudio: {
            type: Sequelize.STRING
        },
        colegioGrado: {
            type: Sequelize.STRING
        },


        //Work Information

        //Work 1
        empresa1: {
            type: Sequelize.STRING
        },
        empresa1FechaInicio: {
            type: Sequelize.STRING
        },
        empresa1FechaFin: {
            type: Sequelize.STRING
        },
        empresa1Telefono: {
            type: Sequelize.STRING
        },
        empresa1Direccion: {
            type: Sequelize.STRING
        },
        empresa1Puesto: {
            type: Sequelize.STRING
        },
        empresa1Jefe: {
            type: Sequelize.STRING
        },
        empresa1JefeTelefono: {
            type: Sequelize.STRING
        },
        empresa1Salario: {
            type: Sequelize.STRING
        },
        empresa1MotivoSalida: {
            type: Sequelize.STRING
        },
        empresa1Responsabilidades: {
            type: Sequelize.STRING
        },


        //Work 2
        empresa2: {
            type: Sequelize.STRING
        },
        empresa2FechaInicio: {
            type: Sequelize.STRING
        },
        empresa2FechaFin: {
            type: Sequelize.STRING
        },
        empresa2Telefono: {
            type: Sequelize.STRING
        },
        empresa2Direccion: {
            type: Sequelize.STRING
        },
        empresa2Puesto: {
            type: Sequelize.STRING
        },
        empresa2Jefe: {
            type: Sequelize.STRING
        },
        empresa2JefeTelefono: {
            type: Sequelize.STRING
        },
        empresa2Salario: {
            type: Sequelize.STRING
        },
        empresa2MotivoSalida: {
            type: Sequelize.STRING
        },
        empresa2Responsabilidades: {
            type: Sequelize.STRING
        },


        //Work 3
        empresa3: {
            type: Sequelize.STRING
        },
        empresa3FechaInicio: {
            type: Sequelize.STRING
        },
        empresa3FechaFin: {
            type: Sequelize.STRING
        },
        empresa3Telefono: {
            type: Sequelize.STRING
        },
        empresa3Direccion: {
            type: Sequelize.STRING
        },
        empresa3Puesto: {
            type: Sequelize.STRING
        },
        empresa3Jefe: {
            type: Sequelize.STRING
        },
        empresa3JefeTelefono: {
            type: Sequelize.STRING
        },
        empresa3Salario: {
            type: Sequelize.STRING
        },
        empresa3MotivoSalida: {
            type: Sequelize.STRING
        },
        empresa3Responsabilidades: {
            type: Sequelize.STRING
        },


        //Work 4
        empresa4: {
            type: Sequelize.STRING
        },
        empresa4FechaInicio: {
            type: Sequelize.STRING
        },
        empresa4FechaFin: {
            type: Sequelize.STRING
        },
        empresa4Telefono: {
            type: Sequelize.STRING
        },
        empresa4Direccion: {
            type: Sequelize.STRING
        },
        empresa4Puesto: {
            type: Sequelize.STRING
        },
        empresa4Jefe: {
            type: Sequelize.STRING
        },
        empresa4JefeTelefono: {
            type: Sequelize.STRING
        },
        empresa4Salario: {
            type: Sequelize.STRING
        },
        empresa4MotivoSalida: {
            type: Sequelize.STRING
        },
        empresa4Responsabilidades: {
            type: Sequelize.STRING
        }

    });

    return Applicant;
};