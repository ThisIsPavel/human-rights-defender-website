import { deleteAsync } from "del";

const clear = () => {
  return deleteAsync(app.path.buildFolder);
};

export { clear };
