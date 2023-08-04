import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";


function Map({ address, pin }) {

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
            version: "weekly",
          });

        const position = { lat: 56.953895, lng: 24.135460 }
          
          loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
            const map = new Map(document.getElementById("map"), {
              center: position,
              zoom: 14,
              disableDefaultUI: true,
              mapId: "7e7caf56a6b8c51e",
            });

            const pinImg = document.createElement("img");

            pinImg.src = pin.url;

            const glyphSvgMarkerView = new AdvancedMarkerElement({
              map,
              position: position,
              content: pinImg,
            });
          });
    }, []);

  
return (
    <div id="map" className="h-[606px] w-screen my-32"></div>
)
}
export default Map;