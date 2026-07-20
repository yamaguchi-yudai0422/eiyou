const NUTRIENTS = [
  { key: "energy", label: "エネルギー", unit: "kcal", decimals: 0, group: "main" },
  { key: "protein", label: "たんぱく質", unit: "g", decimals: 1, group: "main" },
  { key: "fat", label: "脂質", unit: "g", decimals: 1, group: "main" },
  { key: "carbohydrate", label: "炭水化物", unit: "g", decimals: 1, group: "main" },
  { key: "fiber", label: "食物繊維", unit: "g", decimals: 1, group: "main" },
  { key: "salt", label: "食塩相当量", unit: "g", decimals: 1, group: "main" },
  { key: "calcium", label: "カルシウム", unit: "mg", decimals: 0, group: "mineral" },
  { key: "iron", label: "鉄", unit: "mg", decimals: 1, group: "mineral" },
  { key: "magnesium", label: "マグネシウム", unit: "mg", decimals: 0, group: "mineral" },
  { key: "potassium", label: "カリウム", unit: "mg", decimals: 0, group: "mineral" },
  { key: "zinc", label: "亜鉛", unit: "mg", decimals: 1, group: "mineral" },
  { key: "vitaminA", label: "ビタミンA", unit: "µgRAE", decimals: 0, group: "vitamin" },
  { key: "vitaminD", label: "ビタミンD", unit: "µg", decimals: 1, group: "vitamin" },
  { key: "vitaminE", label: "ビタミンE", unit: "mg", decimals: 1, group: "vitamin" },
  { key: "vitaminK", label: "ビタミンK", unit: "µg", decimals: 0, group: "vitamin" },
  { key: "vitaminB1", label: "ビタミンB1", unit: "mg", decimals: 2, group: "vitamin" },
  { key: "vitaminB2", label: "ビタミンB2", unit: "mg", decimals: 2, group: "vitamin" },
  { key: "niacin", label: "ナイアシン", unit: "mg", decimals: 1, group: "vitamin" },
  { key: "vitaminB6", label: "ビタミンB6", unit: "mg", decimals: 2, group: "vitamin" },
  { key: "vitaminB12", label: "ビタミンB12", unit: "µg", decimals: 1, group: "vitamin" },
  { key: "folate", label: "葉酸", unit: "µg", decimals: 0, group: "vitamin" },
  { key: "vitaminC", label: "ビタミンC", unit: "mg", decimals: 0, group: "vitamin" },
];

const UNITS = [
  { id: "piece", label: "個", kind: "piece" },
  { id: "stick", label: "本", kind: "piece" },
  { id: "sheet", label: "枚", kind: "piece" },
  { id: "pack", label: "パック", kind: "piece" },
  { id: "clove", label: "かけ", kind: "piece" },
  { id: "bunch", label: "束", kind: "piece" },
  { id: "g", label: "g", kind: "absolute", gramsPerUnit: 1 },
  { id: "kg", label: "kg", kind: "absolute", gramsPerUnit: 1000 },
  { id: "ml", label: "mL", kind: "volume", milliliters: 1 },
  { id: "tsp", label: "小さじ", kind: "volume", milliliters: 5 },
  { id: "tbsp", label: "大さじ", kind: "volume", milliliters: 15 },
  { id: "cup", label: "カップ", kind: "volume", milliliters: 200 },
];

const MAIN_KEYS = ["protein", "fat", "carbohydrate", "fiber", "salt"];
const STORAGE_KEY = "nutrition-static-meal-planner-v2";
const MEALS = [
  { key: "breakfast", label: "朝" },
  { key: "lunch", label: "昼" },
  { key: "dinner", label: "夜" },
];
const COOKING_METHODS = [
  { id: "", label: "指定なし", keywords: [] },
  { id: "raw", label: "生", keywords: ["生"] },
  { id: "grilled", label: "焼き", keywords: ["焼き"] },
  { id: "boiled", label: "ゆで", keywords: ["ゆで", "茹で"] },
  { id: "simmered", label: "煮る", keywords: ["水煮", "煮"] },
  { id: "steamed", label: "蒸し", keywords: ["蒸し"] },
  { id: "stir-fried", label: "炒め", keywords: ["炒め"] },
  { id: "fried", label: "揚げ・フライ", keywords: ["揚げ", "フライ"] },
];
const DAILY_TARGET_DEFINITIONS = [
  { key: "energy", label: "エネルギー", unit: "kcal", defaultValue: 2000 },
  { key: "protein", label: "たんぱく質", unit: "g", defaultValue: 60 },
  { key: "fiber", label: "食物繊維", unit: "g", defaultValue: 20 },
  { key: "calcium", label: "カルシウム", unit: "mg", defaultValue: 650 },
  { key: "iron", label: "鉄", unit: "mg", defaultValue: 10 },
  { key: "magnesium", label: "マグネシウム", unit: "mg", defaultValue: 300 },
  { key: "potassium", label: "カリウム", unit: "mg", defaultValue: 2600 },
  { key: "zinc", label: "亜鉛", unit: "mg", defaultValue: 8 },
  { key: "vitaminA", label: "ビタミンA", unit: "µgRAE", defaultValue: 700 },
  { key: "vitaminD", label: "ビタミンD", unit: "µg", defaultValue: 9 },
  { key: "vitaminB1", label: "ビタミンB1", unit: "mg", defaultValue: 1.1 },
  { key: "vitaminB2", label: "ビタミンB2", unit: "mg", defaultValue: 1.2 },
  { key: "folate", label: "葉酸", unit: "µg", defaultValue: 240 },
  { key: "vitaminC", label: "ビタミンC", unit: "mg", defaultValue: 100 },
  { key: "salt", label: "食塩相当量", unit: "g", defaultValue: 6.5, kind: "max" },
];
const FOOD_AMOUNT_NUTRIENT_KEYS = [
  "protein",
  "fiber",
  "calcium",
  "iron",
  "magnesium",
  "potassium",
  "zinc",
  "vitaminA",
  "vitaminD",
  "vitaminB1",
  "vitaminB2",
  "folate",
  "vitaminC",
];
const DEFAULT_DATE = formatLocalDate(new Date());
const unitsById = new Map(UNITS.map((unit) => [unit.id, unit]));

const state = {
  foods: [],
  foodsByCode: new Map(),
  query: "",
  nutritionTab: "overview",
  activeDishId: "",
  dailyTargets: Object.fromEntries(
    DAILY_TARGET_DEFINITIONS.map((target) => [target.key, target.defaultValue]),
  ),
  templates: [],
  historyOpen: false,
  historyDate: DEFAULT_DATE,
  draft: {
    date: DEFAULT_DATE,
    mealType: "breakfast",
    dishes: [],
  },
  drafts: {},
  savedMeals: {},
};

const dom = {
  calendarToggle: document.querySelector("#calendarToggle"),
  historyPanel: document.querySelector("#historyPanel"),
  historyClose: document.querySelector("#historyClose"),
  historyDateInput: document.querySelector("#historyDateInput"),
  historyOverview: document.querySelector("#historyOverview"),
  historyMeals: document.querySelector("#historyMeals"),
  dateInput: document.querySelector("#dateInput"),
  previousDateButton: document.querySelector("#previousDateButton"),
  nextDateButton: document.querySelector("#nextDateButton"),
  mealTabs: document.querySelector("#mealTabs"),
  actionMessage: document.querySelector("#actionMessage"),
  dishList: document.querySelector("#dishList"),
  dishEmpty: document.querySelector("#dishEmpty"),
  recipeTools: document.querySelector("#recipeTools"),
  templateSelect: document.querySelector("#templateSelect"),
  applyTemplateButton: document.querySelector("#applyTemplateButton"),
  saveTemplateButton: document.querySelector("#saveTemplateButton"),
  saveMealButton: document.querySelector("#saveMealButton"),
  clearDraftButton: document.querySelector("#clearDraftButton"),
  dataStatus: document.querySelector("#dataStatus"),
  searchInput: document.querySelector("#searchInput"),
  searchHint: document.querySelector("#searchHint"),
  searchResults: document.querySelector("#searchResults"),
  foodOptions: document.querySelector("#foodOptions"),
  summaryTitle: document.querySelector("#summaryTitle"),
  summaryMealMeta: document.querySelector("#summaryMealMeta"),
  nutritionTabs: document.querySelector("#nutritionTabs"),
  nutritionPanels: document.querySelectorAll("[data-nutrition-panel]"),
  totalEnergy: document.querySelector("#totalEnergy"),
  perServingEnergy: document.querySelector("#perServingEnergy"),
  totalMainGrid: document.querySelector("#totalMainGrid"),
  perServingMainGrid: document.querySelector("#perServingMainGrid"),
  mainTable: document.querySelector("#mainTable"),
  mineralTable: document.querySelector("#mineralTable"),
  vitaminTable: document.querySelector("#vitaminTable"),
  dailyEnergy: document.querySelector("#dailyEnergy"),
  dailyMainGrid: document.querySelector("#dailyMainGrid"),
  deficiencyList: document.querySelector("#deficiencyList"),
  targetInputs: document.querySelector("#targetInputs"),
  foodAmountNutrient: document.querySelector("#foodAmountNutrient"),
  foodAmountNeeded: document.querySelector("#foodAmountNeeded"),
  foodAmountUnit: document.querySelector("#foodAmountUnit"),
  foodAmountMethod: document.querySelector("#foodAmountMethod"),
  calculateFoodAmountButton: document.querySelector("#calculateFoodAmountButton"),
  foodAmountResults: document.querySelector("#foodAmountResults"),
  dishTemplate: document.querySelector("#dishTemplate"),
  ingredientTemplate: document.querySelector("#ingredientTemplate"),
  historyEntryTemplate: document.querySelector("#historyEntryTemplate"),
};

setupPwa();

boot().catch((error) => {
  console.error(error);
  dom.dataStatus.textContent = "読込失敗";
  dom.searchHint.textContent =
    "データを読み込めませんでした。ローカルサーバー経由で開いているか確認してください。";
});

async function boot() {
  hydrateState();
  ensureDraftStructure();
  wireEvents();
  syncInputsFromDraft();
  renderCalendarPanel();
  renderMealTabs();
  renderNutritionTabs();
  renderTemplates();
  renderTargetInputs();
  setupFoodAmountTool();
  renderSearchResults();
  renderIngredients();
  renderSummary();
  dom.dataStatus.textContent = "読込中...";

  try {
    state.foods = await loadFoods();
    state.foodsByCode = new Map(state.foods.map((food) => [food.code, food]));
    for (const dish of state.draft.dishes) {
      dish.ingredients = dish.ingredients.filter(
        (item) => !item.code || state.foodsByCode.has(item.code),
      );
    }
    sanitizeSavedMeals();
    renderFoodOptions();

    dom.dataStatus.textContent = `食品データ ${state.foods.length.toLocaleString("ja-JP")} 件`;
    renderSearchResults();
    renderIngredients();
    renderSummary();
    syncFoodAmountNeeded();
  } catch (error) {
    console.error(error);
    dom.dataStatus.textContent = "食品データを読み込めませんでした";
    dom.searchHint.textContent =
      "food-data.jsが見つかりません。必要なファイルが揃っているか確認してください。";
  }
}

function wireEvents() {
  dom.calendarToggle.addEventListener("click", () => {
    state.historyOpen = !state.historyOpen;
    renderCalendarPanel();
    persistState();
  });

  dom.historyClose.addEventListener("click", () => {
    state.historyOpen = false;
    renderCalendarPanel();
    persistState();
  });

  dom.historyDateInput.addEventListener("input", (event) => {
    state.historyDate = event.target.value || DEFAULT_DATE;
    renderCalendarPanel();
    persistState();
  });

  dom.dateInput.addEventListener("input", (event) => {
    switchDraft(event.target.value || DEFAULT_DATE, state.draft.mealType);
  });

  dom.previousDateButton.addEventListener("click", () => {
    switchDraft(shiftDate(state.draft.date, -1), state.draft.mealType);
  });

  dom.nextDateButton.addEventListener("click", () => {
    switchDraft(shiftDate(state.draft.date, 1), state.draft.mealType);
  });

  dom.mealTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-meal]");
    if (!button) return;
    switchDraft(state.draft.date, button.dataset.meal);
  });

  dom.nutritionTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-nutrition-tab]");
    if (!button) return;
    state.nutritionTab = button.dataset.nutritionTab;
    renderNutritionTabs();
  });

  dom.saveTemplateButton.addEventListener("click", saveCurrentAsTemplate);
  dom.applyTemplateButton.addEventListener("click", applySelectedTemplate);

  dom.targetInputs.addEventListener("input", (event) => {
    const input = event.target.closest("[data-target-key]");
    if (!input) return;
    const value = Number(input.value);
    if (Number.isFinite(value) && value > 0) {
      state.dailyTargets[input.dataset.targetKey] = value;
      renderDailySummary();
      persistState();
    }
  });

  dom.foodAmountNutrient.addEventListener("change", syncFoodAmountNeeded);
  dom.calculateFoodAmountButton.addEventListener("click", calculateFoodAmounts);
  dom.deficiencyList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-use-nutrient]");
    if (!button) return;
    dom.foodAmountNutrient.value = button.dataset.useNutrient;
    syncFoodAmountNeeded();
    dom.foodAmountMethod.focus();
  });

  dom.saveMealButton.addEventListener("click", () => {
    saveCurrentMeal();
  });

  dom.clearDraftButton.addEventListener("click", () => {
    const dish = createBlankDish();
    state.draft.dishes = [dish];
    state.activeDishId = dish.id;
    syncInputsFromDraft();
    renderIngredients();
    renderSummary();
    persistState();
  });

  dom.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderSearchResults();
  });

}

async function loadFoods() {
  let foodsCsv;
  let overridesCsv;

  if (window.EMBEDDED_FOOD_DATA?.foods && window.EMBEDDED_FOOD_DATA?.overrides) {
    foodsCsv = window.EMBEDDED_FOOD_DATA.foods;
    overridesCsv = window.EMBEDDED_FOOD_DATA.overrides;
  } else {
    [foodsCsv, overridesCsv] = await Promise.all([
      fetchText("./assets/data/foods.csv"),
      fetchText("./assets/data/food_overrides.csv"),
    ]);
  }

  const foodRows = parseCsv(foodsCsv);
  const overrideRows = parseCsv(overridesCsv);
  const overrideMap = new Map(overrideRows.map((row) => [row.food_code, row]));

  return foodRows.map((row) => {
    const override = overrideMap.get(row.food_code) ?? {};
    const food = {
      code: row.food_code,
      officialName: row.name,
      displayName: cleanString(override.display_name),
      reading: cleanString(override.reading),
      category: row.category,
      gramsPerMilliliter: parseNumber(override.grams_per_ml, 1),
      pieceGrams: parseNullableNumber(override.piece_grams),
      pieceUnitId: cleanString(override.piece_unit_id),
      defaultUnitId: cleanString(override.default_unit_id) || "g",
      defaultAmount: parseNumber(override.default_amount, 100),
      isCommon: Boolean(override.food_code),
      nutrients: {},
    };

    for (const nutrient of NUTRIENTS) {
      food.nutrients[nutrient.key] = parseNumber(row[nutrient.key], 0);
    }

    return food;
  });
}

async function fetchText(path) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(path, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.status}`);
    }
    return response.text();
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function parseCsv(raw) {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  if (!lines.length) return [];

  const header = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const cells = line.split(",");
    const row = {};
    for (let index = 0; index < header.length; index += 1) {
      row[header[index]] = cells[index] ?? "";
    }
    return row;
  });
}

function cleanString(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

function parseNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseNullableNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function renderCalendarPanel() {
  dom.historyPanel.hidden = !state.historyOpen;
  dom.calendarToggle.setAttribute("aria-expanded", String(state.historyOpen));
  dom.historyDateInput.value = state.historyDate;
  renderHistoryOverview();
  renderHistoryMeals();
}

function renderHistoryOverview() {
  const day = dayMeals(state.historyDate);
  dom.historyOverview.innerHTML = MEALS.map((meal) => {
    const count = day[meal.key].length;
    return `
      <div class="overview-chip">
        <p class="overview-label">${meal.label}</p>
        <strong class="overview-count">${count}</strong>
      </div>
    `;
  }).join("");
}

function renderHistoryMeals() {
  const day = dayMeals(state.historyDate);
  dom.historyMeals.innerHTML = "";

  for (const meal of MEALS) {
    const wrap = document.createElement("section");
    wrap.className = "history-meal";
    wrap.innerHTML = `<h3>${meal.label}</h3>`;

    const list = document.createElement("div");
    list.className = "history-list";

    if (!day[meal.key].length) {
      const empty = document.createElement("p");
      empty.className = "history-empty";
      empty.textContent = "まだ保存されていません。";
      list.append(empty);
    } else {
      for (const entry of day[meal.key]) {
        const fragment = dom.historyEntryTemplate.content.cloneNode(true);
        const servingCounts = (entry.dishes ?? [])
          .filter((dish) => dish.name.trim() || dish.ingredients.some((item) => item.code))
          .map((dish) => dish.servings);
        const servingLabel =
          new Set(servingCounts).size === 1 && servingCounts.length
            ? `${servingCounts[0]}人前`
            : servingCounts.length
              ? "料理ごとに人数設定"
              : `${entry.servings || 1}人前`;
        fragment.querySelector(".history-entry-name").textContent = entry.recipeName;
        fragment.querySelector(".history-entry-meta").textContent =
          `${servingLabel} / ${formatValue("energy", entry.totals.energy)} kcal`;
        fragment.querySelector(".history-entry-ingredients").textContent =
          ingredientSummary(entry.ingredients);

        fragment.querySelector(".load-entry-button").addEventListener("click", () => {
          loadSavedEntry(state.historyDate, meal.key, entry.id);
        });

        fragment.querySelector(".delete-entry-button").addEventListener("click", () => {
          deleteSavedEntry(state.historyDate, meal.key, entry.id);
        });

        list.append(fragment);
      }
    }

    wrap.append(list);
    dom.historyMeals.append(wrap);
  }
}

function renderMealTabs() {
  for (const button of dom.mealTabs.querySelectorAll("[data-meal]")) {
    button.classList.toggle("is-active", button.dataset.meal === state.draft.mealType);
  }
}

function renderRecipeToolsVisibility() {
  dom.recipeTools.hidden =
    state.templates.length === 0 &&
    !state.draft.dishes.some((dish) => dish.name.trim());
}

function renderNutritionTabs() {
  for (const button of dom.nutritionTabs.querySelectorAll("[data-nutrition-tab]")) {
    const isActive = button.dataset.nutritionTab === state.nutritionTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  }

  for (const panel of dom.nutritionPanels) {
    panel.hidden = panel.dataset.nutritionPanel !== state.nutritionTab;
  }
}

function renderTemplates() {
  const selectedValue = dom.templateSelect.value;
  dom.templateSelect.innerHTML = '<option value="">保存レシピを選択</option>';

  for (const template of state.templates) {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.name;
    dom.templateSelect.append(option);
  }

  if (state.templates.some((template) => template.id === selectedValue)) {
    dom.templateSelect.value = selectedValue;
  }
}

function saveCurrentAsTemplate() {
  const dish = getActiveDish() ?? state.draft.dishes.find((item) => item.name.trim());
  const name = dish?.name.trim() || "";
  const ingredients = (dish?.ingredients ?? []).filter((item) =>
    state.foodsByCode.has(item.code),
  );

  if (!name) {
    showActionMessage("料理名を入力してから登録してください。");
    return;
  }
  if (!ingredients.length) {
    showActionMessage("材料を1つ以上設定してください。");
    return;
  }

  const template = {
    id: makeId(),
    name,
    servings: dish.servings,
    ingredients: ingredients.map(cloneIngredient),
  };
  const existingIndex = state.templates.findIndex((item) => item.name === name);
  if (existingIndex >= 0) {
    template.id = state.templates[existingIndex].id;
    state.templates[existingIndex] = template;
  } else {
    state.templates.unshift(template);
  }

  renderTemplates();
  dom.templateSelect.value = template.id;
  showActionMessage(`「${name}」をレシピ保存しました。`);
  persistState();
}

function applySelectedTemplate() {
  const template = state.templates.find((item) => item.id === dom.templateSelect.value);
  if (!template) {
    showActionMessage("保存レシピを選択してください。");
    return;
  }

  const nextDish = {
    id: makeId(),
    name: template.name,
    servings: template.servings,
    expanded: false,
    ingredients: template.ingredients.map((item) => ({
      ...normalizeIngredient(item),
      id: makeId(),
      expanded: false,
    })),
  };
  const active = getActiveDish();
  const activeIndex = active
    ? state.draft.dishes.findIndex((dish) => dish.id === active.id)
    : -1;
  if (
    activeIndex >= 0 &&
    !active.name.trim() &&
    !active.ingredients.some((item) => item.code || item.query)
  ) {
    state.draft.dishes[activeIndex] = nextDish;
  } else {
    state.draft.dishes.push(nextDish);
  }
  state.activeDishId = nextDish.id;
  syncInputsFromDraft();
  renderIngredients();
  renderSummary();
  showActionMessage(`「${template.name}」を呼び出しました。`);
  persistState();
}

function showActionMessage(message) {
  dom.actionMessage.textContent = message;
}

function renderSearchResults() {
  if (!state.foods.length) {
    dom.searchResults.innerHTML = "";
    return;
  }

  const query = normalize(state.query);
  dom.searchResults.innerHTML = "";
  if (!query) {
    dom.searchHint.textContent = "材料名を入力すると候補が表示されます。";
    return;
  }

  const results = rankFoods(query).slice(0, 20);
  dom.searchHint.textContent = `${results.length} 件表示中`;

  for (const food of results) {
    const card = document.createElement("article");
    card.className = "result-card";

    const info = document.createElement("div");
    info.innerHTML = `
      <p class="result-title">${escapeHtml(food.displayName || food.officialName)}</p>
      <p class="result-meta">${escapeHtml(
        [food.category, food.displayName ? food.officialName : "", food.reading].filter(Boolean).join(" / "),
      )}</p>
    `;

    const button = document.createElement("button");
    button.className = "result-button";
    button.type = "button";
    button.textContent = "追加";
    button.addEventListener("click", () => addIngredientFromFood(food));

    card.append(info, button);
    dom.searchResults.append(card);
  }
}

function addIngredientFromFood(food) {
  const dish = getActiveDish();
  if (!dish) return;
  const units = availableUnitsForFood(food);
  dish.ingredients.push({
    id: makeId(),
    code: food.code,
    amount: food.defaultAmount,
    unitId: units.some((unit) => unit.id === food.defaultUnitId) ? food.defaultUnitId : units[0].id,
  });
  state.query = "";
  dom.searchInput.value = "";
  renderSearchResults();
  renderIngredients();
  renderSummary();
  persistState();
}

function renderIngredients() {
  ensureDraftStructure();
  dom.dishList.innerHTML = "";
  dom.dishEmpty.hidden = state.draft.dishes.length > 0;

  for (const dish of state.draft.dishes) {
    const dishFragment = dom.dishTemplate.content.cloneNode(true);
    const dishCard = dishFragment.querySelector(".dish-card");
    const nameInput = dishFragment.querySelector(".dish-name-input");
    const dishToggle = dishFragment.querySelector(".dish-toggle");
    const dishCount = dishFragment.querySelector(".dish-count");
    const dishChevron = dishFragment.querySelector(".dish-chevron");
    const dishBody = dishFragment.querySelector(".dish-body");
    const dishServingsInput = dishFragment.querySelector(".dish-servings-input");
    const ingredientEmpty = dishFragment.querySelector(".dish-ingredient-empty");
    const ingredientList = dishFragment.querySelector(".ingredient-list");
    const deleteDishButton = dishFragment.querySelector(".delete-dish-button");
    const hasName = Boolean(dish.name.trim());
    if (hasName) ensureDishIngredientRow(dish);
    const isOpen = hasName && dish.expanded;
    const ingredientCount = dish.ingredients.filter((item) => item.code).length;

    dishCard.dataset.dishId = dish.id;
    dishCard.classList.toggle("is-active", dish.id === state.activeDishId);
    nameInput.value = dish.name;
    dishToggle.setAttribute("aria-expanded", String(isOpen));
    dishCount.textContent = `${ingredientCount}品`;
    dishChevron.textContent = isOpen ? "⌃" : "⌄";
    dishBody.hidden = !isOpen;
    dishServingsInput.value = String(dish.servings);

    const markDishActive = () => {
      state.activeDishId = dish.id;
      for (const card of dom.dishList.querySelectorAll(".dish-card")) {
        card.classList.remove("is-active");
      }
      dishCard.classList.add("is-active");
    };
    dishCard.addEventListener("focusin", markDishActive);
    dishCard.addEventListener("pointerdown", markDishActive);

    nameInput.addEventListener("input", (event) => {
      const hadName = Boolean(dish.name.trim());
      dish.name = event.target.value;
      state.activeDishId = dish.id;
      if (dish.name.trim() && !hadName) {
        dish.expanded = true;
        ensureDishIngredientRow(dish);
        renderIngredients();
        requestAnimationFrame(() => {
          const nextInput = dom.dishList.querySelector(
            `[data-dish-id="${dish.id}"] .dish-name-input`,
          );
          nextInput?.focus();
          nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length);
        });
      } else if (!dish.name.trim()) {
        dishBody.hidden = true;
        dishToggle.setAttribute("aria-expanded", "false");
        dishChevron.textContent = "⌄";
      }
      renderRecipeToolsVisibility();
      renderSummary();
      persistState();
    });

    nameInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || !dish.name.trim()) return;
      event.preventDefault();
      const dishIndex = state.draft.dishes.findIndex((entry) => entry.id === dish.id);
      let nextDish = state.draft.dishes[dishIndex + 1];
      if (!nextDish) {
        nextDish = createBlankDish();
        state.draft.dishes.push(nextDish);
      }
      state.activeDishId = nextDish.id;
      renderIngredients();
      persistState();
      requestAnimationFrame(() => {
        dom.dishList
          .querySelector(`[data-dish-id="${nextDish.id}"] .dish-name-input`)
          ?.focus();
      });
    });

    dishToggle.addEventListener("click", () => {
      state.activeDishId = dish.id;
      if (!dish.name.trim()) {
        nameInput.focus();
        return;
      }
      dish.expanded = !dish.expanded;
      renderIngredients();
      persistState();
    });

    dishServingsInput.addEventListener("input", (event) => {
      const next = Number(event.target.value);
      dish.servings = Number.isFinite(next) && next > 0 ? Math.round(next) : 1;
      renderSummary();
      persistState();
    });

    ingredientEmpty.hidden = dish.ingredients.length > 0;
    renderIngredientCards(dish, ingredientList);

    deleteDishButton.addEventListener("click", () => {
      state.draft.dishes = state.draft.dishes.filter((entry) => entry.id !== dish.id);
      ensureDraftStructure();
      state.activeDishId = state.draft.dishes[0].id;
      renderIngredients();
      renderSummary();
      persistState();
    });

    dom.dishList.append(dishFragment);
  }
  renderRecipeToolsVisibility();
}

function renderIngredientCards(dish, ingredientList) {
  for (const item of dish.ingredients) {
    const fragment = dom.ingredientTemplate.content.cloneNode(true);
    const toggleButton = fragment.querySelector(".ingredient-toggle");
    const details = fragment.querySelector(".ingredient-details");
    const summaryName = fragment.querySelector(".ingredient-summary-name");
    const summaryDetail = fragment.querySelector(".ingredient-summary-detail");
    const chevron = fragment.querySelector(".ingredient-chevron");
    const quickInput = fragment.querySelector(".ingredient-quick-input");
    const foodInput = fragment.querySelector(".food-input");
    const methodSelect = fragment.querySelector(".method-select");
    const methodNote = fragment.querySelector(".method-note");
    const amountInput = fragment.querySelector(".amount-input");
    const unitSelect = fragment.querySelector(".unit-select");
    const gramsValue = fragment.querySelector(".grams-value");
    const energyValue = fragment.querySelector(".energy-value");
    const deleteButton = fragment.querySelector(".delete-button");
    const baseFood = state.foodsByCode.get(item.code);
    const isBlank = !baseFood && !String(item.query || "").trim();
    const isExpanded = item.expanded === true;

    toggleButton.hidden = isBlank;
    quickInput.hidden = !isBlank;
    toggleButton.setAttribute("aria-expanded", String(isExpanded));
    details.hidden = isBlank || !isExpanded;
    chevron.textContent = isExpanded ? "⌃" : "⌄";
    summaryName.textContent = baseFood
      ? foodInputName(baseFood)
      : String(item.query || "").trim();
    summaryDetail.textContent = baseFood
      ? ingredientSummaryDetail(item)
      : String(item.query || "").trim()
        ? "食品データ未選択"
        : "";

    quickInput.value = item.query || "";
    foodInput.value = item.query || (baseFood ? foodInputName(baseFood) : "");
    amountInput.value = String(item.amount);

    for (const method of COOKING_METHODS) {
      const option = document.createElement("option");
      option.value = method.id;
      option.textContent = method.label;
      option.selected = method.id === item.method;
      methodSelect.append(option);
    }

    const units = baseFood ? availableUnitsForFood(baseFood) : defaultUnits();
    for (const unit of units) {
      const option = document.createElement("option");
      option.value = unit.id;
      option.textContent = unit.label;
      option.selected = unit.id === item.unitId;
      unitSelect.append(option);
    }

    updateIngredientCard(item, methodNote, gramsValue, energyValue);

    toggleButton.addEventListener("click", () => {
      item.expanded = !isExpanded;
      renderIngredients();
      persistState();
    });

    const commitFoodValue = (value) => {
      const food = findFoodByInput(value);
      item.query = value.trim();

      if (!food) {
        item.code = "";
        if (item.query) {
          item.expanded = true;
          renderIngredients();
          renderSummary();
          persistState();
          return;
        }
        methodNote.textContent = "食材を入力してください。";
        renderSummary();
        persistState();
        return;
      }

      const foodChanged = item.code !== food.code;
      item.code = food.code;
      item.query = foodInputName(food);
      item.expanded = true;
      if (foodChanged) {
        item.amount = food.defaultAmount;
        item.unitId = food.defaultUnitId;
      }
      renderIngredients();
      renderSummary();
      persistState();
    };

    const commitFoodInput = () => commitFoodValue(foodInput.value);
    const commitQuickInput = () => {
      if (!quickInput.value.trim()) return;
      commitFoodValue(quickInput.value);
    };

    quickInput.addEventListener("input", (event) => {
      item.query = event.target.value;
      persistState();
    });
    quickInput.addEventListener("change", commitQuickInput);
    quickInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        commitQuickInput();
      }
    });

    foodInput.addEventListener("input", (event) => {
      item.query = event.target.value;
      const selectedName = baseFood ? foodInputName(baseFood) : "";
      if (normalize(item.query) !== normalize(selectedName)) {
        item.code = "";
        methodNote.textContent = "候補から食材を選んでください。";
        gramsValue.textContent = "-";
        energyValue.textContent = "-";
        renderSummary();
      }
      persistState();
    });

    foodInput.addEventListener("change", commitFoodInput);
    foodInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        commitFoodInput();
      }
    });

    methodSelect.addEventListener("change", (event) => {
      item.method = event.target.value;
      updateIngredientCard(item, methodNote, gramsValue, energyValue);
      renderSummary();
      persistState();
    });

    amountInput.addEventListener("input", (event) => {
      const next = Number(event.target.value);
      item.amount = Number.isFinite(next) && next >= 0 ? next : 0;
      updateIngredientCard(item, methodNote, gramsValue, energyValue);
      renderSummary();
      persistState();
    });

    unitSelect.addEventListener("change", (event) => {
      item.unitId = event.target.value;
      updateIngredientCard(item, methodNote, gramsValue, energyValue);
      renderSummary();
      persistState();
    });

    deleteButton.addEventListener("click", () => {
      dish.ingredients = dish.ingredients.filter((entry) => entry.id !== item.id);
      renderIngredients();
      renderSummary();
      persistState();
    });

    ingredientList.append(fragment);
  }
}

function createBlankDish() {
  return {
    id: makeId(),
    name: "",
    servings: 2,
    expanded: false,
    ingredients: [],
  };
}

function ensureDraftStructure() {
  if (!Array.isArray(state.draft.dishes)) {
    state.draft.dishes = [];
  }
  if (!state.draft.dishes.length) {
    state.draft.dishes.push(createBlankDish());
  }
  const hasBlankDish = state.draft.dishes.some(
    (dish) =>
      !dish.name.trim() &&
      !dish.ingredients.some((item) => item.code || String(item.query || "").trim()),
  );
  if (!hasBlankDish) {
    state.draft.dishes.push(createBlankDish());
  }
  if (!state.draft.dishes.some((dish) => dish.id === state.activeDishId)) {
    state.activeDishId = state.draft.dishes[0].id;
  }
}

function ensureDishIngredientRow(dish) {
  const hasBlankRow = dish.ingredients.some(
    (item) => !item.code && !String(item.query || "").trim(),
  );
  if (!hasBlankRow) {
    dish.ingredients.push(createBlankIngredient());
  }
}

function getActiveDish() {
  return (
    state.draft.dishes.find((dish) => dish.id === state.activeDishId) ??
    state.draft.dishes[0] ??
    null
  );
}

function allDraftIngredients(draft = state.draft) {
  return (draft.dishes ?? []).flatMap((dish) => dish.ingredients ?? []);
}

function draftDishNames(draft = state.draft) {
  return (draft.dishes ?? [])
    .map((dish) => dish.name.trim())
    .filter(Boolean);
}

function createBlankIngredient() {
  return {
    id: makeId(),
    code: "",
    query: "",
    method: "",
    amount: 100,
    unitId: "g",
    expanded: false,
  };
}

function ingredientSummaryDetail(item) {
  const unit = unitsById.get(item.unitId);
  const method = COOKING_METHODS.find((entry) => entry.id === item.method);
  return `${formatSmart(item.amount, 1)} ${unit?.label || ""} · ${method?.label || "指定なし"}`;
}

function renderFoodOptions() {
  dom.foodOptions.innerHTML = "";
  const sorted = [...state.foods].sort(
    (a, b) => Number(b.isCommon) - Number(a.isCommon) || compareNames(a, b),
  );
  const seen = new Set();

  for (const food of sorted) {
    const value = foodInputName(food);
    if (seen.has(value)) continue;
    seen.add(value);

    const option = document.createElement("option");
    option.value = value;
    dom.foodOptions.append(option);
  }
}

function findFoodByInput(value) {
  const query = normalize(value);
  if (!query) return null;

  const exact = state.foods
    .filter(
      (food) =>
        normalize(foodInputName(food)) === query ||
        normalize(food.officialName) === query ||
        normalize(food.reading) === query,
    )
    .sort((a, b) => Number(b.isCommon) - Number(a.isCommon));

  return exact[0] ?? rankFoods(query)[0] ?? null;
}

function foodInputName(food) {
  return food.displayName || shortMaterialName(food.officialName);
}

function shortMaterialName(name) {
  return cleanOfficialFoodName(name)
    .replace(/［[^］]+］/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(
      /\s+(油いため|塩焼き|水煮|焼き|ゆで|茹で|蒸し|炒め|フライ|揚げ|生)$/u,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
}

function cleanOfficialFoodName(name) {
  return name
    .replace(/＜[^＞]+＞/g, "")
    .replace(/（[^）]+）/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function defaultUnits() {
  return ["g", "kg", "ml", "tsp", "tbsp", "cup"].map((id) => unitsById.get(id));
}

function updateIngredientCard(item, methodNote, gramsValue, energyValue) {
  const baseFood = state.foodsByCode.get(item.code);
  if (!baseFood) {
    methodNote.textContent = item.query
      ? "候補から食材を選んでください。"
      : "食材を入力してください。";
    gramsValue.textContent = "-";
    energyValue.textContent = "-";
    return;
  }

  const food = resolveFoodForItem(item);
  const grams = ingredientGrams(item, baseFood);
  gramsValue.textContent = `${formatSmart(grams, 1)} g`;
  energyValue.textContent =
    `${formatValue("energy", nutrientAmount(food, "energy", grams))} kcal`;

  if (!item.method) {
    methodNote.textContent = "";
  } else if (food.code === baseFood.code) {
    methodNote.textContent = "調理後データがないため、元の食材の値で計算します。";
  } else {
    methodNote.textContent = `計算: ${cleanOfficialFoodName(food.officialName)}`;
  }
}

function resolveFoodForItem(item) {
  const baseFood = state.foodsByCode.get(item.code);
  if (!baseFood || !item.method) return baseFood;

  const method = COOKING_METHODS.find((entry) => entry.id === item.method);
  if (!method) return baseFood;

  const family = foodFamilyName(baseFood);
  const candidates = state.foods.filter((food) => {
    const officialName = normalize(food.officialName);
    return (
      food.category === baseFood.category &&
      foodFamilyName(food) === family &&
      method.keywords.some((keyword) => officialName.includes(normalize(keyword)))
    );
  });

  return candidates[0] ?? baseFood;
}

function foodFamilyName(food) {
  let name = normalize(food.officialName);
  for (const word of ["水煮", "焼き", "ゆで", "茹で", "蒸し", "炒め", "フライ", "揚げ", "煮", "生"]) {
    name = name.replaceAll(normalize(word), "");
  }
  return name;
}

function renderSummary() {
  const totals = computeTotals(allDraftIngredients());
  const perServing = computePerPersonTotals(state.draft.dishes);

  dom.summaryTitle.textContent = "栄養価";
  const names = draftDishNames();
  dom.summaryMealMeta.textContent =
    `${names.length ? names.join("・") : "料理名未入力"} / ` +
    `${formatMealLabel(state.draft.mealType)} / ${formatDateLabel(state.draft.date)} / 料理ごとに人数設定`;
  dom.totalEnergy.textContent = `${formatValue("energy", totals.energy)} kcal`;
  dom.perServingEnergy.textContent = `${formatValue("energy", perServing.energy)} kcal`;
  dom.totalMainGrid.innerHTML = buildMetricGrid(totals);
  dom.perServingMainGrid.innerHTML = buildMetricGrid(perServing);
  dom.mainTable.innerHTML = buildNutrientRows("main", totals, perServing);
  dom.mineralTable.innerHTML = buildNutrientRows("mineral", totals, perServing);
  dom.vitaminTable.innerHTML = buildNutrientRows("vitamin", totals, perServing);
  renderDailySummary();
}

function renderDailySummary() {
  const totals = computeDailyTotals(state.draft.date);
  dom.dailyEnergy.textContent = `${formatValue("energy", totals.energy)} kcal`;
  dom.dailyMainGrid.innerHTML = buildMetricGrid(totals);

  const notices = DAILY_TARGET_DEFINITIONS.map((target) => {
    const targetValue = state.dailyTargets[target.key];
    const current = totals[target.key] || 0;
    if (!Number.isFinite(targetValue) || targetValue <= 0) return null;

    if (target.kind === "max") {
      if (current <= targetValue) return null;
      return {
        ...target,
        current,
        targetValue,
        ratio: targetValue / current,
        message: `目標値を${formatValue(target.key, current - targetValue)}${target.unit}超過`,
        kind: "excess",
      };
    }

    if (current >= targetValue) return null;
    return {
      ...target,
      current,
      targetValue,
      ratio: current / targetValue,
      message: `あと${formatValue(target.key, targetValue - current)}${target.unit}`,
      kind: "shortage",
    };
  })
    .filter(Boolean)
    .sort((a, b) => a.ratio - b.ratio);

  if (!notices.length) {
    dom.deficiencyList.innerHTML =
      '<p class="deficiency-empty">設定した目標範囲に達しています。</p>';
    return;
  }

  dom.deficiencyList.innerHTML = notices
    .map((notice) => {
      const percent =
        notice.kind === "excess"
          ? Math.round((notice.current / notice.targetValue) * 100)
          : Math.round(notice.ratio * 100);
      const barPercent = Math.min(percent, 100);
      const canCalculate = FOOD_AMOUNT_NUTRIENT_KEYS.includes(notice.key);
      return `
        <article class="deficiency-item ${notice.kind === "excess" ? "is-excess" : ""}">
          <div class="deficiency-item-head">
            <strong>${notice.label}</strong>
            <span>${notice.message}</span>
          </div>
          <div class="deficiency-stats">
            <span>摂取量<strong>${formatValue(notice.key, notice.current)} ${notice.unit}</strong></span>
            <span>目標量<strong>${formatTargetNumber(notice.targetValue)} ${notice.unit}</strong></span>
            <span>達成率<strong>${percent}%</strong></span>
            <span>${notice.kind === "excess" ? "超過量" : "不足量"}<strong>${notice.message}</strong></span>
          </div>
          <div class="deficiency-track">
            <span style="width: ${barPercent}%"></span>
          </div>
          ${
            canCalculate
              ? `<button class="use-nutrient-button" type="button" data-use-nutrient="${notice.key}">この不足を食品量に換算</button>`
              : ""
          }
        </article>
      `;
    })
    .join("");
}

function computeDailyTotals(date) {
  const dailyTotals = zeroNutrients();

  for (const meal of MEALS) {
    const draft =
      date === state.draft.date && meal.key === state.draft.mealType
        ? state.draft
        : loadDraftSlot(date, meal.key);
    const mealTotals = computePerPersonTotals(draft.dishes);
    for (const nutrient of NUTRIENTS) {
      dailyTotals[nutrient.key] += mealTotals[nutrient.key];
    }
  }

  return dailyTotals;
}

function renderTargetInputs() {
  dom.targetInputs.innerHTML = "";
  for (const target of DAILY_TARGET_DEFINITIONS) {
    const label = document.createElement("label");
    label.className = "target-input";
    label.innerHTML = `
      <span>${target.label}${target.kind === "max" ? "（上限）" : ""}</span>
      <span>
        <input
          type="number"
          min="0.1"
          step="0.1"
          value="${state.dailyTargets[target.key]}"
          data-target-key="${target.key}"
        />
        <small>${target.unit}</small>
      </span>
    `;
    dom.targetInputs.append(label);
  }
}

function formatTargetNumber(value) {
  return Number.isInteger(value) ? String(value) : String(value.toFixed(1));
}

function setupFoodAmountTool() {
  dom.foodAmountNutrient.innerHTML = "";
  for (const key of FOOD_AMOUNT_NUTRIENT_KEYS) {
    const nutrient = NUTRIENTS.find((entry) => entry.key === key);
    const option = document.createElement("option");
    option.value = key;
    option.textContent = nutrient.label;
    dom.foodAmountNutrient.append(option);
  }

  dom.foodAmountMethod.innerHTML = "";
  for (const method of COOKING_METHODS) {
    const option = document.createElement("option");
    option.value = method.id;
    option.textContent = method.label;
    dom.foodAmountMethod.append(option);
  }

  dom.foodAmountNutrient.value = "protein";
  syncFoodAmountNeeded();
}

function syncFoodAmountNeeded() {
  const key = dom.foodAmountNutrient.value;
  const nutrient = NUTRIENTS.find((entry) => entry.key === key);
  const totals = computeDailyTotals(state.draft.date);
  const target = state.dailyTargets[key] || 0;
  const remaining = Math.max(target - (totals[key] || 0), 0);
  dom.foodAmountNeeded.value = formatTargetNumber(remaining);
  dom.foodAmountUnit.textContent = nutrient?.unit || "";
}

function calculateFoodAmounts() {
  const nutrientKey = dom.foodAmountNutrient.value;
  const nutrient = NUTRIENTS.find((entry) => entry.key === nutrientKey);
  const needed = Number(dom.foodAmountNeeded.value);
  const methodId = dom.foodAmountMethod.value;

  if (!nutrient || !Number.isFinite(needed) || needed <= 0) {
    dom.foodAmountResults.innerHTML =
      '<p class="food-amount-message">必要量を0より大きい数値で入力してください。</p>';
    return;
  }

  const seen = new Set();
  const results = state.foods
    .filter((food) => food.isCommon)
    .map((food) => buildFoodAmountResult(food, nutrientKey, needed, methodId))
    .filter((result) => {
      if (!result || seen.has(result.preparedFood.code)) return false;
      seen.add(result.preparedFood.code);
      return true;
    })
    .sort((a, b) => foodAmountScore(a) - foodAmountScore(b))
    .slice(0, 4);

  dom.foodAmountResults.innerHTML = results.length
    ? results.map((result) => renderFoodAmountResult(result, nutrient)).join("")
    : '<p class="food-amount-message">条件に合う食品候補が見つかりませんでした。</p>';
}

function buildFoodAmountResult(baseFood, nutrientKey, needed, methodId) {
  const preparedFood = resolveFoodForItem({ code: baseFood.code, method: methodId });
  if (!preparedFood) return null;
  const nutrientPer100g = preparedFood.nutrients[nutrientKey] || 0;
  if (nutrientPer100g <= 0) return null;

  const grams = (needed / nutrientPer100g) * 100;
  if (!Number.isFinite(grams) || grams <= 0) return null;
  const typicalServingGrams = ingredientGrams(
    {
      amount: baseFood.defaultAmount,
      unitId: baseFood.defaultUnitId,
    },
    baseFood,
  );

  return {
    baseFood,
    preparedFood,
    nutrientKey,
    needed,
    methodId,
    methodAvailable: !methodId || preparedFood.code !== baseFood.code,
    grams,
    energy: nutrientAmount(preparedFood, "energy", grams),
    servingRatio: typicalServingGrams > 0 ? grams / typicalServingGrams : grams / 100,
  };
}

function foodAmountScore(result) {
  const unrealisticPenalty =
    result.grams > 500 || result.servingRatio > 4 ? 10000 : 0;
  const methodPenalty = result.methodAvailable ? 0 : 5000;
  const servingPenalty = Math.max(result.servingRatio - 1.5, 0) * 500;
  return (
    unrealisticPenalty +
    methodPenalty +
    servingPenalty +
    result.grams +
    result.energy * 0.08
  );
}

function renderFoodAmountResult(result, nutrient) {
  const method = COOKING_METHODS.find((entry) => entry.id === result.methodId);
  const methodLabel = result.methodId
    ? result.methodAvailable
      ? method?.label
      : `${method?.label}のデータなし`
    : "指定なし";
  const roundedGrams = formatCalculatedGrams(result.grams);
  const unrealistic =
    result.grams > 500 || result.energy > 1000 || result.servingRatio > 4;
  const foodLabel = `${foodInputName(result.baseFood)}${
    result.methodId ? `（${methodLabel}）` : ""
  }`;

  return `
    <article class="food-amount-result ${unrealistic ? "is-warning" : ""}">
      <div class="food-amount-result-head">
        <strong>${escapeHtml(foodInputName(result.baseFood))}</strong>
        <span>${methodLabel}</span>
      </div>
      <p>
        「${escapeHtml(foodLabel)}」を約<strong>${roundedGrams}g</strong>食べると、
        ${nutrient.label}を約${formatTargetNumber(result.needed)}${nutrient.unit}摂取できます。
      </p>
      <div class="food-amount-result-stats">
        <span>必要な食品量<strong>${roundedGrams}g</strong></span>
        <span>エネルギー<strong>${formatValue("energy", result.energy)} kcal</strong></span>
        <span>栄養素量<strong>${formatTargetNumber(result.needed)} ${nutrient.unit}</strong></span>
        <span>量の目安<strong>${foodAmountEase(result.servingRatio)}</strong></span>
      </div>
      ${
        unrealistic
          ? '<p class="amount-warning">この食品だけで必要量を補うには、現実的ではない量が必要です。複数の食品に分けることをおすすめします。</p>'
          : ""
      }
    </article>
  `;
}

function formatCalculatedGrams(grams) {
  return grams < 20 ? formatSmart(grams, 1) : String(Math.round(grams));
}

function foodAmountEase(servingRatio) {
  if (servingRatio <= 0.5) return "普段の半量以下";
  if (servingRatio <= 1.5) return "普段の1回分ほど";
  if (servingRatio <= 3) return "2〜3回分ほど";
  if (servingRatio <= 4) return "かなり多め";
  return "かなり多い";
}

function computeTotals(ingredients) {
  const totals = zeroNutrients();
  for (const item of ingredients) {
    const baseFood = state.foodsByCode.get(item.code);
    const food = resolveFoodForItem(item);
    if (!baseFood || !food) continue;
    const grams = ingredientGrams(item, baseFood);
    for (const nutrient of NUTRIENTS) {
      totals[nutrient.key] += nutrientAmount(food, nutrient.key, grams);
    }
  }
  return totals;
}

function computePerPersonTotals(dishes) {
  const totals = zeroNutrients();
  for (const dish of dishes ?? []) {
    const dishTotals = computeTotals(dish.ingredients ?? []);
    const servings = Math.max(Number(dish.servings) || 1, 1);
    for (const nutrient of NUTRIENTS) {
      totals[nutrient.key] += dishTotals[nutrient.key] / servings;
    }
  }
  return totals;
}

function zeroNutrients() {
  return Object.fromEntries(NUTRIENTS.map((nutrient) => [nutrient.key, 0]));
}

function buildMetricGrid(values) {
  return MAIN_KEYS.map((key) => {
    const nutrient = NUTRIENTS.find((entry) => entry.key === key);
    return `
      <div class="metric-cell">
        <span class="metric-label">${nutrient.label}</span>
        <span class="metric-value">${formatValue(key, values[key])} ${nutrient.unit}</span>
      </div>
    `;
  }).join("");
}

function buildNutrientRows(group, totals, perServing) {
  return NUTRIENTS.filter((nutrient) => nutrient.group === group)
    .map((nutrient) => `
      <div class="nutrient-row">
        <span class="nutrient-name">${nutrient.label}</span>
        <span class="nutrient-total">全体: ${formatValue(nutrient.key, totals[nutrient.key])} ${nutrient.unit}</span>
        <span class="nutrient-per">1人前: ${formatValue(nutrient.key, perServing[nutrient.key])} ${nutrient.unit}</span>
      </div>
    `)
    .join("");
}

function saveCurrentMeal() {
  const dishes = state.draft.dishes.filter(
    (dish) => dish.name.trim() || dish.ingredients.some((item) => item.code),
  );
  const ingredients = dishes.flatMap((dish) => dish.ingredients);
  const recipeName =
    dishes.map((dish) => dish.name.trim()).filter(Boolean).join("・") || "名前なしの料理";
  if (!ingredients.some((item) => item.code)) {
    dom.dataStatus.textContent = "材料を1つ以上追加してください";
    return;
  }

  const date = state.draft.date || DEFAULT_DATE;
  const mealType = state.draft.mealType;
  const entry = {
    id: makeId(),
    recipeName,
    servings: dishes[0]?.servings || 1,
    dishes: dishes.map(cloneDish),
    ingredients: ingredients.map(cloneIngredient),
    totals: computeTotals(ingredients),
    savedAt: new Date().toISOString(),
  };

  const day = dayMeals(date);
  day[mealType].unshift(entry);
  state.savedMeals[date] = day;
  state.historyDate = date;
  state.historyOpen = true;
  dom.dataStatus.textContent = `${formatMealLabel(mealType)}に「${recipeName}」を保存しました`;

  const blankDish = createBlankDish();
  state.draft.dishes = [blankDish];
  state.activeDishId = blankDish.id;
  syncInputsFromDraft();
  renderMealTabs();
  renderIngredients();
  renderSummary();
  renderCalendarPanel();
  persistState();
}

function loadSavedEntry(date, mealType, entryId) {
  const entry = dayMeals(date)[mealType].find((item) => item.id === entryId);
  if (!entry) return;

  state.draft.date = date;
  state.draft.mealType = mealType;
  state.draft.dishes = normalizeDraftDishes(entry).map((dish) => ({
    ...dish,
    id: makeId(),
    expanded: false,
    ingredients: dish.ingredients.map((item) => ({
      ...normalizeIngredient(item),
      id: makeId(),
      expanded: false,
    })),
  }));
  ensureDraftStructure();
  state.activeDishId = state.draft.dishes[0].id;

  syncInputsFromDraft();
  renderMealTabs();
  renderIngredients();
  renderSummary();
  state.historyOpen = false;
  renderCalendarPanel();
  persistState();
}

function deleteSavedEntry(date, mealType, entryId) {
  const day = dayMeals(date);
  day[mealType] = day[mealType].filter((entry) => entry.id !== entryId);
  state.savedMeals[date] = day;
  dom.dataStatus.textContent = "保存した料理を削除しました";
  renderCalendarPanel();
  persistState();
}

function dayMeals(date) {
  return (
    state.savedMeals[date] ?? {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  );
}

function availableUnitsForFood(food) {
  const units = [
    unitsById.get("g"),
    unitsById.get("kg"),
    unitsById.get("ml"),
    unitsById.get("tsp"),
    unitsById.get("tbsp"),
    unitsById.get("cup"),
  ];
  if (food.pieceGrams && food.pieceUnitId && unitsById.has(food.pieceUnitId)) {
    units.unshift(unitsById.get(food.pieceUnitId));
  }
  return units.filter(Boolean);
}

function ingredientGrams(item, food) {
  const unit = unitsById.get(item.unitId) ?? unitsById.get("g");
  if (unit.kind === "absolute") {
    return item.amount * (unit.gramsPerUnit ?? 1);
  }
  if (unit.kind === "volume") {
    return item.amount * (unit.milliliters ?? 1) * food.gramsPerMilliliter;
  }
  return item.amount * (food.pieceGrams || food.defaultAmount);
}

function nutrientAmount(food, key, grams) {
  return (food.nutrients[key] || 0) * (grams / 100);
}

function ingredientSummary(ingredients) {
  return ingredients
    .slice(0, 4)
    .map((item) => {
      const food = state.foodsByCode.get(item.code);
      if (!food) return null;
      const name = food.displayName || food.officialName;
      const unit = unitsById.get(item.unitId);
      return `${name} ${formatSmart(item.amount, 1)}${unit?.label || ""}`;
    })
    .filter(Boolean)
    .join(" / ");
}

function rankFoods(query) {
  const scored = state.foods.map((food) => ({ food, score: searchScore(food, query) }));
  return scored
    .filter((entry) => (query ? entry.score > 0 : true))
    .sort((a, b) => b.score - a.score || compareNames(a.food, b.food))
    .map((entry) => entry.food);
}

function searchScore(food, query) {
  if (!query) {
    return food.isCommon ? 100 : 10;
  }

  const primary = normalize(food.displayName || food.officialName);
  const official = normalize(food.officialName);
  const reading = normalize(food.reading);
  const category = normalize(food.category);

  let score = 0;
  if (food.isCommon) score += 20;
  if (primary.startsWith(query)) score += 120;
  if (primary.includes(query)) score += 90;
  if (reading.startsWith(query)) score += 100;
  if (reading.includes(query)) score += 75;
  if (official.includes(query)) score += 40;
  if (category.includes(query)) score += 20;
  return score;
}

function compareNames(a, b) {
  return (a.displayName || a.officialName).localeCompare(b.displayName || b.officialName, "ja");
}

function normalize(text) {
  return String(text ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u30a1-\u30f6]/g, (character) =>
      String.fromCharCode(character.charCodeAt(0) - 0x60),
    )
    .replace(/\s+/g, "");
}

function formatValue(key, value) {
  const nutrient = NUTRIENTS.find((entry) => entry.key === key);
  return value.toFixed(nutrient.decimals);
}

function formatSmart(value, decimals) {
  const fixed = Number(value).toFixed(decimals);
  return fixed.endsWith(".0") ? fixed.slice(0, -2) : fixed;
}

function formatMealLabel(mealType) {
  return MEALS.find((meal) => meal.key === mealType)?.label ?? "朝";
}

function formatDateLabel(dateString) {
  if (!dateString) return DEFAULT_DATE;
  const [year, month, day] = dateString.split("-");
  return `${year}.${month}.${day}`;
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function shiftDate(dateString, days) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day, 12);
  date.setDate(date.getDate() + days);
  return formatLocalDate(date);
}

function switchDraft(date, mealType) {
  if (date === state.draft.date && mealType === state.draft.mealType) return;

  saveCurrentDraftSlot();
  state.draft = loadDraftSlot(date, mealType);
  ensureDraftStructure();
  state.activeDishId = state.draft.dishes[0].id;
  showActionMessage("");
  syncInputsFromDraft();
  renderMealTabs();
  renderIngredients();
  renderSummary();
  persistState();
}

function saveCurrentDraftSlot() {
  const date = state.draft.date || DEFAULT_DATE;
  const mealType = state.draft.mealType || "breakfast";
  state.drafts[date] ??= {};
  state.drafts[date][mealType] = {
    dishes: state.draft.dishes.map(cloneDish),
  };
}

function loadDraftSlot(date, mealType) {
  const slot = state.drafts[date]?.[mealType];
  return {
    date,
    mealType,
    dishes: normalizeDraftDishes(slot),
  };
}

function cloneDish(dish) {
  return {
    id: dish.id,
    name: dish.name,
    servings: dish.servings,
    expanded: Boolean(dish.expanded),
    ingredients: dish.ingredients.map(cloneIngredient),
  };
}

function normalizeDish(dish, fallbackServings = 2) {
  return {
    id: typeof dish?.id === "string" ? dish.id : makeId(),
    name: typeof dish?.name === "string" ? dish.name : "",
    servings:
      Number.isFinite(dish?.servings) && dish.servings > 0
        ? Math.round(dish.servings)
        : Number.isFinite(fallbackServings) && fallbackServings > 0
          ? Math.round(fallbackServings)
          : 2,
    expanded: dish?.expanded === true,
    ingredients: Array.isArray(dish?.ingredients)
      ? dish.ingredients.map(normalizeIngredient)
      : [],
  };
}

function normalizeDraftDishes(source) {
  if (Array.isArray(source?.dishes)) {
    return source.dishes
      .filter((dish) => dish && typeof dish === "object")
      .map((dish) => normalizeDish(dish, source.servings));
  }

  const hasLegacyDish =
    typeof source?.recipeName === "string" || Array.isArray(source?.ingredients);
  if (!hasLegacyDish) return [];

  return [
    normalizeDish({
      name: typeof source.recipeName === "string" ? source.recipeName : "",
      servings:
        Number.isFinite(source.servings) && source.servings > 0
          ? Math.round(source.servings)
          : 2,
      expanded: false,
      ingredients: Array.isArray(source.ingredients) ? source.ingredients : [],
    }),
  ];
}

function cloneIngredient(item) {
  return {
    id: item.id,
    code: item.code,
    query: item.query,
    method: item.method,
    amount: item.amount,
    unitId: item.unitId,
    expanded: Boolean(item.expanded),
  };
}

function normalizeIngredient(item) {
  return {
    id: typeof item?.id === "string" ? item.id : makeId(),
    code: typeof item?.code === "string" ? item.code : "",
    query: typeof item?.query === "string" ? item.query : "",
    method: typeof item?.method === "string" ? item.method : "",
    amount: Number.isFinite(item?.amount) ? item.amount : 100,
    unitId: typeof item?.unitId === "string" ? item.unitId : "g",
    expanded: Boolean(item?.expanded),
  };
}

function syncInputsFromDraft() {
  dom.dateInput.value = state.draft.date;
}

function persistState() {
  try {
    saveCurrentDraftSlot();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        historyOpen: state.historyOpen,
        historyDate: state.historyDate,
        draft: state.draft,
        drafts: state.drafts,
        dailyTargets: state.dailyTargets,
        templates: state.templates,
        savedMeals: state.savedMeals,
      }),
    );
  } catch (error) {
    console.warn("Failed to persist state", error);
  }
}

function hydrateState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.historyOpen = Boolean(parsed.historyOpen);
    state.historyDate = typeof parsed.historyDate === "string" ? parsed.historyDate : DEFAULT_DATE;

    if (parsed.draft && typeof parsed.draft === "object") {
      state.draft = {
        date: typeof parsed.draft.date === "string" ? parsed.draft.date : DEFAULT_DATE,
        mealType:
          typeof parsed.draft.mealType === "string"
            ? parsed.draft.mealType
            : "breakfast",
        dishes: normalizeDraftDishes(parsed.draft),
      };
    }

    if (parsed.drafts && typeof parsed.drafts === "object") {
      state.drafts = parsed.drafts;
    }

    if (parsed.dailyTargets && typeof parsed.dailyTargets === "object") {
      for (const target of DAILY_TARGET_DEFINITIONS) {
        const value = Number(parsed.dailyTargets[target.key]);
        if (Number.isFinite(value) && value > 0) {
          state.dailyTargets[target.key] = value;
        }
      }
    }

    if (Array.isArray(parsed.templates)) {
      state.templates = parsed.templates
        .filter((template) => template && Array.isArray(template.ingredients))
        .map((template) => ({
          id: typeof template.id === "string" ? template.id : makeId(),
          name: typeof template.name === "string" ? template.name : "料理テンプレート",
          servings:
            Number.isFinite(template.servings) && template.servings > 0
              ? Math.round(template.servings)
              : 2,
          ingredients: template.ingredients.map(normalizeIngredient),
        }));
    }

    if (state.drafts[state.draft.date]?.[state.draft.mealType]) {
      state.draft = loadDraftSlot(state.draft.date, state.draft.mealType);
    } else {
      ensureDraftStructure();
      saveCurrentDraftSlot();
    }

    if (parsed.savedMeals && typeof parsed.savedMeals === "object") {
      state.savedMeals = parsed.savedMeals;
    }
  } catch (error) {
    console.warn("Failed to restore state", error);
  }
}

function sanitizeSavedMeals() {
  const next = {};
  for (const [date, meals] of Object.entries(state.savedMeals)) {
    next[date] = {
      breakfast: sanitizeSavedEntryList(meals.breakfast),
      lunch: sanitizeSavedEntryList(meals.lunch),
      dinner: sanitizeSavedEntryList(meals.dinner),
    };
  }
  state.savedMeals = next;
}

function sanitizeSavedEntryList(list) {
  if (!Array.isArray(list)) return [];
  return list
    .filter(
      (entry) =>
        entry && (Array.isArray(entry.ingredients) || Array.isArray(entry.dishes)),
    )
    .map((entry) => {
      const dishes = normalizeDraftDishes(entry);
      const ingredients = (
        Array.isArray(entry.ingredients)
          ? entry.ingredients
          : dishes.flatMap((dish) => dish.ingredients)
      )
        .filter((item) => item && typeof item.code === "string")
        .map(normalizeIngredient);
      const names = dishes.map((dish) => dish.name.trim()).filter(Boolean);
      return {
        id: typeof entry.id === "string" ? entry.id : makeId(),
        recipeName:
          typeof entry.recipeName === "string"
            ? entry.recipeName
            : names.join("・") || "名前なしの料理",
        servings:
          Number.isFinite(entry.servings) && entry.servings > 0
            ? Math.round(entry.servings)
            : 1,
        dishes,
        ingredients,
        totals:
          entry.totals && typeof entry.totals === "object"
            ? entry.totals
            : computeTotals(ingredients),
        savedAt:
          typeof entry.savedAt === "string"
            ? entry.savedAt
            : new Date().toISOString(),
      };
    });
}

function setupPwa() {
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch((error) => {
        console.warn("Service worker registration failed", error);
      });
    });
  }
}

function makeId() {
  return crypto.randomUUID();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
