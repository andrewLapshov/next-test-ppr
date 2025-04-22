"use client";

import { useEffect, useState } from "react";
import { fetchHideoutItems } from "../../../../api/fetch-hideout";

type Props = {
  id: string;
};

export const TestDynamic = ({ id }: Props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const hideoutModulesList = await fetchHideoutItems();
      const moduleData = hideoutModulesList.find((item) => item.id === id);

      setName(moduleData.name);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Dynamic name: {name}</div>;
};
