import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";


function Map({ details, pin, activePin, logoPlaceholder }) {

  const zoomControls = useRef();
  const zoomIn = useRef();
  const zoomOut = useRef();

  
    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
            version: "weekly",
          });
          
          loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
            const { LatLng } = await google.maps.importLibrary("core");
            const center = new LatLng(details[0].geolocation.latitude, details[0].geolocation.longitude);
            const map = new Map(document.getElementById("map"), {
              center,
              zoom: 11,
              disableDefaultUI: true,
              mapId: "7e7caf56a6b8c51e",
            });

            function initZoomControl(map) {
              zoomIn.current.onclick = function () {
                map.setZoom(map.getZoom() + 1);
              };
            
              zoomOut.current.onclick = function () {
                map.setZoom(map.getZoom() - 1);
              };
            
              map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
                zoomControls.current,
              );
            };

            initZoomControl(map);

            const pinImg = document.createElement("img");

            pinImg.src = pin.url;

            function toggleHighlight(markerView, info) {
              if (markerView.content.classList.contains("highlight")) {
                markerView.content.classList.remove("highlight");
                markerView.zIndex = null;
              } else {
                markerView.content.classList.add("highlight");
                markerView.zIndex = 1;
              }
            };

            function buildContent(info) {
              const content = document.createElement("div");
            
              content.classList.add("popUp");
              content.innerHTML = `
                <div>
                    <img class="icon" src="${pin.url}"></img>
                    <img class="activeIcon" src="${activePin.url}"></img>
                </div>
                <div class="details">
                    <img class="logo" src="${info.logo.url ? info.logo.url : logoPlaceholder.url}"></img>
                    <p class="name">${info.name}</p>
                    <span class="info">
                    <p class="phone">${info.phone} ${info.phone_second ? ", "+info.phone_second : ""}</p>
                    <p>${info.email}</p>
                    <p>${info.address}</p>
                    </span>
                </div>
              `;
              return content;
            };
            

            for (const info of details) {
              const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
                map,
                content: buildContent(info),
                position: {
                  lat: info.geolocation.latitude,
                  lng: info.geolocation.longitude
                },
                title: info.name,
              });
          
              AdvancedMarkerElement.addListener("click", () => {
                toggleHighlight(AdvancedMarkerElement, info);
              });
            };
    
          });
    }, [details, pin, activePin, logoPlaceholder]);

  
return (
  <>
    <div id="map" className="relative h-[606px] w-screen my-32 md:h-[812px] xl:h-[648px]"></div>
    <div style={{display: "none"}}>
      <div ref={zoomControls} className="controls zoom-control">
        <button ref={zoomIn} className="zoom-control-in" title="Zoom In">+</button>
        <button ref={zoomOut} className="zoom-control-out" title="Zoom Out">−</button>
      </div>
    </div>
    </>
)
}

export default Map;