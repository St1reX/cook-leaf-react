export default function Ingredients() {
  const ingredients = [
    {
      image: "https://assets.tmecosys.com/image/upload/t_web_ingredient_48x48/icons/ingredient_icons/1146", // uzupełnij ścieżkę do zdjęcia
      name: "Natki pietruszki",
      quantity: 5,
      unit: "g",
      note: "świeżej, tylko liście",
    },
    {
      image: "",
      name: "Pora",
      quantity: 50,
      unit: "g",
      note: "tylko białej części, pokrojonej w 2 cm plastry",
    },
    {
      image: "",
      name: "Ząbki czosnku",
      quantity: "1 - 2",
      unit: "szt.",
      note: "",
    },
    {
      image: "",
      name: "Oleju",
      quantity: 20,
      unit: "g",
      note: "",
    },
    {
      image: "",
      name: "Ziemniaków",
      quantity: 250,
      unit: "g",
      note: "pokrojonych na 4 cm kawałki",
    },
    {
      image: "",
      name: "Korzenia selera",
      quantity: 30,
      unit: "g",
      note: "pokrojonego na kawałki",
    },
    {
      image: "",
      name: "Marchewki",
      quantity: 50,
      unit: "g",
      note: "pokrojonej na kawałki",
    },
    {
      image: "",
      name: "Korzenia pietruszki",
      quantity: 40,
      unit: "g",
      note: "pokrojonego na kawałki",
    },
    {
      image: "",
      name: "Kostek boczku",
      quantity: "75 - 100",
      unit: "g",
      note: "",
    },
    {
      image: "",
      name: "Kiełbasy wieprzowej, wędzonej",
      quantity: 200,
      unit: "g",
      note: "np. śląskiej, pokrojonej w 1 cm półplastry",
    },
    {
      image: "",
      name: "Liście laurowe, suszone",
      quantity: 2,
      unit: "szt.",
      note: "",
    },
    {
      image: "",
      name: "Ziaren ziela angielskiego",
      quantity: 6,
      unit: "szt.",
      note: "",
    },
    {
      image: "",
      name: "Wody",
      quantity: 1200,
      unit: "g",
      note: "",
    },
    {
      image: "",
      name: "Soli",
      quantity: "½ - ¾",
      unit: "łyżeczki",
      note: "",
    },
    {
      image: "",
      name: "Pieprzu czarnego, mielonego",
      quantity: "¼",
      unit: "łyżeczki",
      note: "",
    },
    {
      image: "",
      name: "Kolendry, mielonej",
      quantity: 1,
      unit: "łyżeczka",
      note: "",
    },
    {
      image: "",
      name: "Majeranku, suszonego",
      quantity: "½",
      unit: "łyżeczki",
      note: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 p-8 shadow-xl w-2/5 rounded-lg">
        <h4 className="text-xl mb-6">Ingredients</h4>
        {ingredients.map((value, index) => (
          <div key={index} className="flex justify-between items-center gap-4 mb-4">
            <div className="">
              <img src={value.image} alt={value.name} className="w-[48px] h-[48px] object-cover" />
            </div>
            <div className="flex flex-col items-start grow g-2">
              <h5>{value.name}</h5>
              <span className="text-accent/80 text-sm">{value.note}</span>
            </div>
            <div>
              <span className="text-accent/80">{value.quantity + " " + value.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
