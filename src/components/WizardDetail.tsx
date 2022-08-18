import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WizardService from "src/services/WizardService";
import Wizard from "src/types/Wizard";
import ElixirsList from "./ElixirsList";

const WizardDetail: React.FC = () => {
  const { id } = useParams();
  const initialWizardState = {
    id: "",
    firstName: "",
    lastName: "",
    elixirs: [],
  };

  const [currentWizard, setCurrentWizard] =
    useState<Wizard>(initialWizardState);

  const getWizard: any = (id: string) => {
    WizardService.get(id)
      .then((response: any) => {
        setCurrentWizard(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id != null) getWizard(id);
  }, [id]);

  return (
    <div>
      <h4>Wizard</h4>
      <div>
        <p>
          {currentWizard.firstName} {currentWizard.lastName}
        </p>
      </div>
      <div>
        <ElixirsList elixirs={currentWizard.elixirs} />
      </div>
    </div>
  );
};

export default WizardDetail;
