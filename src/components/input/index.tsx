type InputProps = {
  title?: string;
  placeholder?: string;
  value?: any;
  type?: string;
  size?: string;
};

const InputCustom = (props: InputProps) => {
  const { title, placeholder, value, type, size } = props;

  return (
    <div
      className={`${
        size === "small" ? "min-w-[200px]" : "min-w-[300px]"
      } flex-1 max-[380px]:min-w-[150px]`}
    >
      {title && <p>{title}</p>}
      <div className="mt-2 grid h-10 place-items-center rounded border border-gray-300/50 px-6">
        <input
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

export default InputCustom;
