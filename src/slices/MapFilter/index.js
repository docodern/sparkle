import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import Map from "../../components/Map";
import { useState } from "react";

function FilterGroup (items, option) {
  var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  const result = groupBy(items, option);
  return result
}

function FilterDropdown ({options, open}) {
  return (
  <ul className={`${open ? "flex" : "hidden"} flex flex-col border-0 rounded-b-md bg-[#C4C4C466] w-full px-5 font-montserrat text-sm md:w-[46%] md:text-lg md:h-10 xl:h-11`}>
    {options.map((option) => (
      <li key={option} className="py-3">{option}</li>
    ))}
  </ul>
)}


const MapFilter = ({ slice }) => {

  const firstFilter = FilterGroup(slice.items, "first_filter_option");
  const secondFilter = FilterGroup(slice.items, "second_filter_option");
  const firstFilterOptions = Object.keys(firstFilter);
  const secondFilterOptions = Object.keys(secondFilter);

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  return (
    <section>
      <div className="flex flex-col gap-12 px-5 md:px-16 xl:px-20">
        <div>
          <p className="mb-5 text-orange">{slice.primary.filter_1}</p>
          <button onClick={() => setOpenFirst((c) => !c)} className={`flex flew-row justify-between items-center gap-8 border-0 ${openFirst ? "rounded-t-md" : "rounded-md"} bg-[#C4C4C466] w-full h-9 px-5 font-montserrat text-sm md:w-[46%] md:text-lg md:h-10 xl:h-11`}>
            <p className={`w-full text-left ${openFirst ? "border-b border-night" : ""}`}>{slice.primary.filter_placeholder}</p>
            {prismic.isFilled.image(slice.primary.open) && (
              <PrismicNextImage
                field={slice.primary.open}
                sizes="100vw"
                className="w-3.5 h-auto"
                />
            )}
          </button>
          <FilterDropdown options={firstFilterOptions} open={openFirst} />
        </div>
        <div>
          <p className="mb-5 text-orange">{slice.primary.filter_2}</p>
          <button onClick={() => setOpenSecond((c) => !c)} className={`flex flew-row justify-between items-center gap-8 border-0 ${openSecond ? "rounded-t-md" : "rounded-md"} bg-[#C4C4C466] w-full h-9 px-5 font-montserrat text-sm md:w-[46%] md:text-lg md:h-10 xl:h-11`}>
            <p className={`w-full text-left ${openSecond ? "border-b border-night" : ""}`}>{slice.primary.filter_placeholder}</p>
            {prismic.isFilled.image(slice.primary.open) && (
              <PrismicNextImage
                field={slice.primary.open}
                sizes="100vw"
                className="w-3.5 h-auto"
                />
            )}
          </button>
          <FilterDropdown options={secondFilterOptions} open={openSecond} />
        </div>
      </div>
      <Map address="1600 Amphitheatre Parkway, Mountain View, CA" pin={slice.primary.pin} />
    </section>
  );
};

export default MapFilter;
