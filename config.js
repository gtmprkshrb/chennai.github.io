const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZ3RtcHJrc2hyYiIsImEiOiJjamZ0bXBqZnMxd3E5MnduejVjdGpuN2R4In0.vvrRpEdZWNwaKUO6vmgRHw",
  CSV: "https://docs.google.com/spreadsheets/d/1vo0Lh0x8VkqB9jlZYpPHptJiuLx9NJzoaAqAV0WpOEU/gviz/tq?tqx=out:csv&sheet=data",
  center: [80.0689245, 13.0474878],
  zoom: 10,
  title: "City Dashboard",
  description:
    "Everything in your neighbourhood in one place for the city of Chennai! Ward level analytics is coming soon",
  sideBarInfo: ["ShopName", "Description"],
  popupInfo: ["Description"],
  filters: [

    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Environment-Civic Data",
        "Civic Infrastructure"
      ],
    },
    {
      type: "dropdown",
      title: "Sub Category: ",
      columnHeader: "SubCategory",
      listItems: [
        "Flooding",
        "Not_Flooding",
        "COVID_Testing"
      ],
    }
  ],
};
