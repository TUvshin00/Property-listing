import { CardHeaderText } from ".";

export default function Card3() {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl ">
        <div className="flex p-3">
          <figure>
            <img src="/Rectangle 12 (2).png" alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Clasic Studio Apartment</h2>
            <div className="flex">
              <img src="/Group.png" />
              <p>4.0 </p>
              <p>Mercedes Vito</p>
            </div>
            <p className="font-[300px] text-[#3E4958]">
              2 guests | 2 bedroom | 2 bathroom
            </p>
            <div className="flex gap-4 mt-3">
              <img className="w-[26px] h-[26px]" src="/icon.png" alt="" />
              <p className="font">Share with Super Host</p>
            </div>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
