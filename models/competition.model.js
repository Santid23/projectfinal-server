const { Schema, model } = require("mongoose")

const competitionSchema = new Schema (
    {
        title:{
            type: String,
            required: [true,'Please provide a task title'],
            unique: true,
            maxlength: 100,
            trim: true
        },
        description: {
            type: String,
            default: "",
            required: [true,'Please provide a description'],
            maxlength: 500,
            trim: true
        },
        status: {
            type: String,
            enum: ['Se puede inscribir','No se puede inscribir'],
            default: "Se puede inscribir",
        },
        province: {
            type: String,
            enum: ['Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
            'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
            'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
            'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
            'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'],
            required: [true, 'Indícanos la provincia.'],
        },
        city: {
            type: String,
            maxlength: 100,
            minlength: 2,
            required: [true, 'Indícanos la ciudad.']
        },
        image: {
            type: String,
            default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffeelcrossfit.com%2Fllamalo-quieras-no-no-crossfit%2F&psig=AOvVaw3VN0L_vkskAgB6EXouqwv0&ust=1710260434017000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjPlN_O7IQDFQAAAAAdAAAAABAE'
        },
        days: {
            type: String,
            required: true
        },
        dueDate: {
            type: Date
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Competition = model("Competition", competitionSchema)

module.exports = Competition
