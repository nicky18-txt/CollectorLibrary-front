export const bookFields = [
    { name: "title",   label: "Título",  type: "text",     required: true,  placeholder: "Ingrese el nombre del libro" },
    { name: "isbn",    label: "ISBN",    type: "text",     required: false, placeholder: "Ingrese el ISBN" },
    { name: "genre",   label: "Género",  type: "select",   required: false,
    options: ["Ficción", "No ficción", "Ciencia ficción", "Fantasía", "Romance", "Misterio", "Terror","Otro"] },
    { name: "publication_year", label: "Año de publicación", type: "number", required: false, placeholder: "Ingrese el año de publicación" },
    {name: "Pages", label: "Cantidad de páginas", type: "number", required: true, placeholder: "Ingrese la cantidad de páginas" }
];

