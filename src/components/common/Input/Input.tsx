import "@/styles/input.css";

type InputParam = {
  label: string;
  placeholder: string;
  param: {
    value: string | "";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
  };
  valid: boolean;
  errMsg: string;
};

export default function Input({
  label,
  placeholder,
  param,
  valid,
  errMsg,
}: InputParam) {
  return (
    <div
      className={
        param.name === "newTodo"
          ? "flex-fill align-items-center"
          : "form-group mt-3"
      }
    >
      {param.name === "newTodo" ? <></> : <label>{label}</label>}
      <input
        id={param.name === "newTodo" ? "todo" : param.name}
        placeholder={placeholder}
        className="form-control"
        {...param}
      />
      {!valid ? <p className="errMsg">{errMsg}</p> : <></>}
    </div>
  );
}
