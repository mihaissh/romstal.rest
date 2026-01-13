function InputField({
  label,
  type = 'number',
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  step,
  min,
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-300">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          step={step}
          min={min}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full px-4 py-3 text-sm rounded-xl border-2 transition-all duration-200 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
            error
              ? 'border-red-500 bg-red-950/30 text-red-100 placeholder-red-400/50'
              : 'border-slate-600/60 bg-slate-800/60 backdrop-blur-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:bg-slate-800/80 focus:shadow-xl focus:shadow-indigo-500/20'
          }`}
        />
      </div>
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <span>⚠️</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

export default InputField
