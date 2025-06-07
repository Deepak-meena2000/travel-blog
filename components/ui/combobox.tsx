import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface ComboboxOption {
  value: string;
  label: React.ReactNode;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  renderValue?: (option: ComboboxOption) => React.ReactNode;
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder,
  className,
  renderValue,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((opt) => opt.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`w-full flex items-center justify-between border rounded-md px-3 py-2 bg-[#181c23] border-teal-700/40 text-teal-300 ${
            className || ""
          }`}
          aria-haspopup="listbox"
        >
          <span className="truncate flex items-center gap-2">
            {selected ? (
              renderValue ? (
                renderValue(selected)
              ) : (
                selected.label
              )
            ) : (
              <span className="text-slate-400">{placeholder}</span>
            )}
          </span>
          <span className="ml-2">▼</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[320px] left-0 bg-[#181c23] text-white border border-teal-700/40 rounded-xl z-50">
        <Command className="bg-[#181c23] text-white">
          <CommandInput
            placeholder={placeholder || "Search..."}
            className="bg-[#181c23] text-white placeholder:text-slate-400"
          />
          <CommandList className="bg-[#181c23] text-white">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 font-normal text-base text-white hover:bg-teal-400/10 rounded-xl cursor-pointer"
                >
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
