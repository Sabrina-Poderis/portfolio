import LocaleEnum from "@/ts/enums/LocalesEnum";

const dictionaries = {
  [LocaleEnum.ENGLISH]: () =>
    import("./en/common.json").then(
      (module) => module.default
    ),
  [LocaleEnum.PORTUGUESE]: () =>
    import("./pt/common.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: LocaleEnum) =>
  dictionaries[locale]();
