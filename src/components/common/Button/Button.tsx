import React from "react";

type ButtonParam = {
  children: React.ReactNode;
  type: string;
  onClick: React.MouseEventHandler<HTMLElement> | undefined;
  disabled: boolean;
};

export default function Button({
  children,
  type,
  onClick,
  disabled,
}: ButtonParam) {
  if (type.includes("todo")) {
    return (
      <div className="align-items-center">
        <button
          className={
            type.includes("todo delete")
              ? "btn btn-danger ms-2"
              : type.includes("todo modify")
              ? "btn btn-success ms-2"
              : type.includes("todo cancel")
              ? "btn btn-light ms-2"
              : "btn btn-primary ms-2"
          }
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </div>
    );
  }

  if (type === "logout") {
    return (
      <button className="btn btn-link" onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <div className="d-grid gap-2 mt-3">
      <button className="btn btn-primary" disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
