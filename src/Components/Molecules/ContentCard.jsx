import React from "react";
import { CardDocument } from "../Atoms/CardDocument";

export const ContentCard = () => {
  const arrayDocument = [
    {
      name: "BuenasPracticas.pdf",
      size: "12.5 MB",
      img: "/img/iconpdf 1.svg",
    },

    {
      name: "SheetCss.jpg",
      size: "3 MB",
      img: "/img/jpg.svg",
    },

    {
      name: "JavaScript.jpg",
      size: "12.5 MB",
      img: "/img/png.svg",
    },
  ];

  return (
    <div>
      {arrayDocument.map((document, index) => (
        <CardDocument
          key={index} // Asegúrate de proporcionar una clave única para cada elemento
          name={document.name}
          size={document.size}
          img={document.img}
        />
      ))}
    </div>
  );
};
