export type ReasonCategory = {
  id: string;
  title: string;
  items: { id: string; title: string }[];
};

export const reasonCategories: ReasonCategory[] = [
  {
    id: "official",
    title: "Официальные праздники",
    items: [
      { id: "new-year", title: "Новый Год" },
      { id: "christmas", title: "Рождество" },
      { id: "feb-23", title: "23 февраля" },
      { id: "march-8", title: "8 Марта" },
      { id: "may-1", title: "1 Мая" },
      { id: "victory-day", title: "День Победы" },
      { id: "russia-day", title: "День России" },
      { id: "unity-day", title: "День Народного Единства" },
    ],
  },
  {
    id: "unofficial",
    title: "Неофициальные праздники",
    items: [
      { id: "valentines", title: "День Святого Валентина" },
      { id: "self-love", title: "День Самой" },
      { id: "halloween", title: "Хэллоуин" },
      { id: "april-fools", title: "День Смеха" },
    ],
  },
  {
    id: "main-events",
    title: "Основные события",
    items: [
      { id: "birthday", title: "День рождения" },
      { id: "wedding", title: "Свадьба" },
      { id: "anniversary", title: "Годовщина" },
      { id: "newborn", title: "Рождение ребёнка" },
      { id: "pregnancy", title: "Беременность" },
      { id: "graduation", title: "Выпускной" },
      { id: "promotion", title: "Повышение" },
      { id: "retirement", title: "Пенсия" },
    ],
  },
  {
    id: "family",
    title: "Семейные события",
    items: [
      { id: "family-day", title: "День семьи" },
      { id: "housewarming", title: "Новоселье" },
      { id: "reunion", title: "Воссоединение" },
    ],
  },
  {
    id: "changes",
    title: "Перемены",
    items: [
      { id: "victory", title: "Победа" },
      { id: "purchase", title: "Покупка" },
      { id: "appointment", title: "Назначение" },
    ],
  },
];

export const flattenedReasons = reasonCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, categoryId: category.id, categoryTitle: category.title }))
);
