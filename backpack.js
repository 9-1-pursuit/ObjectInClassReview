const backpack = {
  color: "green",
  contents: [
    "laptop",
    "paper",
    "phone",
    { wallet: ["money", "id", ["mastercard", "visa card", "discover card"]] },
    {
      pockets: {
        outer: ["metrocard", "tissues"],
        inner: {
          outer: "ruler",
          inner: ["dental floss", { mintFlavor: "peppermint", number: 33 }],
        },
      },
    },
  ],
  zipIt() {
    return "it is zipped";
  },
  unZipIt() {
    console.log("some items fell out");
    return {
      pickUpItems() {
        return ["lip balm", "comb", "38 cents"];
      },
    };
  },
};

module.exports = backpack;
