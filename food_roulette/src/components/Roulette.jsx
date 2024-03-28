import { useState } from "react";

import { Wheel } from "react-custom-roulette";

//MULTISPIN
function Roulette() {
  //recipes
  const data = [{ option: "0" }, { option: "1" }, { option: "2" }];
  //states of spinning
  const [mustSpin, setMustSpin] = useState(false);
  //states of prizes / recipes
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  //component
  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
}

export default Roulette;
// import RoulettePro from "react-roulette-pro";
// import "react-roulette-pro/dist/index.css";

// //array of food recipes, each a prize to read
// const prizes = [
//   { image: "placeholder" },
//   { image: "placeholder2" },
//   { image: "placeholder3" },
// ];
// // random / whatever it is landed on
// const winPrizeIndex = 0;

// const reproductionArray = (array = [], length = 0) => [
//   ...Array(length)
//     .fill("_")
//     .map(() => array[Math.floor(Math.random() * array.length)]),
// ];
// const reproducedPrizeList = [
//   ...prizes,
//   ...reproductionArray(prizes, prizes.length * 3),
//   ...prizes,
//   ...reproductionArray(prizes, prizes.length),
// ];

// const generateID = () =>
//   `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;
// const prizeList = reproducedPrizeList.map((prize) => ({
//   ...prize,
//   id:
//     typeof crypto.randomUUID === "function" ? crypto.randomUUID : generateID(),
// }));

// function Roulette() {
//   const [start, setStart] = useState(false);
//   const prizeIndex = prizes.length * 4 + winPrizeIndex;

//   function handleStart() {
//     setStart((prevState) => !prevState);
//   }
//   function handlePrizeDefined() {
//     console.log("Prize you got!");
//   }
//   return (
//     <RoulettePro
//       prizes={prizeList}
//       prizeIndex={prizeIndex}
//       start={start}
//       onPrizeDefined={handlePrizeDefined}
//     >
//       <button onClick={handleStart}> Start </button>
//     </RoulettePro>
//   );
// }

// export default Roulette;
