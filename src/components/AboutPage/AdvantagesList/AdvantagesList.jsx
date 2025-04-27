export default function AdvantagesList() {
  const advantages = [
    "Over 89,000 recipes from around the world, including more than 6,000 Polish ones, suitable for every lifestyle.",
    "New dishes from various parts of the world.",
    "Choose, plan, and prepare the perfect meals with filters and personalized shopping lists.",
    "Sort and organize your favorite recipes and collections.",
    "Become the best host in any situation – whether you're a beginner cook or a kitchen master.",
    "Easily share recipes and shopping lists with friends and family members.",
    "Perfect results every time thanks to the Thermomix® cooking settings.",
    "An endless source of inspiration – articles, videos, and thematic pages that make meal preparation even easier.",
    "Access recipes anytime and anywhere on your phone, tablet, Thermomix® TM6 device, or computer.",
    "Sync recipes directly with your Thermomix® TM6 or Thermomix® TM5 with Cook-Key®.",
  ];

  return (
    <>
      <ul className="space-y-3 text-sm mb-6">
        {advantages.map((value, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
              <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
            </span>
            <span className="text-base-content/80"> {value} </span>
          </li>
        ))}
      </ul>
    </>
  );
}
