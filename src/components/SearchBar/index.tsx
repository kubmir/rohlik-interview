import React from "react";
import { useIntl } from "react-intl";
import { useDebouncedCallback } from "use-debounce";

import { useSearchContext } from "../../context/SearchContext";
import { messages } from "./messages";
import { SearchInput } from "./styled";

export const SearchBar: React.FC = () => {
  const { formatMessage } = useIntl();
  const {
    actions: { updateSearchQuery },
  } = useSearchContext();

  const onSearchValueChange = useDebouncedCallback((value: string) => {
    updateSearchQuery(value);
  }, 300);

  return (
    <SearchInput
      placeholder={formatMessage(messages.searchProduct)}
      onChange={(event) => onSearchValueChange(event.currentTarget.value)}
    />
  );
};
