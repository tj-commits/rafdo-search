import Head from "next/head"
import Header from "../components/Header"
import HeaderOptions from "../components/HeaderOptions"
import HeaderOption from "../components/HeaderOption"
import Response from "../Response"
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"
import PaginationButtons from "../components/PaginationButtons"

function Search({ results }) {
  const router = useRouter()
  let resultsItems = results.items
  console.log(router.query.term.toLowerCase())
  if (router.query.term.toLowerCase() === "rafdo" && (router.query.start === '0' || router.query.start == null)) {
    console.log('yes')
    let oldResultsItems = [...resultsItems]
    resultsItems = []
    resultsItems.push(
      {
        kind: "customsearch#result",
        title: "Rafdo",
        htmlTitle: "<b>Rafdo</b>",
        link: "https://www.rafdo.rf.gd",
        displayLink: "www.rafdo.rf.gd",
        snippet: "Products that are good. From Rafdo.",
        htmlSnippet: "Products that are good. From Rafdo.",
        cacheId: "US-UIewrFroJ",
        formattedUrl: "https://www.rafdo.rf.gd",
        htmlFormattedUrl: "https://www.<b>rafdo.rf.gd</b>",
        pagemap: {
          metatags: [{}],
        },
      },
      {
        kind: "customsearch#result",
        title: "Rafdo Search",
        htmlTitle: "<b>Rafdo Search</b>",
        link: "https://rafdo-search.vercel.app",
        displayLink: "rafdo-search.vercel.app",
        snippet: "Rafdo Search. Search the web with ease.",
        htmlSnippet: "Rafdo Search. Search the web with ease.",
        cacheId: "US-UIewrFroJ",
        formattedUrl: "https://rafdo-search.vercel.app",
        htmlFormattedUrl: "https://<b>rafdo-search</b>.vercel.app",
        pagemap: {
          metatags: [{}],
        },
      }
    )
    resultsItems.push(...oldResultsItems)
    resultsItems.splice(resultsItems.length - 2,
      2)
  }
  if (router.query.term.toLowerCase() === "mrrps" && (router.query.start === '0' || router.query.start == null)) {
    console.log('yes')
    let oldResultsItems = [...resultsItems]
    resultsItems = []
    resultsItems.push(
      {
        kind: "customsearch#result",
        title: "Mrrps - What the cool cats are doing",
        htmlTitle: "<b>Mrrps - What the cool cats are doing</b>",
        link: "https://mrrps.vercel.app",
        displayLink: "mrrps.vercel.app",
        snippet: "Social media that's what the cool cats are doing.",
        htmlSnippet: "Social media that's what the cool cats are doing.",
        cacheId: "US-UIewrFroJ",
        formattedUrl: "https://mrrps.vercel.app",
        htmlFormattedUrl: "https://<b>mrrps</b>.vercel.app",
        pagemap: {
          metatags: [{}],
        },
      },
    )
    resultsItems.push(...oldResultsItems)
    resultsItems.splice(resultsItems.length - 1,
      1)
  }

  const shouldShowMarty = (() => {
    switch (router.query.term.toLowerCase()) {
      case "cat": return true
      case "kitty": return true
      case "marty": return true
      case "kitten": return true
      case "martmart": return true
      case "mart mart": return true
      case "the martmart": return true
      case "the mart mart": return true
      default: return false
    }
  })()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Rafdo Search </title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      {/*header*/}

      <Header term={router.query.term} />
      
      {/*body*/}
      <SearchResults results={results} resultsItems={resultsItems} />
      {shouldShowMarty === true && (
        <img src="/images/marty.png" alt="The mart mart" className="absolute right-0 top-0" />
      )}
    </div>
  )
}

export default Search

export async function getServerSideProps(ctx) {
  const API_KEY = process.env.API_KEY
  const CONTEXT_KEY = process.env.CONTEXT_KEY

  const useDummyData = process.env.USE_DUMMY_DATA === "true" ? true : false //true for devlopment (mock results)
  const startIndex = ctx.query.start || "0"

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex}`
      ).then((response) => response.json())

  return {
    props: {
      results: data,
    },
  }
}
