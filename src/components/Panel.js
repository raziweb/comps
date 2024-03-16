import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassName = classNames(
    "border rounded p-3 bg-white shadow w-full",
    className
  );

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}

export default Panel;
