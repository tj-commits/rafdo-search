import Head from "next/head";
import Header from "../components/Header";
import HeaderOptions from "../components/HeaderOptions";
import HeaderOption from "../components/HeaderOption";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import PaginationButtons from "../components/PaginationButtons";
import { redirect } from "next/navigation";

function ImFeelingLucky({ results }) {
  const router = useRouter();

  return (
    <>
    <Head>
        <title>{router.query.term} - Rafdo Search </title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
    <div className="flex justify-center items-center flex-col py-10 px-10 gap-3">
    <h1 className="text-3xl">Are you sure you're feeling lucky?</h1><br />
    <div className="flex-row">
    <button className="btn" onClick={() => router.push(results.items[0].link)}>Yes</button>
    <button className="btn" onClick={() => router.push('/')}>No</button></div></div>
    </>
  )
}

export default ImFeelingLucky;

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const useDummyData = process.env.USE_DUMMY_DATA === 'true' ? true : false; //true for devlopment (mock results)
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
