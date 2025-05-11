import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const selectGLRef = useRef(null)
  const serpref = useRef(null)

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    let gl = selectGLRef.current.value
    let serp = serpref.current.value === 'serp'
    let tril = serpref.current.value === 'trillionz'

    if (!term) return;
    if (!gl) gl = 'us'

    router.push(`/${tril ? 'trillionz' : ''}${serp ? 'searchs' : 'search'}${tril ? '.html' : ''}?${tril ? 'q' : 'term'}=${term}&gl=${gl}&sourceid=website`);
  };

  const imFeelingLucky = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/imfeelinglucky?term=${term}&start=0`);
  };


  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Rafdo Search</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      {/* header */}

      <header className="flex w-full p-5 justify-between text-sm text-gray-800">
        {/*left section*/}
        <div className="flex space-x-4 items-center font-Ubuntu">
          <a href="https://rafdo.vercel.app">
            <p className="link">Home</p>
          </a>
        </div>

        {/*right section*/}
        <div className="flex space-x-4 font-Ubuntu items-center">
          <a href="https://rafdo.vercel.app/games/">
            <p className="link">Games</p>
          </a>

          {/*Icons*/}
          <a href="https://rafdo.vercel.app/products"><ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" /></a>


        </div>
      </header>

      {/*body*/}
      <form className="flex flex-col items-center pt-3 flex-grow w-4/5">
        <Image
          src="/images/logo.png"
          width={300}
          height={50}
          priority
          alt="Rafdo"
        />
        <br />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-700" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />

        </div>
        
        <select name="gl" id="gl" ref={selectGLRef}>
  <option value="us">United States</option>
  <option value="gb">United Kingdom</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
  <option value="de">Germany</option>
  <option value="fr">France</option>
  <option value="in">India</option>
  <option value="jp">Japan</option>
  <option value="cn">China</option>
  <option value="ad">Andorra</option>
  <option value="ae">United Arab Emirates</option>
  <option value="af">Afghanistan</option>
  <option value="ag">Antigua and Barbuda</option>
  <option value="ai">Anguilla</option>
  <option value="al">Albania</option>
  <option value="am">Armenia</option>
  <option value="an">Netherlands Antilles</option>
  <option value="ao">Angola</option>
  <option value="aq">Antarctica</option>
  <option value="ar">Argentina</option>
  <option value="as">American Samoa</option>
  <option value="at">Austria</option>
  <option value="aw">Aruba</option>
  <option value="az">Azerbaijan</option>
  <option value="ba">Bosnia and Herzegovina</option>
  <option value="bb">Barbados</option>
  <option value="bd">Bangladesh</option>
  <option value="be">Belgium</option>
  <option value="bf">Burkina Faso</option>
  <option value="bg">Bulgaria</option>
  <option value="bh">Bahrain</option>
  <option value="bi">Burundi</option>
  <option value="bj">Benin</option>
  <option value="bl">Saint Barthélemy</option>
  <option value="bm">Bermuda</option>
  <option value="bn">Brunei Darussalam</option>
  <option value="bo">Bolivia</option>
  <option value="bq">Bonaire, Sint Eustatius and Saba</option>
  <option value="br">Brazil</option>
  <option value="bs">Bahamas</option>
  <option value="bt">Bhutan</option>
  <option value="bv">Bouvet Island</option>
  <option value="bw">Botswana</option>
  <option value="by">Belarus</option>
  <option value="bz">Belize</option>
  <option value="ca">Canada</option>
  <option value="cc">Cocos (Keeling) Islands</option>
  <option value="cd">Congo, the Democratic Republic of the</option>
  <option value="cf">Central African Republic</option>
  <option value="cg">Congo</option>
  <option value="ch">Switzerland</option>
  <option value="ci">Cote D&apos;ivoire</option>
  <option value="ck">Cook Islands</option>
  <option value="cl">Chile</option>
  <option value="cm">Cameroon</option>
  <option value="cn">China</option>
  <option value="co">Colombia</option>
  <option value="cr">Costa Rica</option>
  <option value="cu">Cuba</option>
  <option value="cv">Cape Verde</option>
  <option value="cw">Curaçao</option>
  <option value="cx">Christmas Island</option>
  <option value="cy">Cyprus</option>
  <option value="cz">Czech Republic</option>
  <option value="de">Germany</option>
  <option value="dj">Djibouti</option>
  <option value="dk">Denmark</option>
  <option value="dm">Dominica</option>
  <option value="do">Dominican Republic</option>
  <option value="dz">Algeria</option>
  <option value="ec">Ecuador</option>
  <option value="ee">Estonia</option>
  <option value="eg">Egypt</option>
  <option value="eh">Western Sahara</option>
  <option value="es">Spain</option>
  <option value="et">Ethiopia</option>
  <option value="fi">Finland</option>
  <option value="fj">Fiji</option>
  <option value="fm">Micronesia, Federated States of</option>
  <option value="fo">Faroe Islands</option>
  <option value="fr">France</option>
  <option value="ga">Gabon</option>
  <option value="gb">United Kingdom</option>
  <option value="gd">Grenada</option>
  <option value="ge">Georgia</option>
  <option value="gf">French Guiana</option>
  <option value="gg">Guernsey</option>
  <option value="gh">Ghana</option>
  <option value="gi">Gibraltar</option>
  <option value="gl">Greenland</option>
  <option value="gm">Gambia</option>
  <option value="gn">Guinea</option>
  <option value="gp">Guadeloupe</option>
  <option value="gq">Equatorial Guinea</option>
  <option value="gr">Greece</option>
  <option value="gs">South Georgia and the South Sandwich Islands</option>
  <option value="gt">Guatemala</option>
  <option value="gu">Guam</option>
  <option value="gw">Guinea-Bissau</option>
  <option value="gy">Guyana</option>
  <option value="hk">Hong Kong</option>
  <option value="hm">Heard Island and Mcdonald Islands</option>
  <option value="hn">Honduras</option>
  <option value="hr">Croatia</option>
  <option value="ht">Haiti</option>
  <option value="hu">Hungary</option>
  <option value="id">Indonesia</option>
  <option value="ie">Ireland</option>
  <option value="il">Israel</option>
  <option value="im">Isle of Man</option>
  <option value="in">India</option>
  <option value="io">British Indian Ocean Territory</option>
  <option value="iq">Iraq</option>
  <option value="ir">Iran, Islamic Republic of</option>
  <option value="is">Iceland</option>
  <option value="it">Italy</option>
  <option value="je">Jersey</option>
  <option value="jm">Jamaica</option>
  <option value="jo">Jordan</option>
  <option value="jp">Japan</option>
  <option value="ke">Kenya</option>
  <option value="kg">Kyrgyzstan</option>
  <option value="kh">Cambodia</option>
  <option value="ki">Kiribati</option>
  <option value="km">Comoros</option>
  <option value="kn">Saint Kitts and Nevis</option>
  <option value="kp">Korea, Democratic People&apos;s Republic of</option>
  <option value="kr">Korea, Republic of</option>
  <option value="kw">Kuwait</option>
  <option value="ky">Cayman Islands</option>
  <option value="kz">Kazakhstan</option>
  <option value="la">Lao People&apos;s Democratic Republic</option>
  <option value="lb">Lebanon</option>
  <option value="lc">Saint Lucia</option>
  <option value="li">Liechtenstein</option>
  <option value="lk">Sri Lanka</option>
  <option value="lr">Liberia</option>
  <option value="ls">Lesotho</option>
  <option value="lt">Lithuania</option>
  <option value="lu">Luxembourg</option>
  <option value="lv">Latvia</option>
  <option value="ly">Libyan Arab Jamahiriya</option>
  <option value="ma">Morocco</option>
  <option value="mc">Monaco</option>
  <option value="md">Moldova, Republic of</option>
  <option value="me">Montenegro</option>
  <option value="mf">Saint Martin</option>
  <option value="mg">Madagascar</option>
  <option value="mh">Marshall Islands</option>
  <option value="mk">Macedonia</option>
  <option value="ml">Mali</option>
  <option value="mm">Myanmar</option>
  <option value="mn">Mongolia</option>
  <option value="mo">Macao</option>
  <option value="mp">Northern Mariana Islands</option>
  <option value="mq">Martinique</option>
  <option value="mr">Mauritania</option>
  <option value="ms">Montserrat</option>
  <option value="mt">Malta</option>
  <option value="mu">Mauritius</option>
  <option value="mv">Maldives</option>
  <option value="mw">Malawi</option>
  <option value="mx">Mexico</option>
  <option value="my">Malaysia</option>
  <option value="mz">Mozambique</option>
  <option value="na">Namibia</option>
  <option value="nc">New Caledonia</option>
  <option value="ne">Niger</option>
  <option value="nf">Norfolk Island</option>
  <option value="ng">Nigeria</option>
  <option value="ni">Nicaragua</option>
  <option value="nl">Netherlands</option>
  <option value="no">Norway</option>
  <option value="np">Nepal</option>
  <option value="nr">Nauru</option>
  <option value="nu">Niue</option>
  <option value="nz">New Zealand</option>
  <option value="om">Oman</option>
  <option value="pa">Panama</option>
  <option value="pe">Peru</option>
  <option value="pf">French Polynesia</option>
  <option value="pg">Papua New Guinea</option>
  <option value="ph">Philippines</option>
  <option value="pk">Pakistan</option>
  <option value="pl">Poland</option>
  <option value="pm">Saint Pierre and Miquelon</option>
  <option value="pn">Pitcairn Islands</option>
  <option value="pr">Puerto Rico</option>
  <option value="pt">Portugal</option>
  <option value="pw">Palau</option>
  <option value="py">Paraguay</option>
  <option value="qa">Qatar</option>
  <option value="re">Réunion</option>
  <option value="ro">Romania</option>
  <option value="rs">Serbia</option>
  <option value="ru">Russian Federation</option>
  <option value="rw">Rwanda</option>
  <option value="sa">Saudi Arabia</option>
  <option value="sb">Solomon Islands</option>
  <option value="sc">Seychelles</option>
  <option value="sd">Sudan</option>
  <option value="se">Sweden</option>
  <option value="sg">Singapore</option>
  <option value="sh">Saint Helena</option>
  <option value="si">Slovenia</option>
  <option value="sj">Svalbard and Jan Mayen</option>
  <option value="sk">Slovakia</option>
  <option value="sl">Sierra Leone</option>
  <option value="sm">San Marino</option>
  <option value="sn">Senegal</option>
  <option value="so">Somalia</option>
  <option value="sr">Suriname</option>
  <option value="ss">South Sudan</option>
  <option value="st">São Tomé and Príncipe</option>
  <option value="sv">El Salvador</option>
  <option value="sy">Syrian Arab Republic</option>
  <option value="sz">Eswatini</option>
  <option value="tc">Turks and Caicos Islands</option>
  <option value="td">Chad</option>
  <option value="tf">French Southern Territories</option>
  <option value="tg">Togo</option>
  <option value="th">Thailand</option>
  <option value="tj">Tajikistan</option>
  <option value="tk">Tokelau</option>
  <option value="tl">Timor-Leste</option>
  <option value="tm">Turkmenistan</option>
  <option value="tn">Tunisia</option>
  <option value="to">Tonga</option>
  <option value="tr">Turkey</option>
  <option value="tt">Trinidad and Tobago</option>
  <option value="tv">Tuvalu</option>
  <option value="tz">Tanzania</option>
  <option value="ua">Ukraine</option>
  <option value="ug">Uganda</option>
  <option value="um">United States Minor Outlying Islands</option>
  <option value="us">United States</option>
  <option value="uy">Uruguay</option>
  <option value="uz">Uzbekistan</option>
  <option value="va">Holy See</option>
  <option value="vc">Saint Vincent and the Grenadines</option>
  <option value="ve">Venezuela</option>
  <option value="vg">British Virgin Islands</option>
  <option value="vi">United States Virgin Islands</option>
  <option value="vn">Viet Nam</option>
  <option value="vu">Vanuatu</option>
  <option value="wf">Wallis and Futuna</option>
  <option value="ws">Samoa</option>
  <option value="ye">Yemen</option>
  <option value="yt">Mayotte</option>
  <option value="za">South Africa</option>
  <option value="zm">Zambia</option>
  <option value="zw">Zimbabwe</option>
</select>
<select name="serp" id="serp" ref={serpref}>
  <option value="serp">API 1 (SerpAPI)</option>
  <option value="cse">API 2 (Google CSE API)</option>
 {/* <option value="trillionz">API 3 (Google CSE Embed)</option>*/}

</select>
<a href="/why.html" className="text-blue-500 text-underline">Why are there two APIs?</a>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
          <button onClick={search} className="btn">
            Search
          </button>

          <button onClick={imFeelingLucky} className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
