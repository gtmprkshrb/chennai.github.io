const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZ3RtcHJrc2hyYiIsImEiOiJjamZ0bXBqZnMxd3E5MnduejVjdGpuN2R4In0.vvrRpEdZWNwaKUO6vmgRHw",
  CSV: "https://docs.google.com/spreadsheets/d/1vo0Lh0x8VkqB9jlZYpPHptJiuLx9NJzoaAqAV0WpOEU/gviz/tq?tqx=out:csv&sheet=data",
  center: [80.0689243, 13.0478223],
  zoom: 10,
  title: "Neighbourhood Dashboard",
  description:
    "Everything in your neighbourhood in one place!",
  sideBarInfo: ["ShopName", "Pincode", "Description", "Tags"],
  popupInfo: ["ShopName"],
  filters: [ 
    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Govt Services",
        "Environment-Civic Data"
      ],
    },
    {
      type: "dropdown",
      title: "Sub Category: ",
      columnHeader: "SubCategory",
      listItems: [
        "",
        "Others",
        "Defence Hospitals",
        "SDH/CHC",
        "Corporators",
        "MLA",
        "Waste",
        "Citizen Services",
        "Electricity",
        "Campaigns",
        "Issue Reported",
        "PHCs",
        "Volunteers",
        "AQM"
      ],
    }
  ],
};
