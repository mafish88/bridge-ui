import dynamic from "next/dynamic";

export const DynamicThemeWrapper = dynamic(() => import("./theme-switch"), {
  ssr: false, // This will load the component only on the client side
  loading: () => (
    <div className="w-screen h-[500px] flex flex-row items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  ), // This will show a loading component while the component is being loaded
});
