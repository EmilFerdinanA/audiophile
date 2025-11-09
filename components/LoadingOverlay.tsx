export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 containers bg-black/40 backdrop-blur-lg z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        <span className="text-white text-sm font-medium tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
}
