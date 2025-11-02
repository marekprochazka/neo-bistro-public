import { STATIC_INFO, STATIC_LINKS } from '~/config/constants';

export function useTransform() {
  const translatePlaceholdersMapping = {
    '{label.email}': `<a href="${STATIC_LINKS.EMAIL}">${STATIC_INFO.EMAIL}</a>`,
    '{label.phone}': `<a href="${STATIC_LINKS.PHONE}">${STATIC_INFO.PHONE}</a>`,
    '{label.cin}': STATIC_INFO.CIN,
    '{label.company_name}': STATIC_INFO.COMPANY_NAME,
    '{label.responsible_person}': STATIC_INFO.RESPONSIBLE_PERSON,
  };

  function replaceTranslatePlaceholdersStrings(
    itemList: string[],
    indexList: number[] = [],
  ) {
    indexList.forEach((index) => {
      if (itemList[index] == undefined) return;
      Object.entries(translatePlaceholdersMapping).forEach(([key, value]) => {
        itemList[index] = itemList[index].replace(key, value);
      });
    });

    return itemList;
  }

  function replaceTranslatePlaceholdersDicts(
    dict: { title: string; value: string }[],
  ) {
    dict.forEach((item) => {
      Object.entries(translatePlaceholdersMapping).forEach(([key, value]) => {
        item.value = item.value.replace(key, value);
      });
    });

    return dict;
  }

  return {
    replaceTranslatePlaceholdersStrings,
    replaceTranslatePlaceholdersDicts,
  };
}
