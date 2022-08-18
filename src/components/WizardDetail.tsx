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
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-7 mx-auto">
          <div className="card shadow mb-4">
            <div className="card-body p-5">
              <h4 className="mb-4">
                {currentWizard.firstName} {currentWizard.lastName}
              </h4>
              <div>
                <ElixirsList elixirs={currentWizard.elixirs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardDetail;
