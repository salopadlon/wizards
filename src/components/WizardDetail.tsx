// import React, { useState, useEffect, ChangeEvent } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import WizardService from "src/services/WizardService";
// import Wizard from "src/types/Wizard";

// const WizardDetail: React.FC = () => {
//     const { id }= useParams();
//     // const navigate = useNavigate();
//     const initialWizardState = {
//         id: null,
//         firstName: "",
//         lastName: "",
//         elixirs: []
//     };

//     const [currentWizard, setCurrentWizard] = useState<Wizard>(initialWizardState);
//     // const [message, setMessage] = useState<string>("");

//     const getWizard:any = (id: string) => {
//         WizardService.get(id)
//             .then((response: any) => {
//             setCurrentWizard(response.data);
//             console.log(response.data);
//         })
//             .catch((e: Error) => {
//             console.log(e);
//         });
//     };

//     useEffect(() => {
//         if (id)
//         getWizard(id);
//     }, [id]);

//     // const handleInputChange = (event: ChangeEvent) => {
//     //     const { name, value } = event.target;
//     //     setCurrentTutorial({ ...currentTutorial, [name]: value });
//     // };

//     // const updatePublished = (status: boolean) => {
//     //     const data = {
//     //       id: currentTutorial.id,
//     //       title: currentTutorial.title,
//     //       description: currentTutorial.description,
//     //       published: status
//     //     };
//     //     TutorialDataService.update(currentTutorial.id, data)
//     //       .then((response: any) => {
//     //         console.log(response.data);
//     //         setCurrentTutorial({ ...currentTutorial, published: status });
//     //         setMessage("The status was updated successfully!");
//     //       })
//     //       .catch((e: Error) => {
//     //         console.log(e);
//     //       });
//     //   };
//     //   const updateTutorial = () => {
//     //     TutorialDataService.update(currentTutorial.id, currentTutorial)
//     //       .then((response: any) => {
//     //         console.log(response.data);
//     //         setMessage("The tutorial was updated successfully!");
//     //       })
//     //       .catch((e: Error) => {
//     //         console.log(e);
//     //       });
//     //   };
//     //   const deleteTutorial = () => {
//     //     TutorialDataService.remove(currentTutorial.id)
//     //       .then((response: any) => {
//     //         console.log(response.data);
//     //         navigate("/tutorials");
//     //       })
//     //       .catch((e: Error) => {
//     //         console.log(e);
//     //       });
//     //   };

//     return (
//         <div>
//           {currentWizard ? (
//             <div className="edit-form">
//               <h4>Wizard</h4>
//               <form>
//                 <div className="form-group">
//                   <label htmlFor="title">First Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="title"
//                     name="title"
//                     value={currentWizard.firstName}
//                     // onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="description">Last Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="description"
//                     name="description"
//                     value={currentWizard.lastName}
//                     // onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>
//                     <strong>Elixirs:</strong>
//                   </label>
//                   {currentWizard.elixirs ? "Published" : "Pending"}
//                 </div>
//               </form>
//               {currentTutorial.published ? (
//                 <button
//                   className="badge badge-primary mr-2"
//                   onClick={() => updatePublished(false)}
//                 >
//                   UnPublish
//                 </button>
//               ) : (
//                 <button
//                   className="badge badge-primary mr-2"
//                   onClick={() => updatePublished(true)}
//                 >
//                   Publish
//                 </button>
//               )}
//               <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
//                 Delete
//               </button>
//               <button
//                 type="submit"
//                 className="badge badge-success"
//                 onClick={updateTutorial}
//               >
//                 Update
//               </button>
//               <p>{message}</p>
//             </div>
//           ) : (
//             <div>
//               <br />
//               <p>Please click on a Tutorial...</p>
//             </div>
//           )}
//         </div>
//       );
// }

// export default WizardDetail;

export {};
