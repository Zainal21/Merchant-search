import { BaseResponseType } from "@/types/merchant-type";

const MERCHANT_API = process.env.NEXT_PUBLIC_PROXY_MERCHANT_API || "";

export async function fetchMerchantList(
  keyword: string
): Promise<BaseResponseType> {
  try {
    const response = await fetch(`${MERCHANT_API}?keyword=${keyword}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let finalResponse = await response.json();
    return {
      status: true,
      message: "SUCCESS",
      data: finalResponse,
    };
  } catch (error) {
    return {
      status: false,
      message: "ERROR",
      data: null,
    };
  }
}
