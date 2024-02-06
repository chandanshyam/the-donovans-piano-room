import TempoSetting from "./tempo-setting/TempoSetting";
import Metronome from "./metronome/Metronome";

const VirtualMetronome = () => {
  return (
    <div className="flex h-full justify-center bg-primary-skin p-12">
      <div className="flex h-full w-full laptop:w-10/12 desktop:gap-16">
        <TempoSetting />
        <Metronome />
      </div>
    </div>
  );
};

export default VirtualMetronome;
