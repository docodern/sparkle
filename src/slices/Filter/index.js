/**
 * @typedef {import("@prismicio/client").Content.FilterSlice} FilterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FilterSlice>} FilterProps
 * @param {FilterProps}
 */
const Filter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for filter (variation: {slice.variation}) Slices
    </section>
  );
};

export default Filter;
