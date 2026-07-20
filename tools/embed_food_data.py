import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "assets" / "data"
OUTPUT_PATH = DATA_DIR / "food-data.js"


def main() -> None:
    foods = (DATA_DIR / "foods.csv").read_text(encoding="utf-8")
    overrides = (DATA_DIR / "food_overrides.csv").read_text(encoding="utf-8")
    payload = (
        "window.EMBEDDED_FOOD_DATA = Object.freeze({\n"
        f"  foods: {json.dumps(foods, ensure_ascii=False)},\n"
        f"  overrides: {json.dumps(overrides, ensure_ascii=False)},\n"
        "});\n"
    )
    OUTPUT_PATH.write_text(payload, encoding="utf-8", newline="\n")
    print(f"Generated {OUTPUT_PATH} ({OUTPUT_PATH.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
