import Head from "next/head"
import Header from "../components/Header"
import HeaderOptions from "../components/HeaderOptions"
import HeaderOption from "../components/HeaderOption"
import Response from "../Response"
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"
import PaginationButtons from "../components/PaginationButtons"

function Search({ results, images }) {
  const router = useRouter()
  let resultsItems = results.items
  console.log(router.query.term.toLowerCase())
  if (images !== true) {

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
        },
        {
          kind: "customsearch#result",
          title: "Rafdo Games",
          htmlTitle: "<b>Rafdo Games</b>",
          link: "https://gamesfromrafdo.weebly.com",
          displayLink: "gamesfromrafdo.weebly.com",
          snippet: "Games by Rafdo. Rafdo makes some fun games for you guys :D",
          htmlSnippet: "Games by Rafdo. Rafdo makes some fun games for you guys :D",
          cacheId: "US-UIewrFroJ",
          formattedUrl: "https://gamesfromrafdo.weebly.com",
          htmlFormattedUrl: "https://<b>gamesfromrafdo</b>.weebly.com",
          pagemap: {
            metatags: [{}],
          },
        },
        {
          kind: "customsearch#result",
          title: "ImageQuest",
          htmlTitle: "<b>ImageQuest</b>",
          link: "https://imagequest.rafdo.rf.gd",
          displayLink: "imagequest.rafdo.rf.gd",
          snippet: "A fun game by Rafdo.",
          htmlSnippet: "A fun game by Rafdo.",
          cacheId: "US-UIewrFroJ",
          formattedUrl: "https://imagequest.rafdo.rf.gd",
          htmlFormattedUrl: "https://<b>imagequest.rafdo</b>.rf.gd",
          pagemap: {
            metatags: [{}],
          },
        },
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
        {
          kind: "customsearch#result",
          title: "Wikiopedia Ianna",
          htmlTitle: "<b>Wikiopedia Ianna</b>",
          link: "https://wikiopidia.weebly.com",
          displayLink: "wikiopidia.weebly.com",
          snippet: "Wikiopidia Ianna. The free encyclopedia by Rafdo.",
          htmlSnippet: "Wikiopidia Ianna. The free encyclopedia by Rafdo.",
          cacheId: "US-UIewrFroJ",
          formattedUrl: "https://wikiopidia.weebly.com",
          htmlFormattedUrl: "https://<b>wikiopidia</b>.weebly.com",
          pagemap: {
            metatags: [{}],
          },
        },
      )
      resultsItems.push(...oldResultsItems)
      resultsItems.splice(resultsItems.length - 6,
        6)
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
  
    if (router.query.term.toLowerCase() === "imagequest" && (router.query.start === '0' || router.query.start == null)) {
      console.log('yes')
      let oldResultsItems = [...resultsItems]
      resultsItems = []
      resultsItems.push(
        {
          kind: "customsearch#result",
          title: "ImageQuest",
          htmlTitle: "<b>ImageQuest</b>",
          link: "https://imagequest.rafdo.rf.gd",
          displayLink: "imagequest.rafdo.rf.gd",
          snippet: "A fun game by Rafdo.",
          htmlSnippet: "A fun game by Rafdo.",
          cacheId: "US-UIewrFroJ",
          formattedUrl: "https://imagequest.rafdo.rf.gd",
          htmlFormattedUrl: "https://<b>imagequest.rafdo</b>.rf.gd",
          pagemap: {
            metatags: [{}],
          },
        },
      )
      resultsItems.push(...oldResultsItems)
      resultsItems.splice(resultsItems.length - 1,
        1)
    }
  }

  const shouldShowMarty = (() => {
    if (images === true) return false
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
  const shouldShowTheEarth = (() => {
    if (images === true) return false
    switch (router.query.term.toLowerCase()) {
      case "earth": return true
      case "the earth": return true
      case "our blue planet": return true
      default: return false
    }
  })()
  const shouldShowPizza = (() => {
    if (images === true) return false
    switch (router.query.term.toLowerCase()) {
      case "pizza": return true
      case "pizza slice": return true
      case "costco restaurant": return true
      case "kirkland restaurant": return true
      default: return false
    }
  })()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Rafdo Search</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      {/*header*/}

      <Header term={router.query.term} />
      
      {/*body*/}
      <SearchResults results={results} resultsItems={resultsItems} images={images} />
      {shouldShowMarty === true && (
        <img src="/images/marty.png" alt="The mart mart" className="absolute right-0 top-0" />
      )}
      {shouldShowTheEarth === true && (
        <img src="/images/earth.png" alt="Our Blue Planet" className="absolute right-0 top-7" width="380" />
      )}
      {shouldShowPizza === true && (
        <img src="/images/pizza.png" alt="Pizza slice" className="absolute right-0 top-7" width="500" />
      )}
    </div>
  )
}

export default Search

export async function getServerSideProps(ctx) {
  const API_KEY = process.env.API_KEY
  const CONTEXT_KEY = process.env.CONTEXT_KEY

  const useDummyData = process.env.USE_DUMMY_DATA === "true" ?false : false //true for devlopment (mock results)
  const startIndex = ctx.query.start || "0"
  const images = ctx.query.images === "yes"

  let data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex}${ctx.query.images === "yes" ? "&searchType=image" : ""}`
      ).then((response) => response.json())

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
      results: data,
      images: images === true ? true : false
    },
  }
}
