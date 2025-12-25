import ChooseLifeDreamer from "./ScreenTwoCPN/ChooseLifeDreamer";
import ChooseLifeHorror from "./ScreenTwoCPN/ChooseLifeHorror";

const ChooseLife = () => {
  return (
    <>
      <div className="flex justify-between">
        <ChooseLifeHorror></ChooseLifeHorror>
        <ChooseLifeDreamer></ChooseLifeDreamer>
      </div>
    </>
  );
};

export default ChooseLife;
