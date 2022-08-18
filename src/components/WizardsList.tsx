import React, { useState, useEffect } from "react";
import WizardService from "src/services/WizardService";
import Wizard from "src/types/Wizard";

const WizardsList: React.FC = () => {
  const [wizards, setWizards] = useState<Wizard[]>([]);

  useEffect(() => {
    retrieveWizards();
  }, []);

  const retrieveWizards: any = () => {
    WizardService.getAll()
      .then((response: any) => {
        setWizards(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Wizards List</h4>
        <ul className="list-group">
          {wizards.map((wizard, index) => (
            <li key={index}>{wizard.lastName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WizardsList;
