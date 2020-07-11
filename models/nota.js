import mongoose from 'mongoose';
const Shema = mongoose.Schema;

const notaSchema = new Shema({
    nombre: { type: String, required: [true, 'Nombre Obligatorio']},
    descripcion: String,
    usuarioId: String,
    fecha: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

// Convertir a un modelo de mongoose
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;