import { NextResponse } from "next/server";

export type TaraPriceResponse = {
  taraxa: {
    usd: number;
  };
};

export async function GET() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=taraxa&vs_currencies=usd",
    {
      next: { revalidate: 3600 * 6 },
    }
  );

  const data = (await response.json()) as TaraPriceResponse;

  if (!response.ok) {
    return NextResponse.json(
      { error: "Network response was not ok" },
      { status: 500 }
    );
  }
  return NextResponse.json({ price: data.taraxa.usd }, { status: 200 });
}
