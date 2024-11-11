import React, { FC } from 'react';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const Switch: FC<SwitchProps> = ({ checked, onCheckedChange }) => {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onCheckedChange(event.target.checked)}
          className="sr-only"
        />
        <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
        <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${checked ? 'translate-x-full bg-purple-400' : ""}`}></div>
      </div>
    </label>
  );
};

export default Switch;