import {NavBar} from "@/app/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
        <div className="container mx-auto m-5">
            <p className={"text-4xl font-bold font-mono"}>quirky_notes</p>
        </div>
    </>
  );
}
