export default function RecipeSteps() {
  const steps = [
    {
      step: "1",
      description:
        "Place the simmering basket on the mixing bowl lid, weigh in the lentils, rinse under cold running water, and set aside.",
    },
    {
      step: "2",
      description:
        "Place parsley leaves into the clean and dry mixing bowl, chop for 3 sec/speed 8. Transfer to another bowl and set aside until serving.",
    },
    {
      step: "3",
      description:
        "Place leek and garlic into the mixing bowl, add oil, chop for 3 sec/speed 7. Scrape down the sides with a spatula and sauté for 3 min/120°C/speed 1.",
    },
    {
      step: "4",
      description:
        "Add potatoes, celery root, carrot, and parsley root. Chop for 4 sec/speed 5. Scrape down the sides.",
    },
    {
      step: "5",
      description: "Add bacon, sausage, bay leaves, and allspice. Sauté for 5 min/120°C/speed 1.",
    },
    {
      step: "6",
      description:
        "Add rinsed lentils, water, salt, pepper, coriander, marjoram, and meat stock concentrate. Cook (lid open) for 25 min/100°C, occasionally stirring gently with the spatula, reaching the bottom of the bowl.",
    },
    {
      step: "7",
      description: "Serve the lentil soup immediately after cooking, sprinkled with the chopped parsley.",
    },
  ];

  return (
    <>
      <div className="shadow-xl p-8 rounded-xl">
        <h4 className="text-xl mb-6">Preparation</h4>
        <ul class="space-y-5 text-sm font-nedium">
          {steps.map(({ description }, index) => (
            <>
              <li key={index} class="flex items-center space-x-3">
                <span class="border-primary text-primary flex items-center justify-center rounded-full border p-0.5">
                  <span class="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span class="text-base-content/80 text-base">{description}</span>
              </li>
              {index == steps.length - 1 ? "" : <div className="divider"></div>}
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
