
function IconButton({ icon: Icon, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex items-center justify-center rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
    >
      <Icon size={19} />
    </button>
  );
}

export default IconButton;
