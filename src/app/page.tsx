"use client";

import { MerchantList, Footer, Header, Loading } from "@/components";
import Head from "next/head";
import { useState } from "react";
import { useMerchantQuery } from "@/hooks/useMerchantQuery";
import Swal from "sweetalert2";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const { error, data, isFetching, refetch } = useMerchantQuery(keyword);

  const handleGetMerchantList = () => {
    if (keyword != "") {
      refetch();
    } else {
      Swal.fire({
        title: "Invalid Keyword",
        text: "Invalid keyword. Please enter at least 3 characters.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Karanganyar Food Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
          Find out what to eat
          <br />
          in seconds
        </h1>
        <p className="text-slate-500 my-5 ">
          674 foods ideas generated so far.
        </p>
        <input
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
          type="text"
          placeholder="Find out what to eat : Es Teh "
          className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
        />
        {isFetching ? (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            disabled
          >
            <Loading color="white" style="large" />
          </button>
        ) : (
          <button
            onClick={handleGetMerchantList}
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
          >
            Search Your Food
          </button>
        )}
        {error && (
          <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
            Error Failed To Fetch Data 🤬
          </h1>
        )}
        <div className="flex flex-wrap">
          {data?.searchMerchants.map((item: any) => (
            <MerchantList
              key={item.id}
              backgroundImage={item?.merchantBrief?.photoHref}
              name={item?.address?.name}
              priceDisplay={item?.estimatedDeliveryFee?.priceDisplayHtml}
              lotLang={`${item.latlng.latitude},${item.latlng.longitude}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
