import { BridgeContainer } from "@/components/bridge/bridge-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto max-w-10xl p-10 md:p-20 flex flex-col gap-y-40">
        <div className="w-full min-h-screen">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col gap-20 w-full lg:w-[550px]">
              <h1 className="text-5xl font-bold">
                Bridge between Ethereum and Taraxa!
              </h1>
              <BridgeContainer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
