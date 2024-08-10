import { useState } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusIcon } from "lucide-react";

const dataTypes = [
  "address",
  "string",
  "bool",
  "bytes32",
  "bytes",
  "uint8",
  "uint16",
];

function CreateSchema(props: any) {
  const { isSchemaModelActive, setIsSchemeModelActive } = props;
  const [fields, setFields] = useState([
    { name: "", type: "", isArray: false },
  ]);

  const handleAddField = () => {
    setFields([...fields, { name: "", type: "", isArray: false }]);
  };

  const handleFieldChange = (index: number, field: string, value: any) => {
    const newFields = fields.slice();
    //@ts-ignore
    newFields[index][field] = value;
    setFields(newFields);
  };

  const handleCheckboxChange = (index: number) => {
    const newFields = fields.slice();
    newFields[index].isArray = !newFields[index].isArray;
    setFields(newFields);
  };

  const handleRemoveField = (index: number) => {
    const newFields = fields.slice();
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Capture form data here
    const schemaData = fields;
    console.log("Form Data: ", schemaData);
    // Perform necessary actions, e.g., send data to a server or update the application state
  };

  return (
    <Dialog open={isSchemaModelActive} onOpenChange={setIsSchemeModelActive}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Create EAS Schema</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new EAS schema.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div
              key={index}
              className="flex flex-row gap-4 items-center justify-center mb-4"
            >
              <div className="flex-1">
                {/* <Label htmlFor={`name-${index}`} className="text-left">
                  Name
                </Label> */}
                <Input
                  id={`name-${index}`}
                  value={field.name}
                  onChange={(e) =>
                    handleFieldChange(index, "name", e.target.value)
                  }
                  className="flex-1"
                  placeholder="Enter Key Name"
                />
              </div>

              <div className="flex-1">
                {/* <Label htmlFor={`type-${index}`} className="text-left">
                  Type
                </Label> */}
                <Select
                  value={field.type}
                  onValueChange={(value) =>
                    handleFieldChange(index, "type", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Data Types</SelectLabel>
                      {dataTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end space-x-2">
                <Checkbox
                  id={`array-${index}`}
                  checked={field.isArray}
                  onCheckedChange={() => handleCheckboxChange(index)}
                />
                <label
                  htmlFor={`array-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Array
                </label>
              </div>

              <div className="flex items-end space-x-2">
                <Button
                  variant="ghost"
                  className="text-red-500"
                  onClick={() => handleRemoveField(index)}
                >
                  <TrashIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}

          <div>
            <Button
              variant="secondary"
              className="flex items-center justify-center w-full"
              onClick={handleAddField}
              type="button"
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              Add New Field
            </Button>
          </div>

          <DialogFooter className="sm:justify-end mt-4">
            <Button type="submit">Create Schema</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { CreateSchema };
