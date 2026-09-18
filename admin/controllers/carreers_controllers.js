export function home(req, res) {

  let carreers= [
  { "id": 1, "name": "Ingeniería de Sistemas" },
  { "id": 2, "name": "Medicina Humana" },
  { "id": 3, "name": "Derecho" },
  { "id": 4, "name": "Administración" },
  { "id": 5, "name": "Contabilidad" },
  { "id": 6, "name": "Arquitectura" },
  { "id": 7, "name": "Psicología" },
  { "id": 8, "name": "Enfermería" },
  { "id": 9, "name": "Ingeniería Civil" },
  { "id": 10, "name": "Ingeniería Industrial" },
  { "id": 11, "name": "Marketing" },
  { "id": 12, "name": "Economía" },
  { "id": 13, "name": "Comunicación Social" },
  { "id": 14, "name": "Odontología" },
  { "id": 15, "name": "Biología" },
  { "id": 16, "name": "Nutrición" },
  { "id": 17, "name": "Educación Primaria" },
  { "id": 18, "name": "Veterinaria" },
  { "id": 19, "name": "Trabajo Social" },
  { "id": 20, "name": "Diseño Gráfico" }
]

  return res.render('admin/carreers', {
    title: 'Admin Site)',
    carreers: carreers,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}