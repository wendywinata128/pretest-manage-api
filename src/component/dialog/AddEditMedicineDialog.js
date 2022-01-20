import { useState } from "react";
import Button from "../global/Button";
import Card from "../global/Card";
import Chooser from "../global/Chooser";
import TextArea from "../global/TextArea";
import TextField from "../global/TextField";

const AddEditMedicineDialog = ({
  medicine,
  onAddMedicine,
  onEditMedicine,
  onBackClicked,
}) => {
  const isEdit = medicine != null;

  const [fieldName, setFieldName] = useState(isEdit ? medicine.name : "");
  const [fieldDescription, setFieldDescription] = useState(
    isEdit ? medicine.description : ""
  );
  const [fieldStatus, setFieldStatus] = useState(
    isEdit ? medicine.status : true
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-black/75 flex items-center justify-center">
      <Card
        child={
          <div className="w-full">
            <h6 className="mb-6 text-lg text-left w-full font-bold border-l-[4px] border-[#42934A] pl-4 ">
              Add New Medicine
            </h6>
            <TextField
              placeholder="Medicine Name"
              bgColor="black"
              className="w-full mb-2"
              onTyped={(e) => setFieldName(e.target.value)}
              value={fieldName}
            />
            <TextArea
              className="w-full mb-4"
              placeholder="Medicine Description"
              onTyped={(e) => setFieldDescription(e.target.value)}
              value={fieldDescription}
            />
            <Chooser
              className="mb-4"
              name="status"
              options={[
                { name: "Active", value: "true" },
                { name: "Inactive", value: "false" },
              ]}
              defaultValue={fieldStatus}
              onValueChanged={(newVal) => setFieldStatus(newVal)}
            />
            <div className="action grid grid-cols-2 w-full gap-4 mt-8">
              <Button
                onClicked={onBackClicked}
                title="Cancel"
                textColor="black"
              />
              <Button
                onClicked={() =>
                  isEdit
                    ? onEditMedicine(
                        medicine.id,
                        fieldName,
                        fieldDescription,
                        fieldStatus
                      )
                    : onAddMedicine(fieldName, fieldDescription, fieldStatus)
                }
                title={isEdit ? "Edit" : "Add"}
                textColor="white"
                backgroundColor="#34743A"
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default AddEditMedicineDialog;
