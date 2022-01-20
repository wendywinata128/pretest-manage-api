import Button from "../global/Button";
import Card from "../global/Card";
import AlertImage from "../../assets/undraw_alert.svg";

const DeleteMedicineDialog = ({ medicine, onBackClicked, onDeleteClicked }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-black/75 flex items-center justify-center">
      <Card
        child={
          <div className="w-full flex flex-col items-center">
            <img src={AlertImage} alt="alert" className="h-32 mb-6" />
            <h6 className="mb-6 text-center">
              Medicine with name <b>{medicine == null ? "" : medicine.name}</b>{" "}
              will be deleted, are you sure ?
            </h6>
            <div className="action grid grid-cols-2 w-full gap-4">
              <Button
                onClicked={onBackClicked}
                title="Cancel"
                textColor="black"
              />
              <Button
                title={"Delete"}
                textColor="white"
                backgroundColor="#E10009"
                onClicked={() => onDeleteClicked(medicine.id)}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default DeleteMedicineDialog;
