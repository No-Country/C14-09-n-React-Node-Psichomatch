const TherapistInfo = function ({name, lastName, price, category, id, image, rating}) {
  return (
    <div className="w-[65%] bg-blue-400 p-5 rounded-lg">
      <p>{rating} Star</p>
      <img src={image} alt="Therapist Picture" />
      <p>Nombre: {name + " "} {lastName}</p>
      <p>Especialidad: {category}</p>
      <p>Tarifa: {price}</p>
    </div>
  )
}

export default TherapistInfo;