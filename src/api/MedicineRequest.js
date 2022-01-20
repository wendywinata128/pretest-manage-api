import API from "./Api.js";

const getMedicine = async () => {
  const URL = "/obat";
  const apiRequest = await API();

  try {
    const response = await apiRequest.get(URL);
    return response;
  } catch (e) {
    if (e.response.status === 401) {
      localStorage.removeItem("token");
      return getMedicine();
    }
  }
};

const addNewMedicine = async (name, description, status) => {
  const URL = "/obat";
  const apiRequest = await API();

  try {
    const response = await apiRequest.post(URL, {
      name: name,
      description: description,
      status: status,
    });
    return response;
  } catch (e) {
    if (e.response.status === 401) {
      localStorage.removeItem("token");
      return addNewMedicine();
    }
  }
};

const editMedicine = async (id, name, description, status) => {
  const URL = "/obat";
  const apiRequest = await API();

  try {
    const response = await apiRequest.put(URL, {
      id: id,
      name: name,
      description: description,
      status: status,
    });

    return response;
  } catch (e) {
    if (e.response.status === 401) {
      localStorage.removeItem("token");
      return editMedicine();
    }
  }
};

const deleteMedicine = async (id) => {
  const URL = "/obat";
  const apiRequest = await API();

  try {
    const response = await apiRequest.delete(URL, {
      data: { id: id },
    });

    return response;
  } catch (e) {
    if (e.response.status === 401) {
      localStorage.removeItem("token");
      return editMedicine();
    }
  }
};

const medicineRequest = {
  getMedicine,
  addNewMedicine,
  editMedicine,
  deleteMedicine,
};

export default medicineRequest;
