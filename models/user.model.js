const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            minLength: 1,
            lowercase: true,
            match: [
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ,
                'Este email no es válido.',
            ],
            required: [true, 'Indícanos un email del colegio.'],
            trim: true
        },
        password: {
            salt: { type: String, required: true },
            hash: { type: String, required: true }
        },
        name: {
            type: String,
            require: [true, 'Por favor, tienes que añadir un nombre'],
            trim: true,
            minLength: 3,
            maxLength: 20,
        },
        role: {
            type: String,
            enum: ['Admin', 'User'],
            required: true
        },
        avatar: {
            url: {
                trype: String,
                default: ""
            },
            required: false
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON:{
            virtuals: true,
            transform: function(doc, ret) {
                delete ret.password;
                return ret;
            },
        },
    }
)

const User = model('User', userSchema)

module.exports = User;