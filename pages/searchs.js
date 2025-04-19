import Head from "next/head"
import Header from "../components/Header"
import HeaderOptions from "../components/HeaderOptions"
import HeaderOption from "../components/HeaderOption"
import Response from "../Response"
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"
import PaginationButtons from "../components/PaginationButtons"
import { getJson } from "serpapi"

function unserpify(serp) {
  return {
    items: serp.organic_results.map(result => {
      return {
        title: result.title,
        link: result.link,
        displayLink: result.displayed_link,
        formattedUrl: result.link,
        htmlFormattedUrl: result.link,
        snippet: result.snippet
      }
    }),
    ...serp
  }
}

function Search({ results }) {
  const router = useRouter()
  const unserped = unserpify(results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Rafdo Search</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      {/*header*/}

      <Header term={router.query.term} serp={true} />

      {/*body*/}
      <SearchResults results={unserped} resultsItems={unserped.items} images={false} serp={true} />
    </div>
  )
}

export default Search

export async function getServerSideProps(ctx) {
  const API_KEY = process.env.API_KEY
  const CONTEXT_KEY = process.env.CONTEXT_KEY

  const useDummyData =false //true for devlopment (mock results)
  const startIndex = ctx.query.start || "0"
  const images = ctx.query.images === "yes"

  let data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex}${ctx.query.images === "yes" ? "&searchType=image" : ""}`
      ).then((response) => response.json())


      var serp
async function getSERP() {
 const promise = await new Promise(resolve => {

   try {
     getJson({
       q: ctx.query.term,
       hl: "en",
       gl: ctx.query.gl ?? "us",
       google_domain: "google.com",
       api_key: "6b0e0bafc9f2b30736dff51e39d669a90df8392374aed1bdc47905723251fc13"
     }, (json) => {
       resolve(json)
     })
    } catch(e) {
     console.log('poop')
     resolve('noserp')
    }
 })
 return promise
}


const a =  await getSERP()
serp = a
  /*if (images) {
    console.log('what')
    data = {...data, ...(await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex + 10}${ctx.query.images === "yes" ? "&searchType=image" : ""}`
    ).then((response) => response.json())), ...(await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex + 20}${ctx.query.images === "yes" ? "&searchType=image" : ""}`
    ).then((response) => response.json()))}
  } else {
    console.log('now')
  }*/


  return {
    props: {
      results: serp
    },
  }
}





function replaceUndefinedWithNull(obj) {
  if (obj === undefined) {
    return null; // Base case: if the value is undefined, return null
  }

  if (typeof obj === 'object' && obj !== null) {
    // Iterate over the object's properties
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = replaceUndefinedWithNull(obj[key]); // Recursively call for nested objects
      }
    }
  }

  return obj; // Return the modified object or value
}