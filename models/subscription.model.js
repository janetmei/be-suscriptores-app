import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema( {
    name :{
        type: String,
        required: [true,'Nombre de suscripción es obligatorio'],
        trim: true,
        minLenghth: 2,
        maxLength: 100,
    },
        price: {
        type : Number,
        required: [true,'Precio de suscripción es obligatorio'],
        min: [0, 'El precio debe ser mayor que 0']
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'MXN'],
        default: 'USD'
    },
    fecuency: {
        type: String,
        enum: ['mensual', 'anual'],
    },
    category: {
        type: String,
        enum: ['entretenimiento', 'educacion', 'productividad', 'otros'],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    }, 
    status: {
        type: String,
        enum: ['activo', 'inactivo', 'expirado'],
        default: 'activo'
    },
    starDate :{
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: 'La fecha de inicio no puede ser en el futuro'
        }
    },
    renewalDate :{
        type: Date,
        required: true,
        validate: {
            validator: function(value) { 
                return  value > this.startDate;
            },
            message: 'La fecha de renovación debe ser posterior a la fecha de inicio'
        }
    },   
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
        index: true,
    }
}, { timestamps: true });


subscriptionSchema.pre( 'save', function(next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.starDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frecuency]);
    }
    next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

        export default Subscription;
        


