import { fetchMerchantList } from "@/server/merchant";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const keyword = req.nextUrl.searchParams.get("keyword");
  if (keyword == undefined) {
    return Response.json(
      { message: "INVALID PARAMETER", code: 422 },
      { status: 422 }
    );
  }

  const response = await fetchMerchantList(keyword);

  if (response.status) {
    const { searchMerchants } = response.data.searchResult;
    return Response.json({ searchMerchants });
  }

  return Response.json(
    { message: "INVALID REQUEST", data: response },
    {
      status: 500,
    }
  );
}

export const dynamic = "force-dynamic";
