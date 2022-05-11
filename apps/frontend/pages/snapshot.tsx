import type { NextPage } from "next";
import Head from "next/head";
import { PlusSmIcon } from "@heroicons/react/solid";
import NetworkAddressInput from "../components/input/AddressWithNetwork";
import { useState } from "react";

function Content() {
  const [collection, setCollection] = useState("");

  return (
    <div className="max-w-lg mx-auto">
      <div>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Token Holder Snapshot
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Add a collection&apos;s contract address to get a list of every
            token holder and which tokens they own.
          </p>
        </div>
        <form action="#" className="mt-6 flex">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <NetworkAddressInput
            value={collection}
            onChange={(e: any) => setCollection(e.value)}
            fullWidth={true}
          />
          <button
            type="submit"
            className="ml-4 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Take snapshot
          </button>
        </form>
      </div>
    </div>
  );
}

const Snapshot: NextPage = () => {
  return (
    <>
      <Head>
        <title>Snapshot - NFT Tools</title>
        <meta name="description" content="" />
      </Head>
      <Content />
    </>
  );
};

export default Snapshot;
