import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    "sub title": "해야할 일 수",
    "add button": "추가",
    "delete button": "삭제",
    "light button": "라이트",
    "dark button": "다크",
    "switch text": "스위치",
  },
  en: {
    "sub title": "the number of things to do",
    "add button": "Add",
    "delete button": "Delete",
    "light button": "light",
    "dark button": "dark",
    "switch text": "switch",
  },
};

function useTranslate() {
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return translate;
}

export default useTranslate;
