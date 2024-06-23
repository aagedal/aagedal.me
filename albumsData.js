const albumsData = {
  category1: {
    Crime: {
      description:
        "Some photojournalistic work from crime scenes. Gain Map HDR images.",
      images: ["TRA04291.jpg", "TRA08965.jpg", "TRA08492.jpg", "TRA08992.jpg"],
    },
    Politics: {
      description: "People talking a lot.",
      images: ["TRA08026.jpg", "TRA02841.jpg", "TRA03388.jpg"],
    },
    Celebrities: {
      description: "Red carpets and pretty dresses.",
      images: [
        "TRA05798.jpg",
        "TRA06151.jpg",
        "TRA06447.jpg",
        "TRA07917.jpg",
        "TRA08510.jpg",
        "TRA07476.jpg",
      ],
    },
    Portraits: {
      description: "Pictures of people.",
      images: [
        "TRA02590.jpg",
        "TRA00048.jpg",
        "TRA02458.jpg",
        "TRA05487.jpg",
        "TRA07433.jpg",
        "TRA08748.jpg",
        "TRA09087.jpg",
      ],
    },
    Other: {
      description: "A random collection.",
      images: ["TRA02089.jpg", "TRA00743.jpg", "TRA02178.jpg"],
    },
  },
  category2: {
    Street: {
      description: "Some pictures from the street of Oslo.",
      images: [
        "TRA9435.jpg",
        "TRA08676.jpg",
        "TRA0229.jpg",
        "TRA07033.jpg",
        "TRA0957.jpg",
        "TRA0962.jpg",
        "TRA0977.jpg",
        "TRA1283.jpg",
        "TRA1286.jpg",
        "TRA1930.jpg",
        "TRA2137.jpg",
        "TRA03060.jpg",
        "TRA2139.jpg",
        "TRA1935.jpg",
        "TRA3809.jpg",
        "TRA8723.jpg",
        "TRA8748.jpg",
        "TRA9835.jpg",
        "TRA03100.jpg",
        "TRA01083.jpg",
        "TRA01667.jpg",
        "TRA08667.jpg",
        "TRA03434.jpg",
        "TRA09781.jpg",
        "TRA09039.jpg",
        "TRA07730.jpg",
        "TRA03937.jpg",
        "TRA03141.jpg",
        "TRA01088.jpg",
        "TRA0363.jpg",
        "TRA02076.jpg",
        "TRA04086.jpg",
        "TRA06243.jpg",
      ],
    },
    Parks: {
      description: "Some pictures from parks in Oslo.",
      images: [
        "TRA0271.jpg",
        "TRA1379.jpg",
        "TRA03956.jpg",
        "TRA01343.jpg",
        "TRA1975.jpg",
        "TRA1981.jpg",
        "TRA06838.jpg",
        "TRA06867.jpg",
      ],
    },
    Pride: {
      description: "Some pictures from Oslo Pride 2023.",
      images: [
        "TRA0086.jpg",
        "TRA0222.jpg",
        "TRA7939.jpg",
        "TRA8415.jpg",
        "TRA8668.jpg",
        "TRA9677.jpg",
        "TRA9879.jpg",
        "TRA9781.jpg",
        "TRA8142.jpg",
        "TRA9112.jpg",
      ],
    },
  },
  category3: {
    Svalbard: {
      description: "A work related trip to Longyearbyen, Svalbard.",
      images: [
        "TAG03451.jpg",
        "TAG03472.jpg",
        "TAG02358.jpg",
        "TAG02362.jpg",
        "TAG02919.jpg",
        "TAG02996.jpg",
        "TAG02276.jpg",
      ],
    },
    England: {
      description: "Some pictures from a vacation to England.",
      images: ["MG_0855.jpg", "MG_0786.jpg", "MG_0596.jpg", "MG_0857.jpg"],
    },
    Italy: {
      description: "Some pictures from vacation in Italy.",
      images: [
        "DSC7267.jpg",
        "DSC7000.jpg",
        "DSC7246.jpg",
        "DSC7142.jpg",
        "DSC7051.jpg",
        "DSC7174.jpg",
        "DSC7151.jpg",
        "DSC7256.jpg",
        "DSC7229.jpg",
        "DSC7144.jpg",
        "DSC7104.jpg",
        "DSC7012.jpg",
      ],
    },
    Molde: {
      description: "Some pictures from Molde, Norway.",
      images: [
        "DSC6523.jpg",
        "DSC6378.jpg",
        "TRA07500.jpg",
        "DSC6389.jpg",
        "TRA04991.jpg",
        "TRA09865.jpg",
      ],
    },
    Hvaler: {
      description: "Some pictures from Hvaler, Norway.",
      images: [
        "TRA05504.jpg",
        "TRA05445.jpg",
        "TRA05517.jpg",
        "TRA05542.jpg",
        "TRA08207.jpg",
      ],
    },
    "Planes and Transport": {
      description:
        "How did I get where I was going. By taking a lot of pictures to distract me from my fear of flying.",
      images: [
        "TRA04946.jpg",
        "DSC6989.jpg",
        "TRA07299.jpg",
        "DSC7310.jpg",
        "TRA00176.jpg",
        "TRA09843.jpg",
        "TRA09852.jpg",
        "TRA07306.jpg",
        "TRA05387.jpg",
        "TRA00089.jpg",
        "TRA07644.jpg",
        "TRA00200.jpg",
        "TRA1088.jpg",
        "TRA8730.jpg",
        "TRA00099.jpg",
        "TRA09810.jpg",
        "TRA08948.jpg",
        "TRA08971.jpg",
        "TRA07647.jpg",
        "TRA00213.jpg",
        "TRA00209.jpg",
        "TRA00208.jpg",
        "TRA00196.jpg",
        "TRA9396.jpg",
      ],
    },
  },
  category4: {
    Food: {
      description: "Things I've made or eaten. Probably both.",
      images: ["TRA00131.jpg", "TRA00075.jpg", "TRA07988.jpg"],
    },
    "Animals and Insects": {
      description: "Living non-human (conscious?) creatures.",
      images: [
        "TRA02266.jpg",
        "DSC6788.jpg",
        "TRA00517.jpg",
        "DSC7185.jpg",
        "TRA1977.jpg",
        "TRA00004.jpg",
        "DSC00587.jpg",
        "TRA00481.jpg",
        "TRA09903.jpg",
      ],
    },
    "Body Art": {
      description:
        "Body and soul, in artistic form. May be somewhat NSFW, but probably not.",
      images: ["TRA9677.jpg", "TRA9333.jpg", "TRA9711.jpg"],
    },
    Me: {
      description: "Pictures of myself; Truls Aagedal.",
      images: [
        "TRA00298.jpg",
        "DSC4756.jpg",
        "TRA00981.jpg",
        "DSC4541.jpg",
        "DSC4641.jpg",
        "DSC8478.jpg",
        "DSC7021.jpg",
        "DSC08342.jpg",
        "DSC3617.jpg",
        "TAG00125.jpg",
      ],
    },
    Other: {
      description: "Asorted stuff. WIP. Testing. Not sure where to put these.",
      images: ["TRA0357.jpg", "TRA2069.jpg"],
    },
  },
};

// Export the albumsData object
export default albumsData;
