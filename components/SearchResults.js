import PaginationButtons from "./PaginationButtons";
import Footer from "./Footer";
function SearchResults({ results, resultsItems, images, serp }) {
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  console.log(serp);
  return (
    <div>
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans">
        <p className="text-gray-500 text-md mb-5 mt-3">
          {!serp
            ? images === false
              ? `About ${results.searchInformation?.formattedTotalResults} results (${results.searchInformation?.formattedSearchTime} seconds) (google cse api)`
              : `The reason only 10 images are shown at a time is because of the limitations of the API.`
            : `About ${results.search_information?.total_results} results (${results.search_information?.time_taken_displayed} seconds) (SerpAPI)`}
          <br />
        </p>
        <div className={images ? "flex flex-row" : ""}>
          {resultsItems?.map((result) =>
            images !== true ? (
              <div key={result.link} className="max-w-xl mb-8 font-sans">
                <div className="group">
                  <a
                    href={result.link}
                    className="text-sml font-OpenSans text-stone-900"
                  >
                    {result.formattedUrl}
                  </a>
                  <a href={result.link}>
                    <h2
                      className="truncate 
           text-xl text-blue-700 group-hover:underline font-OpenSans"
                    >
                      {result.title}
                    </h2>
                  </a>
                </div>
                <p className="line-clamp-2 text-gray-900 font-OpenSans">
                  {result.snippet}
                </p>
              </div>
            ) : (
              <>
                <a href={result.link} className="px-1">
                  <img
                    src={result.link}
                    alt={result.snippet}
                    className="border-2 border-black"
                  ></img>
                </a>
              </>
            )
          )}
        </div>

        <PaginationButtons />
      </div>

      <Footer />
    </div>
  );
}
<div>
  <Footer />
</div>;

export default SearchResults;
