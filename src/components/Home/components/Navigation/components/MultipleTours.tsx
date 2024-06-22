import { useLocation } from "wouter";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  isDropDownAtom,
  getDropDownAtom,
  tourPreferenceAtom,
} from "../../../../../atoms";

import {
  NavigationDropDownContainer,
  NavigationOptionsContainer,
  NavigationDropDownButton,
  DropDownOptionButton,
} from "../../../../styled_components";

import { loadTour } from "../../../../../services/navigation";

function MultipleTours() {
  const [, setLocation] = useLocation();
  const [isDropDown, setIsDropDown] = useAtom(isDropDownAtom);
  const setTourPreference = useSetAtom(tourPreferenceAtom);

  return (
    <NavigationDropDownContainer
      onClick={() => {
        setIsDropDown(!isDropDown);
      }}
    >
      <NavigationDropDownButton title="Choose Tour" aria-label="Choose Tour">
        Choose Tour
      </NavigationDropDownButton>
      <NavigationOptionsContainer
        style={{ display: useAtomValue(getDropDownAtom) }}
      >
        <DropDownOptionButton
          title="Full Tour"
          aria-label="Full Tour"
          onClick={() => {
            loadTour("full", setTourPreference, setLocation);
          }}
        >
          Full Tour
        </DropDownOptionButton>
        <DropDownOptionButton
          title="Walking Tour"
          aria-label="Walking Tour"
          onClick={() => {
            loadTour("walking", setTourPreference, setLocation);
          }}
        >
          Walking Tour
        </DropDownOptionButton>
        <DropDownOptionButton
          title="Guided Bus Tour"
          aria-label="Guided Bus Tour"
          onClick={() => {
            loadTour("bus", setTourPreference, setLocation);
          }}
        >
          Guided Bus Tour
        </DropDownOptionButton>
      </NavigationOptionsContainer>
    </NavigationDropDownContainer>
  );
}

export default MultipleTours;
