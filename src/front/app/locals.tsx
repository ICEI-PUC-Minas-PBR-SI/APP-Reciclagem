import LocalsPage from "@/src/screens/Locals";
import { useState } from "react";

export default function Locals() {
  const [value, setValue] = useState<string>("");

  return <LocalsPage />;
}
