import { useEffect, useState } from "react";
import MedicineRequest from "../../api/MedicineRequest";
import AddEditMedicine from "../dialog/AddEditMedicineDialog";
import DeleteMedicineDialog from "../dialog/DeleteMedicineDialog";
import TabActions from "./TabActions";
import MedicineItem from "./MedicineItem";

const MedicineContainer = ({ className }) => {
  const [listMedicine, setListMedicine] = useState([]);

  //  Buat Filter, Search, & Sorting
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState("");
  const [isSort, setSort] = useState(false);

  //  Dialog
  const [isAddEditDialog, setAddEditDialog] = useState(false);
  const [isDeleteDialog, setDeleteDialog] = useState(false);

  //  Buat Edit Obat
  const [medicineData, setMedicineData] = useState(null);

  const addNewMedicine = async (name, description, status) => {
    await MedicineRequest.addNewMedicine(name, description, status);

    await getMedicine();
    closeDialog();
  };

  const onEditClicked = (medicine) => {
    setMedicineData(medicine);
    setAddEditDialog(true);
  };

  const onEditMedicine = async (id, name, description, status) => {
    await MedicineRequest.editMedicine(id, name, description, status);

    await getMedicine();
    closeDialog();
  };

  const onDeleteClicked = (medicine) => {
    setMedicineData(medicine);
    setDeleteDialog(true);
  };

  const onDeleteMedicine = async (id) => {
    await MedicineRequest.deleteMedicine(id);

    await getMedicine();

    closeDialog();
  };

  const closeDialog = () => {
    setMedicineData(null);
    setAddEditDialog(false);
    setDeleteDialog(false);
  };

  const getMedicine = () => {
    MedicineRequest.getMedicine().then((res) => {
      const { data } = res;

      setListMedicine(data.data ?? []);
    });
  };

  useEffect(() => {
    getMedicine();
  }, []);

  return (
    <div className={`${className} h-full`}>
      <TabActions
        className="py-8"
        onAddMedicineClicked={() => setAddEditDialog(true)}
        onSearchTyped={(e) => setSearchKey(e.target.value)}
        onFilterChanged={(e) => setFilterKey(e.target.value)}
        onSortClicked={() => {
          setSort(!isSort);
        }}
      />
      <div
        className={`grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 `}
      >
        {listMedicine
          .filter(
            (medicine) =>
              medicine.name.toLowerCase().includes(searchKey.toLowerCase()) &&
              medicine.status
                .toString()
                .toLowerCase()
                .includes(filterKey.toLowerCase())
          )
          .sort((med1, med2) => (isSort ? (med2.name > med1.name ? -1 : 1) : 0))
          .map((medicine) => {
            return (
              <MedicineItem
                key={medicine.id}
                medicine={medicine}
                onEditClicked={() => onEditClicked(medicine)}
                onDeleteClicked={() => onDeleteClicked(medicine)}
              />
            );
          })}
      </div>

      {isAddEditDialog ? (
        <AddEditMedicine
          medicine={medicineData}
          onAddMedicine={addNewMedicine}
          onBackClicked={closeDialog}
          onEditMedicine={onEditMedicine}
        />
      ) : (
        ""
      )}

      {isDeleteDialog ? (
        <DeleteMedicineDialog
          medicine={medicineData}
          onBackClicked={closeDialog}
          onDeleteClicked={onDeleteMedicine}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MedicineContainer;
