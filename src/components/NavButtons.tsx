import React, { useEffect } from "react";
import { IonButton, IonMenuButton } from "@ionic/react";
export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);
    return () => mediaQuery.removeListener(setMQuery);
  });
  console.log(mQuery.matches);
  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
        <>
          <IonButton routerLink="/home">Home</IonButton>
          <IonButton routerLink="/page1">Page 1</IonButton>
          <IonButton routerLink="/bmi">BMI</IonButton>
        </>
      )}
    </div>
  );
};
