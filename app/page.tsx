import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-start">
      <div className="w-[80%] min-h-[calc(100vh-100px)] flex flex-row p-5 justify-center items-center">
        <Card title="Malware Analysis" href="/malware" />
        <Card title="VAPT" href="/vapt" />
      </div>
    </main>
  );
}
