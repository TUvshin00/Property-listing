import SelectSection from "../component/SelectSection";
import LogoIcon from "../svg/LogoIcon";
import Phone from "../svg/Phone";

export default function Header() {
  return (
    <main className="w-full">
      <div className="container m-auto">
        <div className="  flex items-center gap-[240px] ">
          <div className="flex gap-5 items-center">
            <LogoIcon />
            <SelectSection />
          </div>
          <div className="flex  gap-14 ml-20 ">
            <div className="flex items-center  gap-3">
              <Phone />
              <p className="text-gray-500">+ 1 (800) 657 8976</p>
            </div>
            <div className="flex items-center gap-5">
              <img src="/man.png" />
              <p className="text-lg font-extrabold">Jon Doe</p>
              <button>
                <img src="/chevron-down.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
