import React, { useRef, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { happy, calculator, refresh } from "ionicons/icons";
import { NavButtons } from "./NavButtons";

const BMICalculator: React.FC = () => {
  const [cal, setCal] = useState<number>();

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    if (!enteredHeight || !enteredWeight) {
      return;
    }
    const height = +enteredHeight / 100;
    const bmi = (+enteredWeight / (+height * +height)).toFixed(3);
    setCal(+bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            <IonIcon icon={happy}></IonIcon>
            BMI Kalkulator
          </IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Unesi visinu</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Unesi tezinu</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton fill="solid" onClick={calculateBMI}>
                <IonIcon slot="start" icon={calculator}></IonIcon>
                Izracunaj
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="outline" onClick={resetInputs}>
                <IonIcon slot="start" icon={refresh} />
                Ponisti
              </IonButton>
            </IonCol>
          </IonRow>
          {cal && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <h2>{cal}</h2>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default BMICalculator;
