import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box, Center, Input } from "@chakra-ui/react";

export default function Searchbar(search: {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
}) {
  const [input, setInput] = useState<string | undefined>();

  useEffect(() => {
    const listener = (event: { key: string; preventDefault: () => void }) => {
      //detects if the user is pressing the enter key to start a search
      if (event.key === "Enter") {
        event.preventDefault();
        search.setSearch(input);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <Box>
      <Center>
        <Input
          placeholder="Nairobi,Kenya"
          variant="filled"
          focusBorderColor="blue.300"
          htmlSize={180}
          width="100%"
          h="70px"
          borderRadius={36}
          marginTop={5}
          onChange={(e) => setInput(e.target.value)}
          onFocus={(e) => {
            e.target.value = "";
          }}
        />
      </Center>
    </Box>
  );
}
