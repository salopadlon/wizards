import { http } from "../http-common";

async function getAll(): Promise<any> {
  return await http.get("/Wizards");
}

async function get(id: string): Promise<any> {
  return await http.get(`/Wizards/${id}`);
}

const WizardService = { getAll, get };

export default WizardService;
