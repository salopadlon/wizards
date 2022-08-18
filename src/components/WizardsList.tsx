import React, { useState, useEffect } from "react";
import WizardService from "src/services/WizardService";
import Wizard from "src/types/Wizard";
import "../assets/style.css";

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
    <div className="container mt-3 mb-4">
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="row">
          <div className="col-md-12">
            <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
              <table className="table manage-candidates-top mb-0">
                <thead>
                  <tr>
                    <th>Wizards</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="candidates-list">
                    {wizards.map((wizard: Wizard, index: number) => (
                      <td className="title" key={index}>
                        <div className="thumb">
                          <img
                            className="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt=""
                          />
                        </div>
                        <div className="candidate-list-details">
                          <div className="candidate-list-info">
                            <div className="candidate-list-title">
                              <a href={"/wizard/" + wizard.id}>
                                {wizard.firstName} {wizard.lastName}
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardsList;
