import TempoSetting from "./tempo-setting/TempoSetting";
import Metronome from "./metronome/Metronome";

const VirtualMetronome = () => {
  return (
    <div className="flex h-full items-start p-10">
      <TempoSetting />
      <Metronome />
    </div>
  );
};

export default VirtualMetronome;
