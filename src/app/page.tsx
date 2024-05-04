import Image from "next/image";
import preflist from "@/app/data";

export default function Home() {
  return (
    <main>
    <h1>都道府県</h1>
    {preflist.map((pref)=><p>{pref}</p>)}
    <input type="checkbox" id="pref-1" value="pref-1"></input>
    <label for="pref-1">北海道</label>
    <input type="checkbox" id="pref-1" value="pref-1"></input>
    </main>
  );
}
