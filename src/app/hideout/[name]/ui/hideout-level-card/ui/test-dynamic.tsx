"use client";

import { useEffect, useState } from "react";

type Props = {
  id: string;
};

export const TestDynamic = ({ id }: Props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setName(id);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={"text-gray-500"}>Dynamic name: {name}</div>;
};
