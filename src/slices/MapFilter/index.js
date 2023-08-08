import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import Map from "../../components/Map";
import { useEffect, useState } from "react";

function filterGroup (items, option) {
  var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  const result = groupBy(items, option);
  return result
}

function notEmpty (arr) {
  if (arr && arr.length > 0) {
    return true
  } else {
    return false
  }
}

function FilterDropdown ({options, open, setOpen, setSelected, handleFilter }) {

  
  return (
  <ul className={`${open ? "flex" : "hidden"} flex flex-col border-0 rounded-b-md bg-[#C4C4C466] w-full px-5 font-montserrat text-sm md:text-lg`}>
    {options.map((option) => (
    <li key={option} onClick={() => {setSelected(option); setOpen(false)}} className="py-3">{option}</li>
    ))}
  </ul>
)}

function DangerAllert ({alert, text}) {
  return (
    <div className={`${alert ? "block" : "hidden"} mx-auto mt-12 px-5 md:px-0 md:w-[608px] xl:w-[624px]`}>
    <div className={`flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full`} role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    {text}
  </div>
</div>
</div>
  )
}


const MapFilter = ({ slice }) => {

  const firstFilter = filterGroup(slice.items, "first_filter_option");
  const secondFilter = filterGroup(slice.items, "second_filter_option");
  const firstFilterOptions = Object.keys(firstFilter);
  const secondFilterOptions = Object.keys(secondFilter);
  firstFilterOptions.unshift(slice.primary.filter_placeholder);
  secondFilterOptions.unshift(slice.primary.filter_placeholder);

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const [firstSelected, setFirstSelected] = useState(slice.primary.filter_placeholder);
  const [secondSelected, setSecondSelected] = useState(slice.primary.filter_placeholder);

  const [details, setDetails] = useState(slice.items);

  const [alert, setAlert] = useState(false);

  const closeAlert = () => {
    setTimeout(() => {
        setAlert(false)
    }, 2000)
  };



  useEffect(() => {

 if (firstSelected === slice.primary.filter_placeholder) {
      if (secondSelected === slice.primary.filter_placeholder) {
        setDetails(slice.items);
      } else {
        notEmpty(secondFilter[secondSelected]) ?
        setDetails(secondFilter[secondSelected]) :
        (setDetails(slice.items), setAlert(true), setFirstSelected(slice.primary.filter_placeholder), setSecondSelected(slice.primary.filter_placeholder), closeAlert());
      }
    } else {
        if (secondSelected === slice.primary.filter_placeholder) {
          notEmpty(firstFilter[firstSelected]) ?
          setDetails(firstFilter[firstSelected]) :
          (setDetails(slice.items), setAlert(true), setFirstSelected(slice.primary.filter_placeholder), setSecondSelected(slice.primary.filter_placeholder), closeAlert());
        } else {
          let result = filterGroup(firstFilter[firstSelected], "second_filter_option");
          notEmpty(result[secondSelected]) ?
          setDetails(result[secondSelected]) :
          (setDetails(slice.items), setAlert(true), setFirstSelected(slice.primary.filter_placeholder), setSecondSelected(slice.primary.filter_placeholder), closeAlert());
        }
      }

  },[firstSelected, secondSelected]);

  return (
    <section>
      <div className="flex flex-col gap-12 px-5 w-full md:px-16 xl:px-20 md:flex-row md:justify-center">
        <div className="md:w-[288px]">
          <p className="mb-5 text-orange">{slice.primary.filter_1}</p>
          <button onClick={() => setOpenFirst((c) => !c)} className={`flex flew-row justify-between items-center gap-8 border-0 ${openFirst ? "rounded-t-md" : "rounded-md"} bg-[#C4C4C466] w-full h-9 px-5 font-montserrat text-sm md:text-lg md:h-10 xl:h-11`}>
            <p className={`w-full text-left ${openFirst ? "border-b border-night" : ""}`}>{firstSelected}</p>
            {prismic.isFilled.image(slice.primary.open) && (
              <PrismicNextImage
                field={slice.primary.open}
                sizes="100vw"
                className="w-3.5 h-auto"
                />
            )}
          </button>
          <FilterDropdown options={firstFilterOptions} open={openFirst} setSelected={setFirstSelected} setOpen={setOpenFirst}  />
        </div>
        <div className="md:w-[288px]">
          <p className="mb-5 text-orange">{slice.primary.filter_2}</p>
          <button onClick={() => setOpenSecond((c) => !c)} className={`flex flew-row justify-between items-center gap-8 border-0 ${openSecond ? "rounded-t-md" : "rounded-md"} bg-[#C4C4C466] w-full h-9 px-5 font-montserrat text-sm md:text-lg md:h-10 xl:h-11`}>
            <p className={`w-full text-left ${openSecond ? "border-b border-night" : ""}`}>{secondSelected}</p>
            {prismic.isFilled.image(slice.primary.open) && (
              <PrismicNextImage
                field={slice.primary.open}
                sizes="100vw"
                className="w-3.5 h-auto"
                />
            )}
          </button>
          <FilterDropdown options={secondFilterOptions} open={openSecond} setSelected={setSecondSelected} setOpen={setOpenSecond}  />
        </div>
      </div>

      <DangerAllert alert={alert} text={slice.primary.alert_message} />

      <div className={`${(details !== slice.items) ? "flex justify-center py-20" : "hidden"}`}>
        <div className="flex flex-col w-[600px] xl:w-[820px] gap-12">
          {details.map((info) => (
          <div key={info.name} className="flex flex-row justify-between items-center w-full">
              <span className="flex flex-row items-center gap-12">
                {prismic.isFilled.image(info.logo) && (
                  <PrismicNextImage
                  field={info.logo}
                  sizes="100vw"
                  className="w-24 h-auto"
                  />
                ) || (
                  <PrismicNextImage
                  field={slice.primary.logo_placeholder}
                  sizes="100vw"
                  className="w-24 h-auto"
                  />
                )}
                <p className="font-montserrat font-medium text-2xl">{info.name}</p>
              </span>
              <span className="font-montserrat text-lg text-left w-56 xl:w-72">
                <p>{prismic.isFilled.keyText(info.phone) && (info.phone)}{prismic.isFilled.keyText(info.phone) && (`, ${info.phone}`)}</p>
                <p>{prismic.isFilled.keyText(info.address) && (info.address)}</p>
              </span>
          </div>
        ))}</div>
      </div>
      <Map details={details} pin={slice.primary.pin} activePin={slice.primary.active_pin} logoPlaceholder={slice.primary.logo_placeholder} />
    </section>
  );
};

export default MapFilter;
