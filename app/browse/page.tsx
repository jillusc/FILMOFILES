import { FilmsGrid } from "@/app/components";
import dummyData from "../data/dummyData";

export default function Page() {
  return (
    <main className="text-center my-4 p-4">
      <FilmsGrid films={dummyData} />
    </main>
  );
}
